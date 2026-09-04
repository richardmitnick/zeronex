import React from "react";
import { m } from "motion/react";

const TermsPage = () => {
  return (
    <div>
      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-12"
      >
        <section id="terms-1" className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
            1. Acceptance of Terms
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            By accessing our website or contracting Zeronex for security
            services (including penetration testing, code auditing,
            vulnerability assessments, and threat modeling), you agree to be
            bound by these Terms of Service. If you do not agree to these terms,
            please refrain from using our services.
          </p>
        </section>

        <section id="terms-2" className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
            2. Service Provision & Scope
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Zeronex specializes in defensive cybersecurity and technical
            vulnerability audits. The exact scope, timeline, deliverables, and
            fees for any engineering engagement will be defined in a mutually
            signed Statement of Work (SOW). Any adjustments to the SOW must be
            agreed upon in writing by both parties.
          </p>
        </section>

        <section id="terms-3" className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
            3. Client Authorization & Indemnification
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            The client represents and warrants that they possess full,
            unambiguous legal authority to order security testing on the target
            infrastructure, networks, applications, and source code specified in
            the SOW.
          </p>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            The client shall indemnify and hold harmless Zeronex and its
            engineers from any third-party claims, liabilities, or damages
            arising from testing performed on assets that the client did not
            have authorization to audit.
          </p>
        </section>

        <section id="terms-4" className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
            4. Intellectual Property
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Zeronex retains all ownership rights, copyrights, and intellectual
            property in our assessment methodologies, custom testing scripts,
            frameworks, and training materials.
          </p>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Upon full payment of all outstanding invoices, the client is granted
            a perpetual, non-exclusive, non-transferable license to use the
            final vulnerability reports and deliverables for their internal
            remediation and compliance purposes.
          </p>
        </section>

        <section id="terms-5" className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
            5. Confidentiality Obligations
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Both parties agree to treat all non-public information obtained
            during the course of an engagement as highly confidential. Zeronex
            will never publish or disclose vulnerability findings, client
            architecture, or client names without explicit, written consent from
            the client.
          </p>
        </section>

        <section id="terms-6" className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
            6. Limitation of Liability
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Security testing involves inherent risks of system disruption or
            service degradation. While Zeronex engineers exercise professional
            caution, under no circumstances will Zeronex be liable for any
            indirect, incidental, special, or consequential damages, including
            loss of profits, data loss, or business interruption.
          </p>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            The total cumulative liability of Zeronex for any claims arising out
            of an engagement shall not exceed the actual fees paid by the client
            under the specific SOW.
          </p>
        </section>

        <section id="terms-7" className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
            7. Governing Law
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of our primary jurisdiction, without regard
            to conflicts of law principles. Any legal action or proceeding shall
            be brought exclusively in the courts located in our primary
            corporate registration.
          </p>
        </section>
      </m.div>
    </div>
  );
};

export default TermsPage;
