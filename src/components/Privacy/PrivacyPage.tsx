import { m } from "motion/react";
export const PrivacyPage = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12"
    >
      <section id="privacy-1" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          1. Introduction & Scope
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          Zeronex ("we," "us") provides high-end penetration testing and load
          testing services. This Privacy Policy explains how we collect, use,
          and protect personal data from visitors to our website, and how we
          handle personal data when acting on behalf of our clients in
          accordance with the General Data Protection Regulation (GDPR).
        </p>
        <div className="space-y-2.5 pt-2">
          <p className="text-zinc-300 text-xs md:text-sm font-semibold">
            This policy applies to:
          </p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
              <span>
                Visitors to our website (data we control as a Data Controller)
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
              <span>
                Data encountered while performing services for clients (data we
                process as a Data Processor)
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id="privacy-2" className="space-y-6">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          2. Roles: Controller vs. Processor
        </h3>

        <div className="space-y-2">
          <h4 className="text-sm md:text-base font-bold text-zinc-200">
            Controller (Website Data)
          </h4>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            We are the Controller for personal data collected via our website,
            such as your name, email, or company information submitted through
            contact forms. We determine the purpose and means of processing this
            data.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm md:text-base font-bold text-zinc-200">
            Processor (Client Data)
          </h4>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            We act as a Processor when handling personal data encountered during
            client engagements. This includes data such as system logs,
            metadata, or other client-related information. We process this data
            strictly under the terms of a Data Processing Agreement (DPA) and
            only according to client instructions.
          </p>
        </div>
      </section>

      <section id="privacy-3" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          3. Security Standards (ISO 27001)
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          Zeronex takes security seriously. We are ISO/IEC 27001 certified and
          adhere to globally recognized information security standards. Our
          measures include:
        </p>
        <ul className="space-y-3.5 pl-2 pt-2">
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
            <span>
              <strong className="text-zinc-200">Encryption:</strong> All data in
              transit and at rest is encrypted using industry-standard protocols
              (e.g., TLS 1.3, AES-256).
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
            <span>
              <strong className="text-zinc-200">Access Control:</strong> Only
              authorized engineers have access to project-specific data,
              protected by Multi-Factor Authentication (MFA).
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
            <span>
              <strong className="text-zinc-200">Testing Integrity:</strong> All
              testing is conducted in secure, isolated environments to prevent
              cross-contamination of client data.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
            <span>
              <strong className="text-zinc-200">Regular Audits:</strong> We
              perform periodic security audits to ensure compliance with ISO
              standards and internal policies.
            </span>
          </li>
        </ul>
      </section>

      <section id="privacy-4" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          4. International Data Transfers
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          To support our global operations, we may transfer data to
          infrastructure outside the European Economic Area (EEA), including
          tools like Google Analytics 4 (GA4) or secure cloud storage.
        </p>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          We ensure these transfers comply with GDPR by:
        </p>
        <ul className="space-y-2.5 pl-2">
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>Using Standard Contractual Clauses (SCCs)</span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              Ensuring our providers are certified under the EU-U.S. Data
              Privacy Framework
            </span>
          </li>
        </ul>
      </section>

      <section id="privacy-5" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          5. Data Retention
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          We retain personal data only as long as necessary for business or
          contractual purposes:
        </p>
        <ul className="space-y-3 pl-2">
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              <strong className="text-zinc-200 font-bold">
                Website Inquiries:
              </strong>{" "}
              Contact form submissions are retained for 24 months to manage
              communications and follow-ups.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              <strong className="text-zinc-200 font-bold">
                Testing Logs and Reports:
              </strong>{" "}
              Client project data is deleted 90 days after the final report
              delivery, unless otherwise specified in the client contract.
            </span>
          </li>
        </ul>
      </section>

      <section id="privacy-6" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          6. Your GDPR Rights
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          Individuals whose personal data we process have the following rights
          under GDPR:
        </p>
        <ul className="space-y-3 pl-2">
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              <strong className="text-zinc-200">Access:</strong> You can request
              a copy of your personal data we hold.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              <strong className="text-zinc-200">Rectification:</strong> You can
              request corrections to inaccurate or incomplete data.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              <strong className="text-zinc-200">
                Erasure ("Right to be Forgotten"):
              </strong>{" "}
              You can request deletion of your personal data.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              <strong className="text-zinc-200">Restriction:</strong> You can
              request that processing of your data is limited.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              <strong className="text-zinc-200">Data Portability:</strong> You
              can request your data in a structured, machine-readable format.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
            <span>
              <strong className="text-zinc-200">Objection:</strong> You can
              object to certain processing activities, such as direct marketing.
            </span>
          </li>
        </ul>
        <p className="text-zinc-400 text-xs md:text-sm pt-2">
          To exercise any of these rights, contact us at{" "}
          <span className="text-[#52eb8e] font-semibold underline decoration-emerald-800 underline-offset-4">
            hello@Zeronex.com
          </span>
          .
        </p>
      </section>

      <section id="privacy-7" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          7. Cookies and Tracking
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          Our website uses cookies and analytics tools (such as GA4) to improve
          user experience and analyze traffic. You can manage your cookie
          preferences via your browser settings.
        </p>
      </section>

      <section id="privacy-8" className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          8. Updates to This Policy
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
          We may update this Privacy Policy from time to time. The "Last
          Updated" date at the top reflects the most recent changes. We
          encourage you to review this page periodically for updates.
        </p>
      </section>
    </m.div>
  );
};
