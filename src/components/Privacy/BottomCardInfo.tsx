import { Globe, Mail, Shield } from "lucide-react";

const BottomCardInfo = () => {
  return (
    <div className="relative overflow-hidden bg-zinc-950/45 backdrop-blur-xl border border-white/4 rounded-2xl p-6 md:p-8 mt-16 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]">
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#52eb8e]/5 blur-[50px] rounded-full pointer-events-none" />

      <div className="flex items-center gap-2 text-[#52eb8e] mb-4">
        <Shield className="w-4 h-4" />
        <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
          Contact Information
        </h4>
      </div>

      <div className="space-y-3.5 text-xs md:text-sm text-zinc-400 font-sans">
        <p className="font-semibold text-zinc-200">Zero Nex</p>

        <div className="flex items-center gap-2.5">
          <Mail className="w-4 h-4 text-zinc-500" />
          <span>
            Email:{" "}
            <a
              href="mailto:contant.zeronex@gmail.com"
              className="text-[#52eb8e] hover:underline"
            >
              contant.zeronex@gmail.com
            </a>
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <Globe className="w-4 h-4 text-zinc-500" />
          <span>
            Website:{" "}
            <a
              href="https://zeronex-tech.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-[#52eb8e] hover:underline"
            >
              https://zeronex.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomCardInfo;
