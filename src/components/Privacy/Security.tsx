import { m } from "motion/react";

const Security = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12"
    >
      <section id="sec-1" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          1. Security Philosophy
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          As a leading cybersecurity firm, defense is our foundational code.
          Zeronex operates on a Zero Trust architecture across all corporate
          systems, isolated sandboxes, and diagnostic environments. We treat
          client information with the highest tiers of confidentiality and
          protective partitioning.
        </p>
      </section>

      <section id="sec-2" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          2. Operational Security & Personnel
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          All Zeronex offensive engineers and consultants undergo rigorous
          identity verification, continuous background screening, and carry
          recognized elite certifications (such as OSCP, OSCE, and OSWE). Our
          personnel operate under strict internal non-disclosure policies.
        </p>
      </section>

      <section id="sec-3" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          3. Infrastructure & Isolation
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          We maintain strict digital boundaries to avoid cross-contamination:
        </p>
        <ul className="space-y-3.5 pl-2 pt-2">
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
            <span>
              <strong className="text-zinc-200">Dedicated Sandboxes:</strong>{" "}
              Every penetration test is conducted from dedicated, logically
              segmented virtual private servers with clean IP addresses.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
            <span>
              <strong className="text-zinc-200">Encrypted Storages:</strong> All
              vulnerability logs, drafts, and client metadata are stored on
              encrypted containers utilizing AES-256 with offline key managers.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
            <span>
              <strong className="text-zinc-200">Zero Retention:</strong> Raw
              network captures, payload test codes, and server logs from active
              audits are securely wiped using military-grade standards (DoD
              5220.22-M) exactly 90 days after delivery.
            </span>
          </li>
        </ul>
      </section>

      <section id="sec-4" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          4. Vulnerability Disclosure Policy
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          Zeronex supports responsible, coordinated disclosure. If you are a
          security researcher and believe you have discovered a vulnerability on
          our website, corporate servers, or within our proprietary diagnostic
          tooling, we welcome your secure report.
        </p>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          Please encrypt and transmit your findings to{" "}
          <span className="text-[#52eb8e] font-semibold underline decoration-emerald-800 underline-offset-4">
            security@Zeronex.com
          </span>
          . We guarantee rapid initial triaging and commit to not pursuing legal
          action for reports that respect ethical research boundaries.
        </p>
      </section>

      <section id="sec-5" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          5. Incident Management
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          We maintain a structured, live incident response playbook. In the
          highly unlikely event of a security breach involving client report
          files or operational metadata, Zeronex guarantees:
        </p>
        <ul className="space-y-2.5 pl-2">
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              Direct client notification within 12 hours of breach verification.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              Full forensic report delivery detailing affected endpoints and
              mitigation logs.
            </span>
          </li>
        </ul>
      </section>

      <section id="sec-6" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          6. Continuous Compliance Auditing
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          Our internal controls, password strengths, firewall rules, and
          encryption standard configurations are periodically reviewed by
          independent third-party certification authorities to preserve our SOC
          2 and ISO/IEC 27001 standing.
        </p>
      </section>
    </m.div>
  );
};

export default Security;
