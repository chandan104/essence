import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { MobileNav } from "./components/layout/MobileNav";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { Footer } from "./components/layout/Footer";
import { BookingModal } from "./components/common/BookingModal";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ServicesProvider } from "./context/ServicesContext";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { AdminProtectedRoute } from "./components/admin/AdminProtectedRoute";

// Public Pages
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { CategoryPage } from "./pages/CategoryPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CampaignOfferPage } from "./pages/CampaignOfferPage";
import { JournalPage } from "./pages/JournalPage";

// Admin Pages
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminDashboard } from "./pages/admin/AdminDashboard";

function PublicLayout({
  onOpenBooking,
  onOpenMobileMenu,
  isMobileMenuOpen,
  onCloseMobileMenu,
  isBookingOpen,
  onCloseBooking,
  bookingServiceId,
}: {
  onOpenBooking: (serviceId?: string) => void;
  onOpenMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
  isBookingOpen: boolean;
  onCloseBooking: () => void;
  bookingServiceId?: string;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#040711] text-[#F8FAFC]">
      <Navbar onOpenBooking={onOpenBooking} onOpenMobileMenu={onOpenMobileMenu} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer onOpenBooking={() => onOpenBooking()} />

      {/* Persistent Sticky Mobile Bottom Action Bar */}
      <MobileBottomBar onOpenBooking={() => onOpenBooking()} />

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={onCloseMobileMenu}
        onOpenBooking={onOpenBooking}
      />

      {/* Global Interactive Booking / WhatsApp Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={onCloseBooking}
        preselectedServiceId={bookingServiceId}
      />
    </div>
  );
}

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingServiceId(undefined);
  };

  return (
    <ServicesProvider>
      <AdminAuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route
              path="/admin"
              element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />

            {/* Public Website Routes */}
            <Route
              element={
                <PublicLayout
                  onOpenBooking={handleOpenBooking}
                  onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
                  isMobileMenuOpen={isMobileMenuOpen}
                  onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
                  isBookingOpen={isBookingOpen}
                  onCloseBooking={handleCloseBooking}
                  bookingServiceId={bookingServiceId}
                />
              }
            >
              <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
              
              {/* Services Routes */}
              <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/services/hair" element={<CategoryPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/services/nails" element={<CategoryPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/services/skin" element={<CategoryPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/services/lashes" element={<CategoryPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/services/brows" element={<CategoryPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/services/:slug" element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />} />

              {/* Core Pages */}
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/the-essence-edit" element={<JournalPage />} />

              {/* Paid Ad Campaign Landing Pages */}
              <Route
                path="/offers/:campaignSlug"
                element={<CampaignOfferPage onOpenBooking={handleOpenBooking} />}
              />

              {/* Catch-all */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AdminAuthProvider>
    </ServicesProvider>
  );
}

export default App;
