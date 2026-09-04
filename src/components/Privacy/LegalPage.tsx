import { useState, useEffect } from "react";
import { PrivacyPage } from "./PrivacyPage";
import TermsPage from "./TermsPage";
import Security from "./Security";
import BottomCardInfo from "./BottomCardInfo";
import TopHeaderControls from "./TopHeaderControls";

interface LegalPageProps {
  initialTab?: "privacy" | "terms" | "security";
  onBackToHome: () => void;
}

type TabType = "privacy" | "terms" | "security";

export default function LegalPage({
  initialTab = "privacy",
  onBackToHome,
}: LegalPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div className="min-h-screen text-zinc-300 font-sans relative overflow-x-hidden pt-28 pb-20 px-6 max-w-5xl mx-auto w-full">
      {/* Top Header Controls */}
      <TopHeaderControls
        onBackToHome={onBackToHome}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Document Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Side Quick Menu / Table of Contents */}
        <div className="md:col-span-1 hidden md:block">
          <div className="sticky top-28 space-y-4">
            <h4 className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase font-mono mb-4">
              Sections
            </h4>
            <div className="flex flex-col gap-2.5">
              {activeTab === "privacy" && (
                <>
                  <a
                    href="#privacy-1"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    1. Introduction & Scope
                  </a>
                  <a
                    href="#privacy-2"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    2. Controller vs. Processor
                  </a>
                  <a
                    href="#privacy-3"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    3. Security Standards (ISO 27001)
                  </a>
                  <a
                    href="#privacy-4"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    4. International Data Transfers
                  </a>
                  <a
                    href="#privacy-5"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    5. Data Retention
                  </a>
                  <a
                    href="#privacy-6"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    6. Your GDPR Rights
                  </a>
                  <a
                    href="#privacy-7"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    7. Cookies and Tracking
                  </a>
                  <a
                    href="#privacy-8"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    8. Updates to This Policy
                  </a>
                </>
              )}
              {activeTab === "terms" && (
                <>
                  <a
                    href="#terms-1"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    1. Acceptance of Terms
                  </a>
                  <a
                    href="#terms-2"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    2. Service Provision & Scope
                  </a>
                  <a
                    href="#terms-3"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    3. Authorization & Indemnity
                  </a>
                  <a
                    href="#terms-4"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    4. Intellectual Property
                  </a>
                  <a
                    href="#terms-5"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    5. Confidentiality Obligations
                  </a>
                  <a
                    href="#terms-6"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    6. Limitation of Liability
                  </a>
                  <a
                    href="#terms-7"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    7. Governing Law
                  </a>
                </>
              )}
              {activeTab === "security" && (
                <>
                  <a
                    href="#sec-1"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    1. Security Philosophy
                  </a>
                  <a
                    href="#sec-2"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    2. Operational Security
                  </a>
                  <a
                    href="#sec-3"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    3. Infrastructure Isolation
                  </a>
                  <a
                    href="#sec-4"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    4. Vulnerability Disclosure
                  </a>
                  <a
                    href="#sec-5"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    5. Incident Management
                  </a>
                  <a
                    href="#sec-6"
                    className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40"
                  >
                    6. Continuous Compliance
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Side Content Areas */}
        <div className="md:col-span-3 space-y-12">
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === "privacy" && <PrivacyPage />}

          {/* TAB 2: TERMS OF SERVICE */}
          {activeTab === "terms" && <TermsPage />}

          {/* TAB 3: SECURITY POLICY */}
          {activeTab === "security" && <Security />}

          {/* Bottom Card: Contact Information Card */}
          <BottomCardInfo />
        </div>
      </div>
    </div>
  );
}
