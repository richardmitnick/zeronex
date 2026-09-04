import { m } from "motion/react";
import {
  LucideIcon,
  Award,
  Terminal,
  Code,
  Server,
} from "lucide-react";
import { ServiceItem } from "./ServiceItem";

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  tag: string;
  features: string[];
}

export default function ServicesPanel() {
  const services: ServiceItem[] = [
    {
      title: "Red Teaming & Offensive Pentesting",
      subtitle: "Adversary Simulation",
      description:
        "Rigorous full-scope active defense tests simulating state-of-the-art adversary tactics, targeting infrastructure networks, endpoints, and social perimeters.",
      icon: Terminal,
      tag: "ACTIVE EXPLOITATION",
      features: [
        "Advanced Lateral Movement Testing",
        "Dynamic Ingress Vector Audits",
        "Evasion & Exfiltration Simulations",
      ],
    },
    {
      title: "Secure Source Code & Logic Audit",
      subtitle: "Deep Vulnerability Analysis",
      description:
        "Line-by-line manual code repository review to detect logic bypasses, custom authorization exploits, memory corruption, and standard OWASP vulnerabilities.",
      icon: Code,
      tag: "HYBRID MANUAL DEEP-DIVE",
      features: [
        "Custom Authentication Bypass Audits",
        "Cryptographic Protocol Validation",
        "OWASP Top 10 Safeguards",
      ],
    },
    {
      title: "Cloud Native Architecture Guard",
      subtitle: "Cloud Security Posture",
      description:
        "Fortifying modern Kubernetes clusters, cloud service orchestration configurations, container isolation levels, and strict IAM permissions.",
      icon: Server,
      tag: "INFRASTRUCTURE",
      features: [
        "Kubernetes & Docker Security Audits",
        "Identity & Access Management Hardening",
        "Multi-Tenant Isolation Verification",
      ],
    },
    {
      title: "Confidential Compliance Readiness",
      subtitle: "Audit Proofing & Certification",
      description:
        "Accelerating enterprise compliance readiness for SOC 2 Type II, ISO 27001, and PCI-DSS under ironclad, legal non-disclosure parameters.",
      icon: Award,
      tag: "COMPLIANCE & CONFIDENTIALITY",
      features: [
        "Confidential Gap Assessments",
        "Dynamic Policy Alignment",
        "Remediation Blueprints",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
    >
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <ServiceItem
            IconComponent={IconComponent}
            cardVariants={cardVariants}
            service={service}
            key={index}
          />
        );
      })}
    </m.div>
  );
}
