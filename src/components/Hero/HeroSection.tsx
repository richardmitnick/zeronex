import { m } from "motion/react";
import {
  Award,
  Zap,
  LockKeyhole,
  ArrowUpRight,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import HeroBgVideo from "./HeroBgVideo";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
  setActiveModal: (type: "oscp" | "nda" | "response" | null) => void;
  customVideoUrl: string;
}

export default function HeroSection({
  scrollToSection,
  setActiveModal,
  customVideoUrl,
}: HeroSectionProps) {
  return (
    <section
      id="home-section"
      className="relative px-6  pt-36 pb-24 md:pt-48 md:pb-36  h-full mx-auto flex flex-col items-center text-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <m.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/2 backdrop-blur-md border border-white/6 text-zinc-300 text-xs mb-6 shadow-indigo-500/20"
        >
          <Sparkles className="w-3 h-3 text-[#52eb8e] animate-pulse" />
          <span className="font-mono text-[10px]">
            Trusted by Industry Leaders
          </span>
        </m.div>

        {/* Big Apple Headline */}
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-4xl text-zinc-100"
        >
          Proactive Security Meets{" "}
          <span className="bg-linear-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent font-bold tracking-tight">
            Integrity.
          </span>
        </m.h1>

        {/* Detailed Description */}
        <m.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-xl text-white max-w-2xl leading-relaxed mb-10"
        >
          Penetration testing, vulnerability assessment, threat intelligence —
          we diagnose architecture perimeters, verify critical protocols, and
          safeguard client privacy securely.
        </m.p>

        {/* Hero CTA buttons */}
        <div className="flex flex-col mb-20 sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <m.button
            onClick={() => scrollToSection("contact-section")}
            whileHover={{
              y: -3,
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.97,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="group relative overflow-hidden w-full sm:w-auto px-6 py-3.5 bg-[#52eb8e] text-zinc-950 text-xs font-bold rounded-xl cursor-pointer border border-[#8dffb9]/40 flex items-center justify-center gap-2 shadow-[0_8px_32px_rgba(82,235,142,0.22)] hover:shadow-[0_15px_45px_rgba(82,235,142,0.38)] transition-shadow duration-500"
          >
            {/* Premium shine sweep */}
            <span className=" pointer-events-none absolute inset-0 translate-x-[-130%] group-hover:translate-x-[130%] transition-transform duration-700 ease-out bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]" />

            {/* Soft inner glow */}
            <span className=" pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.45),transparent_65%)]" />

            <span className="relative z-10">Book a Consultation</span>

            <m.span
              className="relative z-10 flex items-center"
              variants={{
                initial: { x: 0 },
                hover: { x: 4 },
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
            >
              <ArrowRight className="w-3.5 h-3.5 text-zinc-950 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
            </m.span>
          </m.button>

          {/* Secondary Button */}
          <m.button
            onClick={() => scrollToSection("services-section")}
            whileHover={{
              y: -3,
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.97,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="group relative overflow-hidden w-full sm:w-auto px-6 py-3.5 text-white border border-white/14 hover:border-purple-400/45 backdrop-blur-md text-xs font-bold rounded-xl cursor-pointer shadow-[0_8px_32px_rgba(168,85,247,0.06)] hover:shadow-[0_15px_45px_rgba(168,85,247,0.18)] transition-[border-color,box-shadow,background-color] duration-500"
          >
            {/* Purple glow */}
            <span className=" pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.35),transparent_60%)]" />

            {/* Glass shine */}
            <span className="pointer-events-none absolute inset-0 translate-x-[-130%] group-hover:translate-x-[130%] transition-transform duration-700 ease-out bg-linear-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />

            <span className="relative z-10">Explore Services</span>
          </m.button>
        </div>

        {/* TRUST TRUST AND VERIFIED BADGES GRID */}
        <m.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1 - Security Standards */}
          <button
            onClick={() => setActiveModal("oscp")}
            className="p-6 rounded-2xl apple-glass text-left hover:border-cyan-500/30 transition-all group relative cursor-pointer outline-none focus:ring-1 focus:ring-cyan-500/50"
            id="badge-oscp-trigger"
          >
            <div className="p-3 bg-white/3 backdrop-blur-md border border-white/5 rounded-xl w-11 h-11 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
              <Award className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-all">
                Security Standards
              </h2>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition-all" />
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Adhering strictly to industry-proven cybersecurity audit
              guidelines and threat mitigation best practices.
            </p>
            <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-500 font-semibold inline-flex items-center gap-1">
              View standards
              <ChevronRight className="w-3 h-3 text-cyan-500 group-hover:translate-x-1 transition-all" />
            </span>
          </button>

          <button
            onClick={() => setActiveModal("response")}
            className="p-6 rounded-2xl apple-glass text-left hover:border-amber-500/30 transition-all group relative cursor-pointer outline-none focus:ring-1 focus:ring-amber-500/50"
            id="badge-sla-trigger"
          >
            <div className="p-3 bg-white/3 backdrop-blur-md border border-white/5 rounded-xl w-11 h-11 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-all">
                Fast Response
              </h2>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-amber-400 transition-all" />
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Critical incident inquiries handled within 2 hours, general
              scheduling quotes within 24h.
            </p>
            <span className="text-[10px] uppercase font-mono tracking-wider text-amber-500 font-semibold inline-flex items-center gap-1">
              view SLA parameters
              <ChevronRight className="w-3 h-3 text-amber-500 group-hover:translate-x-1 transition-all" />
            </span>
          </button>

          <button
            onClick={() => setActiveModal("nda")}
            className="p-6 rounded-2xl apple-glass text-left hover:border-emerald-500/30 transition-all group relative cursor-pointer outline-none focus:ring-1 focus:ring-emerald-500/50"
            id="badge-nda-trigger"
          >
            <div className="p-3 bg-white/3 backdrop-blur-md border border-white/5 rounded-xl w-11 h-11 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
              <LockKeyhole className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-all">
                Legally Confidential
              </h2>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-emerald-400 transition-all" />
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Standard non-disclosure available immediately. All engagements are
              treated with isolated security parameters.
            </p>
            <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-500 font-semibold inline-flex items-center gap-1">
              See compliance bounds
              <ChevronRight className="w-3 h-3 text-emerald-500 group-hover:translate-x-1 transition-all" />
            </span>
          </button>
        </m.div>
      </div>
    </section>
  );
}
