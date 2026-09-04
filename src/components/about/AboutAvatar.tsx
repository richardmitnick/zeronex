import { Github, Linkedin } from "lucide-react";

export const AboutAvatar = () => {
  return (
    <div className="md:col-span-4 flex flex-col items-center text-center">
      {/* Visual avatar badge placeholder - stylish Apple aesthetic */}
      <div className="w-24 h-24 rounded-full bg-white/4 backdrop-blur-md border-2 border-white/8 flex items-center justify-center mb-4 text-3xl font-bold text-zinc-300 relative select-none">
        AR
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-zinc-900 rounded-full animate-pulse" />
      </div>
      <h4 className="text-sm font-bold text-zinc-200"> Abrar Rahman </h4>
      <p className="text-[10px] font-mono text-zinc-500">
        Cybersecurity Research & Engineering
      </p>
      <div className="flex gap-3 mt-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="p-2 bg-white/2 backdrop-blur-md hover:bg-white/8 hover:text-white border border-white/5 hover:border-white/1 rounded-xl transition-all text-zinc-400 text-xs"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/richardmitnick"
          target="_blank"
          rel="noreferrer"
          className="p-2 bg-white/2 backdrop-blur-md hover:bg-white/8 hover:text-white border border-white/5 hover:border-white/1 rounded-xl transition-all text-zinc-400 text-xs"
          title="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
