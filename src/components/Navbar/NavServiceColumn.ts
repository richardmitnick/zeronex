import { Activity, Box, Bug, Cloud, Code2, Cpu, Database, Gamepad2, Gauge, KeyRound, Network, Shield, ShieldCheck, Zap } from "lucide-react";
import { ServiceItem } from "./Navbar";

type HoverColor = "green" | "red" | "blue";

type ServiceColumn = {
  icon: React.ElementType;
  title: string;
  description: string;
  sectionTitle: string;
  glowClass: string;
  hoverColor: HoverColor;
  services: {
    icon: React.ElementType;
    text: string;
    hideIcon?: boolean;
  }[];
  action?: {
    label: string;
    icon: React.ElementType;
    service: ServiceItem;
  };
};

const sourceCodeAudit: ServiceItem = {
  title: "Secure Source Code & Logic Audit",
  subtitle: "Deep Vulnerability Analysis",
  description:
    "Line-by-line manual code repository review to detect logic bypasses, custom authorization exploits, memory corruption, and standard OWASP vulnerabilities.",
  icon: Code2,
  tag: "HYBRID MANUAL DEEP-DIVE",
  features: [
    "Custom Authentication Bypass Audits",
    "Cryptographic Protocol Validation",
    "OWASP Top 10 Safeguards",
  ],
};

export const serviceColumns: ServiceColumn[] = [
  {
    icon: Shield,
    title: "Offensive Security & Penetration Testing",
    description:
      "We combine elite human expertise with proprietary AI-agents to outpace attackers. We validate deep-tier business logic, complex exploit chains, and auth bypasses at machine speed.",
    sectionTitle: "Services",
    glowClass:
      "pointer-events-none absolute -left-20 top-44 h-48 w-48 rounded-full bg-emerald-500/4 blur-[70px]",
    hoverColor: "green",
    services: [
      {
        icon: Bug,
        text: "Penetration Testing",
      },
      {
        icon: Code2,
        text: "Application Testing",
      },
      {
        icon: Network,
        text: "Network Security",
      },
      {
        icon: Cloud,
        text: "Cloud Security",
      },
      {
        icon: Cpu,
        text: "AI Security",
      },
      {
        icon: Database,
        text: "Blockchain Security",
      },
      {
        icon: Gamepad2,
        text: "Online Game Security",
      },
      {
        icon: Box,
        text: "Unreal Engine Security",
      },
      {
        icon: Box,
        text: "Unity Security",
      },
    ],
  },

  {
    icon: Activity,
    title: "Load Testing",
    description:
      "Test your platform at scale before launch. We simulate millions of concurrent users or players with realistic behavior patterns - not just endpoint hammering.",
    sectionTitle: "Services",
    glowClass:
      "pointer-events-none absolute -left-20 top-48 h-48 w-48 rounded-full bg-emerald-500/4 blur-[70px]",
    hoverColor: "red",
    services: [
      {
        icon: Gauge,
        text: "Stress Testing",
      },
      {
        icon: Zap,
        text: "Spike Testing",
      },
      {
        icon: Activity,
        text: "Soak Testing",
      },
      {
        icon: Activity,
        text: "Peak Testing",
        hideIcon: true,
      },
      {
        icon: Shield,
        text: "DDoS Testing",
      },
    ],
  },

  {
    icon: Code2,
    title: "Source Code Audit",
    description:
      "Deep manual source-code analysis focused on business logic flaws, authorization bypasses, cryptographic weaknesses, and high-impact application vulnerabilities.",
    sectionTitle: "MANUAL DEEP-DIVE",
    glowClass:
      "pointer-events-none absolute -right-20 top-40 h-48 w-48 rounded-full bg-blue-500/4 blur-[70px]",
    hoverColor: "blue",
    services: [
      {
        icon: KeyRound,
        text: "Authentication Bypass Audits",
      },
      {
        icon: ShieldCheck,
        text: "Authorization Logic Review",
      },
      {
        icon: Cpu,
        text: "Cryptographic Protocol Validation",
      },
      {
        icon: Bug,
        text: "OWASP Top 10 Safeguards",
      },
    ],
    action: {
      label: "Explore Source Code Audit",
      icon: Code2,
      service: sourceCodeAudit,
    },
  },
];