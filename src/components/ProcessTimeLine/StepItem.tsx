import { LucideIcon } from "lucide-react";
import { m } from "motion/react";

interface StepItemProps {
  itemVariants: any;
  isEven: boolean;
  step: any;
  IconComponent: LucideIcon;
}

export const StepItem = ({
  itemVariants,
  isEven,
  step,
  IconComponent
}: StepItemProps) => {
  return (
    <m.div
      variants={itemVariants}
      className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-12 relative ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline bubble locator */}
      <div className="absolute left-5 md:left-1/2 -translate-x-3.5 md:-translate-x-1/2 top-4 w-7 h-7 rounded-full bg-zinc-950 border border-slate-500 shadow-[0_0_12px_rgba(168,85,247,0.35)] flex items-center justify-center z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
      </div>

      {/* Step Card Content */}
      <div className="w-full md:w-[46%] pl-12 md:pl-0">
        <div className="group relative rounded-2xl p-6 md:p-8 bg-zinc-950/40 backdrop-blur-md border border-slate-500/4 hover:border-slate-500/20 transition-all duration-300 shadow-xl overflow-hidden">
          {/* Subtle top indicator bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-slate-500/20 to-transparent group-hover:via-white transition-all duration-300" />

          <div className="flex items-center gap-4 mb-4">
            <div className="text-2xl md:text-3xl font-black font-mono bg-linear-to-r from-white to-zinc-500 bg-clip-text text-transparent opacity-90 select-none">
              {step.stepNum}
            </div>
            <div>
              <span className="text-[9px] font-mono tracking-widest text-white font-extrabold uppercase">
                {step.title}
              </span>
              <h4 className="text-sm md:text-base font-bold text-white group-hover:text-slate-300 transition-colors duration-200">
                {step.heading}
              </h4>
            </div>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed mb-6">
            {step.description}
          </p>

          {/* High fidelity Deliverable Tag */}
          <div className="pt-4 border-t border-white/3 flex items-center gap-3">
            <IconComponent className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <div className="text-[10px] font-mono">
              <span className="text-zinc-500 uppercase font-bold block">
                AUDIT DELIVERABLE
              </span>
              <span className="text-zinc-300 group-hover:text-zinc-200">
                {step.deliverable}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing placeholder for opposite side layout */}
      <div className="hidden md:block w-[46%]" />
    </m.div>
  );
};
