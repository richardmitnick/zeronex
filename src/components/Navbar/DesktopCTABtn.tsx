import { ArrowUpRight } from "lucide-react";
import { m } from "motion/react";

interface DesktopCTABtnProps {
  handleContact: () => void;
}

const DesktopCTABtn = ({
  handleContact,
}: DesktopCTABtnProps) => {
  return (
    <m.button
      type="button"
      onClick={handleContact}
      whileHover={{
        y: -2,
        scale: 1.025,
      }}
      whileTap={{
        y: 0,
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 23,
      }}
      className="group relative hidden items-center gap-2 overflow-hidden rounded-xl bg-[#52eb8e] px-4 py-2 text-[10px] font-bold text-zinc-950 cursor-pointer shadow-[0_8px_25px_rgba(82,235,142,0.16)] transition-shadow hover:shadow-[0_12px_35px_rgba(82,235,142,0.3)] lg:flex"
    >
      <span className="pointer-events-none absolute inset-0 translate-x-[-140%] skew-x-[-20deg] bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-[140%]" />
      <span className="relative z-10">Secure Consult</span>
      <ArrowUpRight className="relative z-10 h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </m.button>
  );
};

export default DesktopCTABtn;
