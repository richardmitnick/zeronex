import React from "react";
import HeroSection from "../Hero/HeroSection";
import ServicesPanel from "../service/ServicesPanel";
import SecurityReviewCTA from "../CTA/SecurityReviewCTA";
import ProcessTimeline from "../ProcessTimeLine/ProcessTimeline";
import AboutSection from "../about/AboutSection";
import FAQSection from "../FAQ/FAQSection";
import FooterSection from "../Footer/FooterSection";
import { OurProcess } from "../OurProcess/OurProcess";
import { ServicesSection } from "../service/ServiceSection";

interface HomeProps {
  scrollToSection: (id: string) => void;
  setActiveModal: (modal: "oscp" | "nda" | "response" | null) => void;
  setCurrentView: (view: "home" | "legal" | "contact") => void;
  setLegalTab: (tab: "privacy" | "terms" | "security") => void;
  setMobileMenuOpen: (open: boolean) => void;
  HeroBgVideoUrl: string;
}

export const Home = ({
  scrollToSection,
  setActiveModal,
  setCurrentView,
  setLegalTab,
  setMobileMenuOpen,
  HeroBgVideoUrl,
}: HomeProps) => {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection
        scrollToSection={scrollToSection}
        setActiveModal={setActiveModal}
        customVideoUrl={HeroBgVideoUrl}
      />

      {/* COMPONENT INTERACTION SUITE SECTIONS */}

      {/* 1. SERVICES SECTION */}
      {/* <ServicesSection /> */}

      {/* SECURITY REVIEW CTA SECTION */}
      <SecurityReviewCTA
        onScheduleClick={() => {
          setCurrentView("contact");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* 2. OUR PROCESS SECTION */}
      <OurProcess />

      {/* THE SPECIAL ADVISORY CORNER (ZeroNetz Advisory Statement) */}
      <AboutSection />

      {/* COMMON QUESTIONS FAQ SECTION */}
      <FAQSection />

      {/* APPLE STYLE FOOTER */}
      <FooterSection
        scrollToSection={scrollToSection}
        setActiveModal={setActiveModal}
        onLegalClick={(tab) => {
          setLegalTab(tab);
          setCurrentView("legal");
        }}
        onContactClick={() => {
          setCurrentView("contact");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </>
  );
};
