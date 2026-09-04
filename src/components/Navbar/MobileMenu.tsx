import { AnimatePresence, m } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import type { ServiceItem } from "./Navbar";

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  mobileServicesOpen: boolean;
  setMobileServicesOpen: (open: boolean) => void;
  activeSection: string;

  navItems: Array<{
    id: string;
    label: string;
  }>;

  handleNavClick: (id: string) => void;

  handleServiceClick: (service: ServiceItem) => void;

  handleContact: () => void;

  services: ServiceItem[];

  SERVICES_SECTION_ID: string;
}

/* =========================================================
   STATIC COLOR THEMES

   Keep full Tailwind classes static so Tailwind detects them.
========================================================= */

const serviceThemes = [
  {
    icon: "border-emerald-500/15 bg-emerald-500/10 text-emerald-400",
    tag: "text-emerald-400",
    hover: "hover:border-emerald-500/20",
    dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]",
  },
  {
    icon: "border-red-500/15 bg-red-500/10 text-red-400",
    tag: "text-red-400",
    hover: "hover:border-red-500/20",
    dot: "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.7)]",
  },
  {
    icon: "border-blue-500/15 bg-blue-500/10 text-blue-400",
    tag: "text-blue-400",
    hover: "hover:border-blue-500/20",
    dot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.7)]",
  },
];

const MobileMenu = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  mobileServicesOpen,
  setMobileServicesOpen,
  activeSection,
  navItems,
  handleNavClick,
  handleServiceClick,
  handleContact,
  services,
  SERVICES_SECTION_ID,
}: MobileMenuProps) => {
  const closeMenu = () => {
    setMobileServicesOpen(false);
    setMobileMenuOpen(false);
  };

  const selectService = (service: ServiceItem) => {
    handleServiceClick(service);
    closeMenu();
  };

  const viewAllServices = () => {
    handleNavClick(SERVICES_SECTION_ID);
    closeMenu();
  };

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <m.div
          key="mobile-menu"
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="pointer-events-auto relative z-50 mt-2 w-full max-w-lg overflow-hidden rounded-3xl border border-white/8 bg-[#080909]/95 shadow-[0_35px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl lg:hidden"
        >
          {/* Background grid */}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[28px_28px] opacity-[0.025]" />

          {/* Ambient background glow */}

          <div className="pointer-events-none absolute -left-24 top-28 h-48 w-48 rounded-full bg-emerald-500/4 blur-[70px]" />

          <div className="pointer-events-none absolute -right-24 top-56 h-48 w-48 rounded-full bg-blue-500/4 blur-[70px]" />

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <div className="relative p-3">
            {navItems.map((item) => {
              const isServices = item.id === SERVICES_SECTION_ID;
              const isActive = activeSection === item.id;

              /* =================================================
                 SERVICES
              ================================================= */

              if (isServices) {
                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-white/6 text-white"
                          : "text-zinc-400 hover:bg-white/3.5 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#52eb8e] shadow-[0_0_8px_rgba(82,235,142,0.8)]" />
                        )}

                        {item.label}
                      </span>

                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180 text-[#52eb8e]" : ""
                        }`}
                      />
                    </button>

                    {/* =============================================
                        SERVICE ACCORDION
                    ============================================= */}

                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <m.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-2 px-1 py-2">
                            {services.map((service, index) => {
                              const Icon = service.icon;

                              const theme =
                                serviceThemes[index % serviceThemes.length];

                              return (
                                <m.button
                                  type="button"
                                  key={service.title}
                                  whileTap={{ scale: 0.985 }}
                                  onClick={() => selectService(service)}
                                  className={`group relative flex w-full cursor-pointer items-start gap-3 overflow-hidden rounded-xl border border-white/5.5 bg-white/2.5 p-3 text-left transition-all duration-300 hover:bg-white/4.5 ${theme.hover}`}
                                >
                                  {/* hover glow */}

                                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-white/2.5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                                  {/* ICON */}

                                  <span
                                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${theme.icon}`}
                                  >
                                    <Icon className="h-4 w-4" />
                                  </span>

                                  {/* INFO */}

                                  <span className="relative z-10 min-w-0 flex-1">
                                    <span className="flex items-start justify-between gap-2">
                                      <span
                                        className={`flex items-center gap-1.5 font-mono text-[7px] font-bold tracking-[0.12em] ${theme.tag}`}
                                      >
                                        <span
                                          className={`h-1 w-1 shrink-0 rounded-full ${theme.dot}`}
                                        />

                                        {service.tag}
                                      </span>

                                      <span className="shrink-0 font-mono text-[7px] text-zinc-700">
                                        0{index + 1}
                                      </span>
                                    </span>

                                    <span className="mt-1.5 block text-[11px] font-semibold leading-snug text-white">
                                      {service.title}
                                    </span>

                                    <span className="mt-1 block text-[9px] text-zinc-500">
                                      {service.subtitle}
                                    </span>

                                    {/* Short description */}

                                    <span className="mt-2 block text-[8px] leading-[1.55] text-zinc-600">
                                      {service.description}
                                    </span>

                                    {/* Feature preview */}

                                    <span className="mt-3 flex flex-wrap gap-1.5">
                                      {service.features
                                        .slice(0, 2)
                                        .map((feature) => (
                                          <span
                                            key={feature}
                                            className="rounded-md border border-white/5 bg-white/2.5 px-2 py-1 text-[7px] text-zinc-500"
                                          >
                                            {feature}
                                          </span>
                                        ))}

                                      {service.features.length > 2 && (
                                        <span className="rounded-md border border-white/5 bg-white/2.5 px-2 py-1 text-[7px] text-zinc-600">
                                          +{service.features.length - 2}
                                        </span>
                                      )}
                                    </span>
                                  </span>
                                </m.button>
                              );
                            })}

                            {/* =====================================
                                VIEW ALL
                            ====================================== */}

                            <button
                              type="button"
                              onClick={viewAllServices}
                              className="group mt-1 flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-[10px] font-semibold text-zinc-500 transition-colors hover:bg-white/2.5 hover:text-white"
                            >
                              <span>View all security services</span>

                              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              /* =================================================
                 NORMAL NAV ITEM
              ================================================= */

              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => {
                    handleNavClick(item.id);
                    closeMenu();
                  }}
                  className={`flex w-full cursor-pointer items-center gap-2 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/6 text-white"
                      : "text-zinc-400 hover:bg-white/3.5 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#52eb8e] shadow-[0_0_8px_rgba(82,235,142,0.8)]" />
                  )}

                  {item.label}
                </button>
              );
            })}
          </div>

          {/* =====================================================
              MOBILE CTA
          ====================================================== */}

          <div className="relative border-t border-white/6 bg-white/1.2 p-3">
            <div className="mb-3 flex items-center gap-2 px-2 text-[9px] text-zinc-500">
              <CheckCircle2 className="h-3 w-3 text-[#52eb8e]" />

              <span>Confidential, no-commitment consultation</span>
            </div>

            <m.button
              type="button"
              onClick={() => {
                handleContact();
                closeMenu();
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-xl bg-[#52eb8e] px-4 py-3.5 text-xs font-bold text-zinc-950 shadow-[0_8px_30px_rgba(82,235,142,0.15)]"
            >
              {/* shine */}

              <span className="pointer-events-none absolute inset-0 translate-x-[-140%] skew-x-[-20deg] bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-[140%]" />

              <span className="relative z-10">
                Request Security Consultation
              </span>

              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </m.button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
