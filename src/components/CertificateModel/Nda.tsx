import { FileText, LockKeyhole } from "lucide-react";

export const Nda = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 rounded-2xl">
          <LockKeyhole className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-base font-bold text-zinc-100">
            NDA & Engagement Confidentiality
          </h3>
          <p className="text-xs text-zinc-500">
            Corporate Protection Agreements and zero-knowledge audits
          </p>
        </div>
      </div>

      <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl">
        <div className="flex gap-3 text-xs text-zinc-400 leading-relaxed font-sans">
          <FileText className="w-8 h-8 text-emerald-500 stroke-[1.2] shrink-0" />
          <div>
            <p className="font-bold text-zinc-200 mb-1">
              Standard Pro-Forma NDA Available
            </p>
            ZeroNetz provides legally binding non-disclosure protection
            immediately prior to analyzing your domains, credentials, or
            architectural source codes.
          </div>
        </div>
      </div>

      <p className="text-xs text-zinc-400 leading-relaxed">
        All scanning artifacts, connection logs, discovered vulnerabilities, and
        advisory remediation steps are treated with absolute encryption
        isolation. No details are leaked. No external repositories are used.
      </p>

      <div className="p-3.5 bg-zinc-950 border border-zinc-850 rounded-xl space-y-1.5 font-mono text-[10px] text-zinc-500">
        <span className="text-zinc-400 font-bold block">
          ENGAGEMENT BOUNDS:
        </span>
        <p>✓ Strictly scheduled white-listed scanning source IP ranges.</p>
        <p>✓ Safe proof-of-concept exploits only. Zero downtime caused. </p>
        <p>✓ All deliverables stored in localized AES-encrypted vaults.</p>
      </div>
    </div>
  );
};
