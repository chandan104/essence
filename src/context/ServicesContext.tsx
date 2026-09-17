import React, { createContext, useContext, useState, useEffect } from "react";
import {
  servicesData as initialServices,
  serviceCategories,
  ServiceItem,
  ServiceCategory,
} from "../data/servicesData";

const STORAGE_KEY = "essence_services_catalog_v1";

interface ServicesContextType {
  services: ServiceItem[];
  categories: typeof serviceCategories;
  addService: (newService: Omit<ServiceItem, "id"> & { id?: string }) => ServiceItem;
  updateService: (id: string, updatedData: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;
  toggleFeatured: (id: string) => void;
  resetToDefaults: () => void;
  exportData: () => string;
  importData: (jsonString: string) => boolean;
  getServiceBySlug: (slug: string) => ServiceItem | undefined;
}

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

export function ServicesProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Error reading services from localStorage:", e);
    }
    return initialServices;
  });

  // Save to localStorage whenever services change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
    } catch (e) {
      console.error("Failed to persist services to localStorage:", e);
    }
  }, [services]);

  // Sync across tabs if user opens admin in one tab and site in another
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) {
            setServices(parsed);
          }
        } catch (err) {
          console.error("Failed to parse storage update:", err);
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const addService = (newService: Omit<ServiceItem, "id"> & { id?: string }): ServiceItem => {
    const categoryNames: Record<ServiceCategory, string> = {
      hair: "Hair",
      nails: "Nails",
      skin: "Skin",
      lashes: "Lashes",
      brows: "Brows",
    };

    const generatedId =
      newService.id ||
      newService.slug ||
      `service-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;

    const fullService: ServiceItem = {
      id: generatedId,
      name: newService.name,
      category: newService.category,
      categoryName: categoryNames[newService.category] || "Treatment",
      slug:
        newService.slug ||
        newService.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
      shortDescription: newService.shortDescription || "",
      fullDescription: newService.fullDescription || newService.shortDescription || "",
      whoIsItFor: newService.whoIsItFor || [],
      whatToExpect: newService.whatToExpect || [],
      durationPlaceholder: newService.durationPlaceholder || "Approx. 45-60 mins",
      pricePlaceholder: newService.pricePlaceholder || "Price on consultation",
      faqs: newService.faqs || [],
      prefilledWhatsAppMessage:
        newService.prefilledWhatsAppMessage ||
        `Hi Essence Hair and Makeup Studio, I am interested in ${newService.name} at your Church Road studio.`,
      image:
        newService.image ||
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
      featured: newService.featured ?? false,
      seoTitle:
        newService.seoTitle ||
        `${newService.name} in Dimapur | Essence Hair & Makeup Studio`,
      seoDescription:
        newService.seoDescription ||
        `Experience professional ${newService.name} at Essence Hair and Makeup Studio, Church Road, Dimapur.`,
      suitabilityDisclaimer: newService.suitabilityDisclaimer,
      subStyles: newService.subStyles,
    };

    setServices((prev) => [fullService, ...prev]);
    return fullService;
  };

  const updateService = (id: string, updatedData: Partial<ServiceItem>) => {
    setServices((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const categoryNames: Record<ServiceCategory, string> = {
            hair: "Hair",
            nails: "Nails",
            skin: "Skin",
            lashes: "Lashes",
            brows: "Brows",
          };
          const category = updatedData.category || item.category;
          return {
            ...item,
            ...updatedData,
            category,
            categoryName: categoryNames[category] || item.categoryName,
          };
        }
        return item;
      })
    );
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFeatured = (id: string) => {
    setServices((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, featured: !item.featured } : item
      )
    );
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setServices(initialServices);
  };

  const exportData = (): string => {
    return JSON.stringify(services, null, 2);
  };

  const importData = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setServices(parsed);
        return true;
      }
    } catch (e) {
      console.error("Invalid JSON imported:", e);
    }
    return false;
  };

  const getServiceBySlug = (slug: string): ServiceItem | undefined => {
    return services.find(
      (s) => s.slug.toLowerCase() === slug.toLowerCase() || s.id === slug
    );
  };

  return (
    <ServicesContext.Provider
      value={{
        services,
        categories: serviceCategories,
        addService,
        updateService,
        deleteService,
        toggleFeatured,
        resetToDefaults,
        exportData,
        importData,
        getServiceBySlug,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices() {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useServices must be used within a ServicesProvider");
  }
  return context;
}
