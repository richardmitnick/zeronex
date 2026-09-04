import {
  ShieldAlert,
  ShieldCheck,
  X,
  Award,
  BookOpen,
  Briefcase,
  FileText,
  Sparkles,
  LockKeyhole,
} from "lucide-react";
import { m } from "motion/react";
import { Oscp } from "./Oscp";
import { Nda } from "./Nda";
import { Response } from "./Response";

interface CertificateModalProps {
  type: "oscp" | "nda" | "response" | null;
  onClose: () => void;
}

export default function CertificateModal({
  type,
  onClose,
}: CertificateModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with elegant Apple blur */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Card content */}
      <m.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 210 }}
        className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl z-10"
      >
        {/* Absolute glow shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800 transition-apple cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {type === "oscp" && <Oscp />}

        {type === "nda" && <Nda />}

        {type === "response" && <Response />}
      </m.div>
    </div>
  );
}
