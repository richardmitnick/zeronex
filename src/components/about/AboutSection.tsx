import { Linkedin, Github } from "lucide-react";
import { AdvisoryStatement } from "./AdvisoryStatement";
import { AboutAvatar } from "./AboutAvatar";

export default function AboutSection() {
  return (
    <section
      className="py-16 border-t border-zinc-950 max-w-7xl mx-auto px-6"
      id="about-section"
    >
      <div className="p-8 rounded-3xl apple-glass-bright grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />

        {/* About Avatar */}
        <AboutAvatar />

        {/* Advisory Statement */}
        <AdvisoryStatement />
      </div>
    </section>
  );
}
