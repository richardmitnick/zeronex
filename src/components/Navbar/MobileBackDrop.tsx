import { AnimatePresence, m } from "motion/react";
import React from "react";

interface MobileBackDropProps {
  mobileMenuOpen: boolean;
  mobileServicesOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setMobileServicesOpen: (open: boolean) => void;
}

const MobileBackDrop = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  mobileServicesOpen,
  setMobileServicesOpen,
}: MobileBackDropProps) => {
  return (
    <AnimatePresence>
      {(mobileMenuOpen || mobileServicesOpen) && (
        <m.div
          key="mobile-backdrop"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={() => {
            setMobileMenuOpen(false);
            setMobileServicesOpen(false);
          }}
          className="pointer-events-auto fixed inset-0 z-40 bg-black/75 backdrop-blur-md lg:hidden"
        />
      )}
    </AnimatePresence>
  );
};

export default MobileBackDrop;
