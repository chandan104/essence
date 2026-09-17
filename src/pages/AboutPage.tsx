import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, MapPin, ArrowRight, UserCheck, Shield, HeartHandshake, Compass } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { SeoHead } from "../components/common/SeoHead";
import { SectionHeading } from "../components/common/SectionHeading";
import { generateBreadcrumbSchema } from "../utils/seo";

export const AboutPage: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We begin every service by understanding your hair history, skin sensitivity, and visual inspiration rather than rushing into treatment.",
    },
    {
      num: "02",
      title: "Personalization",
      desc: "Formulations, lash maps, and nail architectures are custom-blended to complement your undertones and bone structure.",
    },
    {
      num: "03",
      title: "Precision",
      desc: "Disciplined application respecting natural strand integrity, calibrated processing heat, and 1:1 lash isolation.",
    },
    {
      num: "04",
      title: "The Signature Finish",
      desc: "Refined thermal blowouts, high-gloss topcoats, and transparent aftercare guidance for lasting confidence at home.",
    },
  ];

  // Configurable team placeholder structure
  const teamPlaceholders = [
    {
      role: "Founder & Creative Lead",
      name: "[Founder Name Placeholder]",
      bio: "Profile and professional background will be updated upon client submission. Specializes in advanced hair colour transformations and studio creative direction.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
      role: "Senior Hair & Texture Specialist",
      name: "[Stylist Name Placeholder]",
      bio: "Expertise in Nanoplastia, Hair Botox, and balayage alignment techniques.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    },
    {
      role: "Certified Lash & Brow Artist",
      name: "[Artist Name Placeholder]",
      bio: "Trained in 1:1 classic, volume fans, and golden ratio eyebrow architecture.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <div className="py-12 sm:py-16 bg-studio-ivory animate-fadeIn">
      <SeoHead
        title="About Essence Hair and Makeup Studio | Church Road, Dimapur"
        description="Learn about the philosophy, approach, and standards behind Essence Hair and Makeup Studio on Church Road, Dimapur, Nagaland. Personalized luxury beauty experiences."
        keywords="about essence dimapur, beauty salon church road dimapur, hair studio nagaland"
        canonicalPath="/about"
        jsonLd={breadcrumbsSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-champagne-500" />
            <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600">
              The Essence Identity
            </span>
            <span className="w-6 h-px bg-champagne-500" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-studio-espresso font-medium tracking-tight">
            BEAUTY IS PERSONAL
          </h1>
          <p className="mt-4 text-sm sm:text-base text-studio-taupe leading-relaxed">
            Essence Hair and Makeup Studio was established on Church Road to provide Dimapur with an elevated beauty destination defined by refined technique, calm aesthetics, and genuine client attention.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] overflow-hidden border border-studio-border bg-studio-cream">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
                alt="Studio interior and styling chair"
                className="w-full h-full object-cover img-editorial"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-studio-espresso text-studio-ivory p-6 border border-white/10 hidden sm:block max-w-xs shadow-elevated">
              <p className="font-serif text-xl text-champagne-300">
                Church Road, Dimapur
              </p>
              <p className="text-xs text-champagne-100/70 mt-1">
                Central Nagaland commercial district location
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-champagne-600">
              Our Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-studio-espresso font-medium leading-tight">
              A MODERN BEAUTY SANCTUARY DESIGNED AROUND YOU
            </h2>

            <p className="text-sm sm:text-base text-studio-taupe leading-relaxed">
              We believe a salon visit should never feel rushed or transactional. Beauty is an intimate expression of individuality. Whether you are seeking a subtle lived-in balayage, intensive strand repair with Nanoplastia, or flawless lash architecture for your wedding, our goal is to deliver results that feel effortlessly you.
            </p>

            <p className="text-sm sm:text-base text-studio-taupe leading-relaxed">
              By bringing progressive formulas and meticulous hygiene standards to our studio on Church Road, we bridge the gap between metropolitan luxury salon standards and the warm, welcoming community spirit of Dimapur.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-studio-border">
              <div>
                <span className="font-serif text-3xl text-studio-espresso">5</span>
                <p className="text-xs text-studio-taupe uppercase tracking-wider mt-1">
                  Core Disciplines (Hair, Nails, Skin, Lashes, Brows)
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl text-champagne-700">100%</span>
                <p className="text-xs text-studio-taupe uppercase tracking-wider mt-1">
                  Commitment to Hygiene & Comfort
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OUR APPROACH: 4-Step Journey */}
        <div className="mb-24">
          <SectionHeading
            eyebrow="Methodology"
            title="OUR FOUR-STAGE APPROACH"
            subtitle="How we maintain consistent excellence across every service."
            className="mb-14 text-center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-studio-cream/30 border border-studio-border p-6 sm:p-7 flex flex-col justify-between hover:border-champagne-500 transition-colors"
              >
                <div>
                  <span className="font-serif text-3xl text-champagne-600 font-medium block mb-3">
                    {st.num}
                  </span>
                  <h3 className="font-serif text-xl text-studio-espresso font-medium mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-studio-taupe leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MEET THE TEAM (Configurable Placeholders) */}
        <div className="mb-24">
          <SectionHeading
            eyebrow="The Artists"
            title="MEET THE TEAM"
            subtitle="Our stylists and artists share a unified dedication to craftsmanship, continuous education, and gentle client care."
            className="mb-14 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamPlaceholders.map((member, idx) => (
              <div
                key={idx}
                className="bg-studio-ivory border border-studio-border overflow-hidden group hover:border-champagne-500 transition-colors shadow-subtle"
              >
                <div className="aspect-[4/5] overflow-hidden bg-studio-cream">
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-full h-full object-cover img-editorial"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-champagne-600 block mb-1">
                    {member.role}
                  </span>
                  <h3 className="font-serif text-xl text-studio-espresso font-medium">
                    {member.name}
                  </h3>
                  <p className="text-xs text-studio-taupe mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] text-studio-muted mt-6">
            * Stylist profiles and individual specializations can be updated via the studio content management configuration.
          </p>
        </div>

        {/* VISIT US / LOCATION CTA */}
        <div className="bg-studio-espresso text-studio-ivory p-8 sm:p-14 border border-studio-border/20 text-center">
          <MapPin className="w-8 h-8 text-champagne-400 mx-auto mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl font-medium">
            VISIT OUR CHURCH ROAD STUDIO
          </h2>
          <p className="text-sm text-champagne-100/80 mt-3 max-w-lg mx-auto leading-relaxed">
            Conveniently located in Dimapur, Nagaland. Experience peaceful aesthetics and personalized beauty transformations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Get Studio Directions & Hours
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-studio-ivory border border-white/20 text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Explore Full Treatment Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
