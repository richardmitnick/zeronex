import { Award, ShieldCheck } from "lucide-react";

export const Oscp = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-cyan-950/40 text-cyan-400 border border-cyan-900/50 rounded-2xl">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-base font-bold text-zinc-100">
            Security & Advisory Standards
          </h3>
          <p className="text-xs text-zinc-500">
            Our auditing, research, and advisory methodology
          </p>
        </div>
      </div>

      <div className="p-5 bg-zinc-900/60 border border-zinc-800 rounded-2xl relative overflow-hidden">
        <div className="border border-zinc-850 p-4 rounded-xl space-y-3 bg-black/40 font-mono text-xs">
          <p className="text-[10px] text-zinc-500 flex justify-between border-b border-zinc-800/80 pb-1">
            <span>AUDIT PROTOCOL:</span>
            <span>OWASP Top 10 & SANS25</span>
          </p>
          <p className="text-[10px] text-zinc-500 flex justify-between border-b border-zinc-800/80 pb-1">
            <span>DATA INTEGRITY:</span>
            <span className="text-cyan-400 font-bold">
              End-to-End Encryption
            </span>
          </p>
          <p className="text-[10px] text-zinc-500 flex justify-between border-b border-zinc-800/80 pb-1">
            <span>DELIVERY MODE:</span>
            <span className="text-zinc-200">Zero-Knowledge Proof</span>
          </p>
          <p className="text-[10px] text-zinc-500 flex justify-between">
            <span>COMPLIANCE STATUS:</span>
            <span className="text-emerald-400 font-bold">
              VERIFIED SECURE ✓
            </span>
          </p>
        </div>
      </div>

      <p className="text-xs text-zinc-400 leading-relaxed font-sans">
        We apply thorough manual security auditing protocols across application
        frameworks, cloud host environments, and database perimeters to isolate
        and remediate zero-day and logic bypass vulnerabilities.
      </p>

      <ul className="space-y-2 text-xs text-zinc-300 font-mono">
        <li className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Comprehensive coverage of modern OWASP Top 10 vectors
        </li>
        <li className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          In-depth manual security analysis without automated superficial noise
        </li>
        <li className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Clear, actionable, and secure mitigation guidance reports
        </li>
      </ul>
    </div>
  );
};
