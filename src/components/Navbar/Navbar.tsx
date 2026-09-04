import React, { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { Activity, Code2, Shield, Menu, X } from "lucide-react";
import DesktopNav from "./DesktopNav";
import DesktopCTABtn from "./DesktopCTABtn";
import MobileBackDrop from "./MobileBackDrop";
import MobileMenu from "./MobileMenu";
import LogoImage from "/images/Logo.png";
import ServiceMegaMenu from "./ServiceMegaMenu";

interface NavbarProps {
  isScrolled: boolean;

  currentView: "home" | "legal" | "contact";

  navItems: {
    id: string;
    label: string;
  }[];

  scrollToSection: (id: string) => void;
  activeSection: string;
  setMobileMenuOpen: (open: boolean) => void;
  isDevGuide: boolean;
  mobileMenuOpen: boolean;
  setCurrentView: (view: "home" | "legal" | "contact") => void;
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  tag: string;
  features: string[];
}

const SERVICES_SECTION_ID = "services-section";

const services: ServiceItem[] = [
  {
    title: "Offensive Security & Penetration Testing",
    subtitle: "Advanced Security Assessment",
    description:
      "We combine elite human expertise with proprietary AI-agents to outpace attackers. We validate deep-tier business logic, complex exploit chains, and auth bypasses at machine speed.",
    icon: Shield,
    tag: "OFFENSIVE SECURITY",
    features: [
      "Penetration Testing",
      "Application Testing",
      "Network Security",
      "Cloud Security",
      "AI Security",
      "Blockchain Security",
      "Online Game Security",
      "Unreal Engine Security",
      "Unity Security",
    ],
  },
  {
    title: "Load Testing",
    subtitle: "Performance & Resilience",
    description:
      "Test your platform at scale before launch. We simulate millions of concurrent users or players with realistic behavior patterns - not just endpoint hammering.",
    icon: Activity,
    tag: "PERFORMANCE TESTING",
    features: [
      "Stress Testing",
      "Spike Testing",
      "Soak Testing",
      "Peak Testing",
      "DDoS Testing",
    ],
  },
  {
    title: "Source Code Audit",
    subtitle: "Deep Vulnerability Analysis",
    description:
      "Deep manual source-code analysis focused on business logic flaws, authorization bypasses, cryptographic weaknesses, and high-impact application vulnerabilities.",
    icon: Code2,
    tag: "MANUAL DEEP-DIVE",
    features: [
      "Authentication Bypass Audits",
      "Authorization Logic Review",
      "Cryptographic Protocol Validation",
      "OWASP Top 10 Safeguards",
    ],
  },
];

export const Navbar = ({
  isScrolled,
  currentView,
  navItems,
  scrollToSection,
  activeSection,
  setMobileMenuOpen,
  mobileMenuOpen,
  setCurrentView,
  isDevGuide,
}: NavbarProps) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleLogoClick = () => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileMenuOpen(false);

    if (currentView !== "home") {
      setCurrentView("home");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleContact = () => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileMenuOpen(false);

    setCurrentView("contact");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleServiceClick = (_service?: ServiceItem) => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileMenuOpen(false);

    scrollToSection(SERVICES_SECTION_ID);
  };

  const handleNavClick = (id: string) => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileMenuOpen(false);

    scrollToSection(id);
  };

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;

    setMobileMenuOpen(nextState);

    if (!nextState) {
      setMobileServicesOpen(false);
    }
  };

  return (
    <>
      <div
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex flex-col items-center px-3 pt-3 ${isDevGuide && "mt-14"} lg:px-5 lg:pt-5`}
      >
        <m.header
          layout
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
          className={`pointer-events-auto relative z-60 flex w-full items-center justify-between mx-auto rounded-2xl border transition-[max-width,padding,background-color,border-color,box-shadow] duration-500 ${isScrolled ? "max-w-5xl border-white/8 bg-[#080909]/80 px-3 py-2 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.48)]" : "max-w-6xl border-white/8 bg-black/30 px-3 py-2.5 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.28)]"}`}
        >
          {/* top highlight */}

          <div className="pointer-events-none absolute left-[20%] right-[20%] -top-px h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

          <button
            type="button"
            id="brand-logo-trigger"
            onClick={handleLogoClick}
            className="group relative z-10 flex items-center gap-2.5 cursor-pointer select-none outline-none"
          >
            <img
              src={LogoImage}
              className="h-8 -mt-1 w-8 object-contain"
              alt="Logo"
            />

            {/* brand text */}

            <span className="flex flex-col font-mono items-start">
              <span className="text-[12px] font-black uppercase leading-none tracking-[0.18em] text-white lg:text-[13px]">
                ZERO NEX
              </span>
            </span>
          </button>

          <DesktopNav
            navItems={navItems}
            activeSection={activeSection}
            setServicesOpen={setServicesOpen}
            setHoveredTab={setHoveredTab}
            handleNavClick={handleNavClick}
            handleServiceClick={handleServiceClick}
            handleContact={handleContact}
            servicesOpen={servicesOpen}
            hoveredTab={hoveredTab}
            SERVICES_SECTION_ID={SERVICES_SECTION_ID}
            ServiceMegaMenu={ServiceMegaMenu}
          />

          <DesktopCTABtn handleContact={handleContact} />

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/7 bg-white/4.5 text-zinc-300 cursor-pointer transition-all duration-300 hover:border-white/12 hover:bg-white/8 hover:text-white lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <m.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -40,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 40,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  <X className="h-4 w-4" />
                </m.span>
              ) : (
                <m.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 40,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -40,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  <Menu className="h-4 w-4" />
                </m.span>
              )}
            </AnimatePresence>
          </button>
        </m.header>

        <MobileBackDrop
          mobileMenuOpen={mobileMenuOpen}
          mobileServicesOpen={mobileServicesOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          setMobileServicesOpen={setMobileServicesOpen}
        />

        <MobileMenu
          SERVICES_SECTION_ID={SERVICES_SECTION_ID}
          activeSection={activeSection}
          handleContact={handleContact}
          handleNavClick={handleNavClick}
          handleServiceClick={handleServiceClick}
          navItems={navItems}
          mobileMenuOpen={mobileMenuOpen}
          mobileServicesOpen={mobileServicesOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          setMobileServicesOpen={setMobileServicesOpen}
          services={services}
        />
      </div>
    </>
  );
};
