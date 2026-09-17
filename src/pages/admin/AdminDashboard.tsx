import React, { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { useServices } from "../../context/ServicesContext";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { ServiceFormModal } from "./ServiceFormModal";
import { ServiceItem, ServiceCategory } from "../../data/servicesData";
import { siteConfig } from "../../config/siteConfig";
import {
  Sparkles,
  Plus,
  Search,
  Filter,
  Star,
  Edit,
  Trash2,
  ExternalLink,
  Download,
  Upload,
  RotateCcw,
  LogOut,
  Key,
  CheckCircle,
  AlertCircle,
  Eye,
  Scissors,
  Layers,
  Clock,
  DollarSign,
  ChevronRight,
} from "lucide-react";

export function AdminDashboard() {
  const {
    services,
    categories,
    addService,
    updateService,
    deleteService,
    toggleFeatured,
    resetToDefaults,
    exportData,
    importData,
  } = useServices();

  const { logout, changePasscode } = useAdminAuth();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filterFeaturedOnly, setFilterFeaturedOnly] = useState(false);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);

  // Passcode change modal state
  const [isPasscodeModalOpen, setIsPasscodeModalOpen] = useState(false);
  const [oldPasscode, setOldPasscode] = useState("");
  const [newPasscode, setNewPasscode] = useState("");
  const [passcodeMessage, setPasscodeMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Toast / notification
  const [notification, setNotification] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  // Filtered services
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.slug.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || service.category === selectedCategory;

      const matchesFeatured = filterFeaturedOnly ? service.featured : true;

      return matchesSearch && matchesCategory && matchesFeatured;
    });
  }, [services, searchQuery, selectedCategory, filterFeaturedOnly]);

  // Metrics
  const metrics = useMemo(() => {
    const total = services.length;
    const featured = services.filter((s) => s.featured).length;
    const byCategory: Record<string, number> = {};
    services.forEach((s) => {
      byCategory[s.category] = (byCategory[s.category] || 0) + 1;
    });
    return { total, featured, byCategory };
  }, [services]);

  const handleOpenAddModal = () => {
    setEditingService(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (service: ServiceItem) => {
    setEditingService(service);
    setIsModalOpen(true);
  };

  const handleSaveService = (data: Partial<ServiceItem>) => {
    if (editingService) {
      updateService(editingService.id, data);
      showToast(`Updated "${data.name || editingService.name}" successfully.`);
    } else {
      const created = addService(data as any);
      showToast(`Created new service "${created.name}" successfully.`);
    }
  };

  const handleDeleteService = (service: ServiceItem) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${service.name}"? This will remove it from the catalog and the website immediately.`
      )
    ) {
      deleteService(service.id);
      showToast(`Deleted "${service.name}".`);
    }
  };

  const handleExport = () => {
    const jsonStr = exportData();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `essence-studio-services-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast("Downloaded services backup JSON file.");
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importData(content);
        if (success) {
          showToast("Successfully restored services from backup JSON.");
        } else {
          alert("Failed to restore: Invalid JSON structure or empty file.");
        }
      }
    };
    reader.readAsText(file);
    if (e.target) e.target.value = "";
  };

  const handleResetDefaults = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all services to the factory defaults? Any custom modifications will be lost unless you have exported a backup."
      )
    ) {
      resetToDefaults();
      showToast("Reset catalog back to initial factory services.");
    }
  };

  const handleChangePasscode = (e: React.FormEvent) => {
    e.preventDefault();
    const res = changePasscode(oldPasscode, newPasscode);
    if (res.success) {
      setPasscodeMessage({ type: "success", text: res.message });
      setTimeout(() => {
        setIsPasscodeModalOpen(false);
        setOldPasscode("");
        setNewPasscode("");
        setPasscodeMessage(null);
        showToast("Admin passcode changed successfully.");
      }, 1500);
    } else {
      setPasscodeMessage({ type: "error", text: res.message });
    }
  };

  return (
    <div className="min-h-screen bg-[#151311] text-studio-ivory flex flex-col font-sans">
      {/* Top Notification Toast */}
      {notification && (
        <div className="fixed top-5 right-5 z-50 bg-champagne-600 text-studio-espresso font-semibold text-xs py-3 px-5 rounded shadow-2xl flex items-center gap-2 animate-fade-in border border-champagne-300">
          <CheckCircle className="w-4 h-4 text-studio-espresso" />
          <span>{notification}</span>
        </div>
      )}

      {/* Admin Navbar */}
      <header className="border-b border-studio-border bg-studio-espresso sticky top-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="font-serif text-xl tracking-wider text-studio-ivory group-hover:text-champagne-300 transition-colors">
              ESSENCE
            </span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-champagne-400 border border-champagne-400/40 px-2 py-0.5 rounded-sm">
              Author Admin
            </span>
          </Link>
          <span className="hidden md:inline-block text-xs text-studio-taupe">
            Church Road, Dimapur • {siteConfig.contact.phoneDisplay}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-champagne-300 hover:text-champagne-200 px-3 py-1.5 rounded border border-champagne-500/30 hover:border-champagne-400 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">View Public Website</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </Link>

          <button
            onClick={() => setIsPasscodeModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs text-studio-taupe hover:text-studio-ivory px-3 py-1.5 rounded transition-colors"
            title="Change Passcode"
          >
            <Key className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Passcode</span>
          </button>

          <button
            onClick={logout}
            className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 px-3 py-1.5 rounded transition-colors"
            title="Sign Out"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8 space-y-8">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-studio-charcoal/60 border border-studio-border p-5 rounded-sm flex flex-col justify-between">
            <span className="text-[11px] font-medium uppercase tracking-wider text-studio-taupe">
              Total Services
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="font-serif text-3xl text-studio-ivory font-semibold">
                {metrics.total}
              </span>
              <span className="text-[11px] text-champagne-400">All Categories</span>
            </div>
          </div>

          <div className="bg-studio-charcoal/60 border border-studio-border p-5 rounded-sm flex flex-col justify-between">
            <span className="text-[11px] font-medium uppercase tracking-wider text-studio-taupe flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-champagne-400 fill-champagne-400/30" />
              Featured On Home
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="font-serif text-3xl text-champagne-300 font-semibold">
                {metrics.featured}
              </span>
              <span className="text-[11px] text-studio-taupe">Continuous Marquee</span>
            </div>
          </div>

          <div className="bg-studio-charcoal/60 border border-studio-border p-5 rounded-sm col-span-2 flex flex-col justify-between">
            <span className="text-[11px] font-medium uppercase tracking-wider text-studio-taupe">
              Category Distribution
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {categories.map((c) => (
                <span
                  key={c.id}
                  className="text-xs bg-studio-espresso border border-studio-border px-2.5 py-1 rounded text-studio-taupe flex items-center gap-1.5"
                >
                  <span className="capitalize font-medium text-studio-ivory">{c.name}:</span>
                  <strong className="text-champagne-300">{metrics.byCategory[c.id] || 0}</strong>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Header & Tools */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl text-studio-ivory font-normal">
              Services & Treatments Catalog
            </h1>
            <p className="text-xs text-studio-taupe mt-1">
              Manage treatments, customize pricing & descriptions, upload photos, and toggle carousel highlights.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Add Service Button */}
            <button
              onClick={handleOpenAddModal}
              className="inline-flex items-center gap-2 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso font-semibold uppercase tracking-wider text-xs px-4 py-2.5 rounded-sm shadow transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Service</span>
            </button>

            {/* Export JSON */}
            <button
              onClick={handleExport}
              className="inline-flex items-center gap-1.5 bg-studio-charcoal border border-studio-border hover:border-champagne-500/50 text-studio-ivory text-xs px-3 py-2.5 rounded-sm transition-colors"
              title="Download backup JSON of all services"
            >
              <Download className="w-3.5 h-3.5 text-champagne-400" />
              <span className="hidden sm:inline">Export</span>
            </button>

            {/* Import JSON */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportFile}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 bg-studio-charcoal border border-studio-border hover:border-champagne-500/50 text-studio-ivory text-xs px-3 py-2.5 rounded-sm transition-colors"
              title="Restore services from a backup JSON"
            >
              <Upload className="w-3.5 h-3.5 text-champagne-400" />
              <span className="hidden sm:inline">Import</span>
            </button>

            {/* Reset Defaults */}
            <button
              onClick={handleResetDefaults}
              className="inline-flex items-center gap-1.5 bg-studio-charcoal border border-studio-border hover:border-red-500/50 text-studio-taupe hover:text-red-300 text-xs px-3 py-2.5 rounded-sm transition-colors"
              title="Reset catalog to initial factory data"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-studio-charcoal/60 border border-studio-border p-4 rounded-sm space-y-3">
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-studio-taupe absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatments by name, slug, or keywords..."
                className="w-full bg-studio-espresso border border-studio-border rounded-sm pl-9 pr-4 py-2 text-xs text-studio-ivory placeholder-studio-taupe/60 focus:outline-none focus:border-champagne-500"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`text-xs px-3 py-1.5 rounded transition-colors ${
                  selectedCategory === "all"
                    ? "bg-champagne-600 text-studio-espresso font-semibold"
                    : "bg-studio-espresso text-studio-taupe hover:text-studio-ivory border border-studio-border"
                }`}
              >
                All ({services.length})
              </button>
              {categories.map((cat) => {
                const count = services.filter((s) => s.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs px-3 py-1.5 rounded transition-colors ${
                      selectedCategory === cat.id
                        ? "bg-champagne-600 text-studio-espresso font-semibold"
                        : "bg-studio-espresso text-studio-taupe hover:text-studio-ivory border border-studio-border"
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Featured Only Toggle */}
            <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-studio-taupe hover:text-studio-ivory whitespace-nowrap pl-2">
              <input
                type="checkbox"
                checked={filterFeaturedOnly}
                onChange={(e) => setFilterFeaturedOnly(e.target.checked)}
                className="w-3.5 h-3.5 text-champagne-600 rounded border-studio-border focus:ring-champagne-500"
              />
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-champagne-400 fill-champagne-400" />
                Featured Only
              </span>
            </label>
          </div>
        </div>

        {/* Services List / Table */}
        <div className="bg-studio-charcoal/40 border border-studio-border rounded-sm overflow-hidden shadow-lg">
          {filteredServices.length === 0 ? (
            <div className="p-12 text-center text-studio-taupe">
              <Scissors className="w-8 h-8 mx-auto text-champagne-500/50 mb-3" />
              <p className="font-serif text-lg text-studio-ivory">No services found</p>
              <p className="text-xs mt-1">Try adjusting your search query or category filter.</p>
            </div>
          ) : (
            <div className="divide-y divide-studio-border">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-studio-charcoal/80 transition-colors group"
                >
                  {/* Left: Image & Info */}
                  <div className="flex items-start sm:items-center gap-4 flex-1">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded border border-studio-border overflow-hidden flex-shrink-0 bg-studio-espresso relative">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=300&auto=format&fit=crop";
                        }}
                      />
                      {service.featured && (
                        <div
                          className="absolute top-1 right-1 bg-champagne-500 text-studio-espresso p-0.5 rounded-full shadow"
                          title="Featured on Home Page Marquee"
                        >
                          <Star className="w-2.5 h-2.5 fill-studio-espresso" />
                        </div>
                      )}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-serif text-lg sm:text-xl text-studio-ivory font-medium">
                          {service.name}
                        </h2>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-studio-espresso text-champagne-400 border border-champagne-500/30">
                          {service.categoryName}
                        </span>
                        {service.featured && (
                          <span className="text-[10px] font-semibold text-champagne-300 bg-champagne-500/10 px-2 py-0.5 rounded border border-champagne-500/20">
                            Featured Marquee
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-studio-taupe line-clamp-1 max-w-2xl">
                        {service.shortDescription}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-studio-taupe">
                        <span className="flex items-center gap-1 text-champagne-300 font-medium">
                          <DollarSign className="w-3.5 h-3.5 text-champagne-400" />
                          {service.pricePlaceholder}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-studio-taupe" />
                          {service.durationPlaceholder}
                        </span>
                        <span className="text-[11px] text-studio-taupe/70">
                          /services/{service.slug}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-studio-border/50 justify-end">
                    {/* Toggle Featured */}
                    <button
                      onClick={() => {
                        toggleFeatured(service.id);
                        showToast(
                          service.featured
                            ? `Removed "${service.name}" from featured carousel.`
                            : `Added "${service.name}" to featured carousel.`
                        );
                      }}
                      className={`p-2 rounded border transition-colors flex items-center gap-1.5 text-xs ${
                        service.featured
                          ? "bg-champagne-500/15 border-champagne-500/40 text-champagne-300 hover:bg-champagne-500/25"
                          : "bg-studio-espresso border-studio-border text-studio-taupe hover:text-studio-ivory"
                      }`}
                      title={service.featured ? "Featured on Home (Click to unfeature)" : "Click to feature on Home Carousel"}
                    >
                      <Star
                        className={`w-3.5 h-3.5 ${
                          service.featured ? "fill-champagne-400 text-champagne-400" : ""
                        }`}
                      />
                      <span className="text-[11px]">{service.featured ? "Featured" : "Feature"}</span>
                    </button>

                    {/* View on Public Site */}
                    <Link
                      to={`/services/${service.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-studio-espresso border border-studio-border hover:border-champagne-500/40 text-studio-taupe hover:text-champagne-300 rounded transition-colors"
                      title="View public treatment page"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>

                    {/* Edit Button */}
                    <button
                      onClick={() => handleOpenEditModal(service)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-studio-espresso border border-champagne-500/30 hover:border-champagne-400 text-champagne-300 hover:text-champagne-200 text-xs rounded transition-colors"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteService(service)}
                      className="p-2 bg-studio-espresso border border-studio-border hover:border-red-500/50 text-studio-taupe hover:text-red-400 rounded transition-colors"
                      title="Delete service"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Service Form Modal (Create / Edit) */}
      <ServiceFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingService(null);
        }}
        onSave={handleSaveService}
        initialService={editingService}
      />

      {/* Change Passcode Modal */}
      {isPasscodeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm bg-studio-charcoal border border-studio-border p-6 rounded-sm shadow-2xl">
            <h3 className="font-serif text-xl text-studio-ivory font-medium mb-1 flex items-center gap-2">
              <Key className="w-5 h-5 text-champagne-400" />
              Change Admin Passcode
            </h3>
            <p className="text-xs text-studio-taupe mb-5">
              Update the security PIN required to log into this studio panel.
            </p>

            {passcodeMessage && (
              <div
                className={`p-3 text-xs rounded mb-4 ${
                  passcodeMessage.type === "success"
                    ? "bg-emerald-950/40 border border-emerald-500/40 text-emerald-200"
                    : "bg-red-950/40 border border-red-500/40 text-red-200"
                }`}
              >
                {passcodeMessage.text}
              </div>
            )}

            <form onSubmit={handleChangePasscode} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-studio-taupe mb-1">
                  Current Passcode
                </label>
                <input
                  type="password"
                  required
                  value={oldPasscode}
                  onChange={(e) => setOldPasscode(e.target.value)}
                  className="w-full bg-studio-espresso border border-studio-border px-3 py-2 text-sm text-studio-ivory focus:outline-none focus:border-champagne-500 rounded-sm"
                  placeholder="e.g. essence2024"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-studio-taupe mb-1">
                  New Passcode
                </label>
                <input
                  type="password"
                  required
                  minLength={4}
                  value={newPasscode}
                  onChange={(e) => setNewPasscode(e.target.value)}
                  className="w-full bg-studio-espresso border border-studio-border px-3 py-2 text-sm text-studio-ivory focus:outline-none focus:border-champagne-500 rounded-sm"
                  placeholder="Min 4 characters"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsPasscodeModalOpen(false);
                    setPasscodeMessage(null);
                  }}
                  className="px-3.5 py-2 text-xs text-studio-taupe hover:text-studio-ivory"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-champagne-600 hover:bg-champagne-500 text-studio-espresso font-semibold text-xs rounded-sm transition-colors"
                >
                  Save Passcode
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
