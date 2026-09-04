import { Sparkles } from "lucide-react";

export const Response = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-amber-950/40 text-amber-400 border border-amber-900/50 rounded-2xl">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-base font-bold text-zinc-100">
            Response SLA Architecture
          </h3>
          <p className="text-xs text-zinc-500">
            Fast tracking incident responses & scheduling
          </p>
        </div>
      </div>

      <p className="text-xs text-zinc-400 leading-relaxed">
        ZeroNetz maintains dedicated emergency alerting networks to manage
        sudden security compromises:
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-2xl text-center">
          <span className="text-[9px] font-mono text-zinc-500 block uppercase">
            Critical Compromise
          </span>
          <span className="text-xl font-extrabold text-red-400 font-mono block mt-1">
            Under 2h
          </span>
          <span className="text-[9px] text-zinc-500 leading-tight block mt-0.5">
            Rapid incident mitigation triage
          </span>
        </div>

        <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-2xl text-center">
          <span className="text-[9px] font-mono text-zinc-500 block uppercase">
            General Advisory
          </span>
          <span className="text-xl font-extrabold text-white font-mono block mt-1">
            Under 24h
          </span>
          <span className="text-[9px] text-zinc-500 leading-tight block mt-0.5">
            Scheduling and compliance quotes
          </span>
        </div>
      </div>

      <p className="text-xs text-zinc-400 leading-relaxed font-mono p-3 bg-zinc-950/60 border border-zinc-85 w-full rounded-xl">
        * Active incident triage includes firewall configuration adjustments,
        intrusion payload identification, and active containment deployment.
      </p>
    </div>
  );
};
