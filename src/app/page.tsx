import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cosmos Innovation R&D — Innovatsion Texnologiyalar va Tadqiqotlar",
  description: "Cosmos Innovation R&D — O'zbekistondagi ilg'or texnologiyalar va innovatsion yechimlar yaratishga ixtisoslashgan tadqiqot va ishlab chiqish markazi.",
  keywords: ["R&D", "Innovation", "Technology", "AI", "IoT", "Uzbekistan", "Research", "Development", "Cosmos Innovation"],
  openGraph: {
    title: "Cosmos Innovation R&D — Innovatsion Texnologiyalar va Tadqiqotlar",
    description: "Cosmos Innovation R&D — O'zbekistondagi ilg'or texnologiyalar va innovatsion yechimlar yaratishga ixtisoslashgan tadqiqot va ishlab chiqish markazi.",
    url: "https://landing.cosmos-rnd.uz",
    siteName: "Cosmos Innovation R&D",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmos Innovation R&D",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmos Innovation R&D — Innovatsion Texnologiyalar va Tadqiqotlar",
    description: "Cosmos Innovation R&D — O'zbekistondagi ilg'or texnologiyalar va innovatsion yechimlar yaratishga ixtisoslashgan tadqiqot va ishlab chiqish markazi.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://landing.cosmos-rnd.uz",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      {/* <PartnersSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
