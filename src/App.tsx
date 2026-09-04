import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { LazyMotion, domAnimation, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import CertificateModal from "./components/CertificateModel/CertificateModal";

const LegalPage = lazy(() => import("./components/Privacy/LegalPage"));

const ContactPage = lazy(() => import("./components/contact/ContactPage"));

// import video path
const HeroBgVideoUrl =
  "https://res.cloudinary.com/dyebrg5xa/video/upload/v1788491740/robotics_bg_video_x88ipm.mp4";
import HeroBgVideo from "./components/Hero/HeroBgVideo";
import DevGuideBanner from "./components/DevGuideBanner/DevGuideBanner";

export const navItems = [
  { id: "home-section", label: "Home" },
  { id: "services-section", label: "Services" },
  { id: "process-section", label: "Our Process" },
  { id: "about-section", label: "About" },
];

export default function App() {
  const [activeModal, setActiveModal] = useState<
    "oscp" | "nda" | "response" | null
  >(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");
  const [isScrolled, setIsScrolled] = useState(false);
  const isAutoScrolling = useRef(false);
  const [isDevGuide, setIsDevGuide] = useState(true);

  const [currentView, setCurrentView] = useState<"home" | "legal" | "contact">(
    "home",
  );
  const [legalTab, setLegalTab] = useState<"privacy" | "terms" | "security">(
    "privacy",
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.scrollY < 120 && !isAutoScrolling.current) {
        setActiveSection("home-section");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Dynamic section tracking using high-performance IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isAutoScrolling.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== activeSection) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "contact-section") {
      setCurrentView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (currentView !== "home") {
      setCurrentView("home");
      setTimeout(() => {
        performScroll(id);
      }, 150);
    } else {
      performScroll(id);
    }
  };

  const performScroll = (id: string) => {
    if (id === "home-section") {
      isAutoScrolling.current = true;
      setActiveSection("home-section");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 1200);
      setMobileMenuOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      isAutoScrolling.current = true;
      setActiveSection(id);
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 1200);
    }
    setMobileMenuOpen(false);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`min-h-screen  theme-neon-circuit text-zinc-100 font-sans selection:bg-zinc-700 selection:text-white overflow-x-hidden pb-12 relative transition-all mx-auto duration-750`}
      >
        <DevGuideBanner  setIsDevGuide={setIsDevGuide} />

        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-60">
          <HeroBgVideo customVideoUrl={HeroBgVideoUrl} />
        </div>

        <Navbar
          isScrolled={isScrolled}
          currentView={currentView}
          navItems={navItems}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
          setCurrentView={setCurrentView}
          isDevGuide={isDevGuide}
        />

        {currentView === "home" && (
          <Home
            scrollToSection={scrollToSection}
            setActiveModal={setActiveModal}
            setCurrentView={setCurrentView}
            setLegalTab={setLegalTab}
            setMobileMenuOpen={setMobileMenuOpen}
            HeroBgVideoUrl={HeroBgVideoUrl}
          />
        )}

        <Suspense fallback={null}>
          {currentView === "legal" && (
            <LegalPage
              initialTab={legalTab}
              onBackToHome={() => setCurrentView("home")}
            />
          )}
        </Suspense>

        {currentView === "contact" && (
          <ContactPage onBackToHome={() => setCurrentView("home")} />
        )}

        {/* LIGHTWEIGHT CERTIFICATE MODALS */}
        <AnimatePresence>
          {activeModal && (
            <CertificateModal
              type={activeModal}
              onClose={() => setActiveModal(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
}
