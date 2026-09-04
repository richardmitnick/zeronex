import React from "react";
import DocumentTabs from "./DocumentTabs";
import { ArrowLeft, Shield } from "lucide-react";

interface TopHeaderControlsProps {
  onBackToHome: () => void;
  activeTab: "privacy" | "terms" | "security";
  setActiveTab: (tab: "privacy" | "terms" | "security") => void;
}

const TopHeaderControls = ({
  onBackToHome,
  activeTab,
  setActiveTab,
}: TopHeaderControlsProps) => {
  return (
    <div className="flex flex-col gap-6 mb-12">
      <button
        onClick={onBackToHome}
        className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors group cursor-pointer w-fit"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </button>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/4 pb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 border border-[#52eb8e]/20 text-[#52eb8e] bg-[#52eb8e]/5 py-1 px-3 rounded-full font-mono text-[10px] uppercase tracking-wider mb-4">
            <Shield className="w-3 h-3 text-[#52eb8e]" />
            <span>Legal & Compliance</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
            {activeTab === "privacy" && "Privacy Policy"}
            {activeTab === "terms" && "Terms of Service"}
            {activeTab === "security" && "Security Policy"}
          </h1>
          <p className="text-zinc-500 text-xs mt-3 font-mono">
            Last Updated: August 2026
          </p>
        </div>

        {/* Document Switching Tabs */}
        <DocumentTabs setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default TopHeaderControls;
