import React from "react";
import { AnimatePresence, m } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ServiceItem } from "./Navbar";

type NavItem = {
  id: string;
  label: string;
};

interface DesktopNavProps {
  navItems: NavItem[];
  activeSection: string;
  setServicesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setHoveredTab: (id: string | null) => void;
  handleNavClick: (sectionId: string) => void;
  handleServiceClick: (service: ServiceItem) => void;
  handleContact: () => void;
  servicesOpen: boolean;
  hoveredTab: string | null;
  SERVICES_SECTION_ID: string;
  ServiceMegaMenu: React.ComponentType<{
    onServiceClick: (service: ServiceItem) => void;
    onContact: () => void;
  }>;
}

const DesktopNav = ({
  navItems,
  activeSection,
  setServicesOpen,
  setHoveredTab,
  handleNavClick,
  handleServiceClick,
  handleContact,
  servicesOpen,
  hoveredTab,
  SERVICES_SECTION_ID,
  ServiceMegaMenu,
}: DesktopNavProps) => {
  return (
    <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        const isServices = item.id === SERVICES_SECTION_ID;

        if (isServices) {
          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => {
                setServicesOpen(true);
                setHoveredTab(item.id);
              }}
              onMouseLeave={() => {
                setServicesOpen(false);
                setHoveredTab(null);
              }}
              onFocus={() => {
                setServicesOpen(true);
              }}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                ) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((previous) => !previous)}
                className={`group relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[11px] font-semibold cursor-pointer select-none outline-none transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`}
              >
                {/* hover background */}

                {hoveredTab === item.id && !isActive && (
                  <m.span
                    layoutId="navbar-hover"
                    className="absolute inset-0 rounded-xl bg-white/4.5"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>

                <ChevronDown
                  className={`relative z-10 h-3 w-3 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-[#52eb8e]" : ""}`}
                />

                {/* active line */}

                {isActive && (
                  <m.span
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#52eb8e] shadow-[0_0_10px_rgba(82,235,142,0.7)]"
                    transition={{
                      type: "spring",
                      stiffness: 360,
                      damping: 25,
                    }}
                  />
                )}
              </button>

              {/* dropdown */}

              <AnimatePresence>
                {servicesOpen && (
                  <ServiceMegaMenu
                    onServiceClick={handleServiceClick}
                    onContact={handleContact}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <button
            type="button"
            key={item.id}
            aria-current={isActive ? "page" : undefined}
            onClick={() => handleNavClick(item.id)}
            onMouseEnter={() => setHoveredTab(item.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={`relative rounded-xl px-3.5 py-2 text-[11px] font-semibold cursor-pointer select-none outline-none transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`}
          >
            {/* hover */}

            {hoveredTab === item.id && !isActive && (
              <m.span
                layoutId="navbar-hover"
                className="absolute inset-0 rounded-xl bg-white/4.5"
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">{item.label}</span>

            {/* active */}

            {isActive && (
              <m.span
                layoutId="navbar-active"
                className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#52eb8e] shadow-[0_0_10px_rgba(82,235,142,0.7)]"
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 25,
                }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
