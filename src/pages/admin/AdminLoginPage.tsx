import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { Lock, Eye, EyeOff, Sparkles, ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

export function AdminLoginPage() {
  const [passcode, setPasscode] = useState("");
  const [showPasscode, setShowPasscode] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login, isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If already authenticated, redirect immediately
  React.useEffect(() => {
    if (isAuthenticated) {
      const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/admin";
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      const success = login(passcode);
      if (success) {
        const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/admin";
        navigate(from, { replace: true });
      } else {
        setError("Invalid studio passcode. Please check and try again.");
        setIsLoading(false);
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-studio-espresso text-studio-ivory flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Back to website button */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-champagne-300 hover:text-champagne-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Studio Site</span>
        </Link>
      </div>

      <div className="w-full max-w-md bg-studio-charcoal/70 border border-studio-border p-8 sm:p-10 shadow-2xl backdrop-blur-md relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-champagne-500/10 text-champagne-400 border border-champagne-500/30 mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-champagne-400 block mb-1">
            Studio Management Portal
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl text-studio-ivory font-normal tracking-wide">
            Essence Author Admin
          </h1>
          <p className="text-xs text-studio-taupe mt-2">
            Secure author access to manage treatments, pricing, gallery photos, and studio settings for Church Road, Dimapur.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 bg-red-900/30 border border-red-500/40 text-red-200 text-xs rounded-sm text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-champagne-300 mb-2">
              Studio Passcode
            </label>
            <div className="relative">
              <input
                type={showPasscode ? "text" : "password"}
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter admin passcode"
                className="w-full bg-studio-espresso/90 border border-studio-border px-4 py-3 text-sm text-studio-ivory placeholder-studio-taupe/60 focus:outline-none focus:border-champagne-400 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPasscode(!showPasscode)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-studio-taupe hover:text-champagne-300 p-1"
                aria-label="Toggle passcode visibility"
              >
                {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-champagne-500 hover:bg-champagne-400 text-studio-espresso font-semibold uppercase tracking-widest text-xs py-3.5 px-6 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLoading ? (
              <span>Verifying...</span>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Enter Admin Panel</span>
              </>
            )}
          </button>
        </form>

        {/* Credentials reminder */}
        <div className="mt-8 pt-6 border-t border-studio-border/50 text-center">
          <p className="text-[11px] text-studio-taupe flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
            <span>Default studio passcode:</span>
            <code className="bg-studio-espresso px-2 py-0.5 rounded text-champagne-300 font-mono text-[11px]">
              essence2024
            </code>
          </p>
          <p className="text-[10px] text-studio-taupe/70 mt-1">
            You can change this passcode at any time inside the admin settings.
          </p>
        </div>
      </div>
    </div>
  );
}
