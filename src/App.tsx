import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { MobileNav } from "./components/layout/MobileNav";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { Footer } from "./components/layout/Footer";
import { BookingModal } from "./components/common/BookingModal";
import { ScrollToTop } from "./components/common/ScrollToTop";

// Pages
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { CategoryPage } from "./pages/CategoryPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CampaignOfferPage } from "./pages/CampaignOfferPage";
import { JournalPage } from "./pages/JournalPage";

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
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-studio-ivory text-studio-charcoal">
        <Navbar
          onOpenBooking={handleOpenBooking}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />

        <main className="flex-1">
          <Routes>
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
          </Routes>
        </main>

        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Persistent Sticky Mobile Bottom Action Bar */}
        <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

        {/* Slide-out Mobile Navigation Drawer */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Global Interactive Booking / WhatsApp Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          preselectedServiceId={bookingServiceId}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
