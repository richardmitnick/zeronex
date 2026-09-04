import { m } from 'motion/react';
import { LucideIcon, Search, Eye, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { StepItem } from './StepItem';

interface ProcessStep {
  stepNum: string;
  title: string;
  heading: string;
  description: string;
  icon: LucideIcon;
  deliverable: string;
}

export default function ProcessTimeline() {
  const steps: ProcessStep[] = [
    {
      stepNum: "01",
      title: "RECON & THREAT MODELING",
      heading: "Surface Analysis & Blueprinting",
      description: "Passive asset discovery, domain mapping, and API path enumeration to structure a comprehensive target matrix without triggering live defenses.",
      icon: Search,
      deliverable: "Scope Bound Matrix & IP/URL Inventory List"
    },
    {
      stepNum: "02",
      title: "LOGICAL VULNERABILITY SENSING",
      heading: "Automated & Deep Manual Scans",
      description: "Combining automated configuration scanners with rigorous manual logical sequence verification to hunt edge-case bugs and permission leaks.",
      icon: Eye,
      deliverable: "Live Enumeration Logs & Draft Issue Log"
    },
    {
      stepNum: "03",
      title: "EXPLOITATION & RISK PROBING",
      heading: "Safe Controlled Validation",
      description: "Executing precise, isolated attack payloads to verify critical impact levels on live databases, cloud containers, or server boundaries securely.",
      icon: ShieldAlert,
      deliverable: "Confirmed POC Artifacts & Exploit Proofs"
    },
    {
      stepNum: "04",
      title: "MITIGATION & CERTIFICATION",
      heading: "Remediation & Sign-off Audit",
      description: "Compiling a prescriptive, developer-oriented vulnerability report paired with secondary confirmation reviews to certify complete system fortification.",
      icon: CheckCircle2,
      deliverable: "Final PDF Security Audit & Public Verifiable Logo Badge"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto py-6">
      {/* Decorative vertical center line for timeline (hidden on mobile, visible on md+) */}
      <div className="absolute left-8.25 md:left-1/2 top-0 bottom-0 w-px bg-lieaner-to-b from-purple-500/30 via-zinc-800 to-zinc-950/20 pointer-events-none" />

      <m.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 md:space-y-16"
      >
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          const isEven = idx % 2 === 0;

          return (
            <StepItem isEven={isEven} itemVariants={itemVariants} step={step} key={idx} IconComponent={IconComponent} />
          );
        })}
      </m.div>
    </div>
  );
}
