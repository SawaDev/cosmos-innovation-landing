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
  keywords: "R&D, Innovation, Technology, AI, IoT, Uzbekistan, Research, Development",
  alternates: {
    canonical: "https://cosmos-rd.uz",
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
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
