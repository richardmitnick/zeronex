import { FileText, Lock } from "lucide-react";

interface DocumentTabsProps {
  setActiveTab: (tab: "privacy" | "terms" | "security") => void;
  activeTab: "privacy" | "terms" | "security";
}

const DocumentTabs = ({ setActiveTab, activeTab }: DocumentTabsProps) => {
  return (
    <div className="flex items-center gap-1.5 p-1 bg-zinc-950/60 rounded-xl border border-white/4 self-start sm:self-auto overflow-x-auto max-w-full">
      <button
        onClick={() => setActiveTab("privacy")}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all outline-none cursor-pointer whitespace-nowrap ${
          activeTab === "privacy"
            ? "bg-white/10 text-[#52eb8e] border border-white/4"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        <FileText className="w-3.5 h-3.5" />
        <span>Privacy Policy</span>
      </button>
      <button
        onClick={() => setActiveTab("terms")}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all outline-none cursor-pointer whitespace-nowrap ${
          activeTab === "terms"
            ? "bg-white/10 text-[#52eb8e] border border-white/4"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        <FileText className="w-3.5 h-3.5" />
        <span>Terms of Service</span>
      </button>
      <button
        onClick={() => setActiveTab("security")}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all outline-none cursor-pointer whitespace-nowrap ${
          activeTab === "security"
            ? "bg-white/10 text-[#52eb8e] border border-white/4"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        <Lock className="w-3.5 h-3.5" />
        <span>Security Policy</span>
      </button>
    </div>
  );
};

export default DocumentTabs;
