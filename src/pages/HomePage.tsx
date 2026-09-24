import React from "react";
import { SeoHead } from "../components/common/SeoHead";
import { generateLocalBusinessSchema } from "../utils/seo";
import { Hero } from "../components/home/Hero";
import { MarqueeTicker } from "../components/home/MarqueeTicker";
import { BrandIntro } from "../components/home/BrandIntro";
import { CategoryGrid } from "../components/home/CategoryGrid";
import { SignatureServices } from "../components/home/SignatureServices";
import { TransformationSection } from "../components/home/TransformationSection";
import { WhyEssence } from "../components/home/WhyEssence";
import { LocationSection } from "../components/home/LocationSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { InstagramFeed } from "../components/home/InstagramFeed";
import { FinalCta } from "../components/home/FinalCta";

interface HomePageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <div className="animate-fadeIn">
      <SeoHead
        title="Essence Hair and Makeup Studio | Church Road, Dimapur"
        description="Premium beauty studio on Church Road, Dimapur, Nagaland. Hair colour, Hair Botox, Nanoplastia, sculpted nails, Hydra Facials, eyelash extensions, and microblading."
        keywords="salon in dimapur, best salon in dimapur, beauty parlour in dimapur, hair botox dimapur, nanoplastia dimapur, church road dimapur salon, best hair salon nagaland, nail extensions dimapur, hydra facial dimapur price, eyelash extensions dimapur, microblading dimapur nagaland, salon near me dimapur, top beauty studio dimapur"
        canonicalPath="/"
        jsonLd={localBusinessSchema}
      />

      <Hero onOpenBooking={() => onOpenBooking()} />
      <MarqueeTicker />
      <BrandIntro />
      <CategoryGrid />
      <SignatureServices onOpenBooking={onOpenBooking} />
      <TransformationSection onOpenBooking={onOpenBooking} />
      <WhyEssence />
      <LocationSection onOpenBooking={() => onOpenBooking()} />
      <TestimonialsSection />
      <InstagramFeed />
      <FinalCta onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
