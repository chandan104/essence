import React, { createContext, useContext, useState, useEffect } from "react";

const AUTH_KEY = "essence_admin_auth_status";
const PASSCODE_KEY = "essence_admin_passcode";
const DEFAULT_PASSCODE = "essence2024";

interface AdminAuthContextType {
  isAuthenticated: boolean;
  login: (passcode: string) => boolean;
  logout: () => void;
  changePasscode: (oldPasscode: string, newPasscode: string) => { success: boolean; message: string };
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === "true";
    } catch {
      return false;
    }
  });

  const getActivePasscode = (): string => {
    try {
      return localStorage.getItem(PASSCODE_KEY) || DEFAULT_PASSCODE;
    } catch {
      return DEFAULT_PASSCODE;
    }
  };

  const login = (inputPasscode: string): boolean => {
    const validPasscode = getActivePasscode();
    if (inputPasscode.trim() === validPasscode) {
      try {
        localStorage.setItem(AUTH_KEY, "true");
      } catch (err) {
        console.error("Storage error:", err);
      }
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch (err) {
      console.error("Storage error:", err);
    }
    setIsAuthenticated(false);
  };

  const changePasscode = (
    oldPasscode: string,
    newPasscode: string
  ): { success: boolean; message: string } => {
    const currentPasscode = getActivePasscode();
    if (oldPasscode !== currentPasscode) {
      return { success: false, message: "Current passcode is incorrect." };
    }
    if (!newPasscode || newPasscode.trim().length < 4) {
      return { success: false, message: "New passcode must be at least 4 characters." };
    }
    try {
      localStorage.setItem(PASSCODE_KEY, newPasscode.trim());
      return { success: true, message: "Passcode updated successfully." };
    } catch {
      return { success: false, message: "Could not save new passcode." };
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        changePasscode,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}
