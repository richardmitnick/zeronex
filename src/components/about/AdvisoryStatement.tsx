export const AdvisoryStatement = () => {
  return (
    <div className="md:col-span-8 space-y-4">
      <span className="text-[10px] tracking-wide font-mono uppercase text-zinc-500">
        Advisory Statement
      </span>
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
        "Thorough vulnerability research is the ultimate form of proactive
        defense."
      </h3>
      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
        Our collective team specializes in manual architectural vulnerability
        research and defense engineering. By systematically auditing logical
        execution flows, web applications, cloud configurations, and network
        perimeters, we design resilient confidentiality frameworks for growing
        technology companies.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
        <div>
          <span className="text-[9px] font-mono text-zinc-500 uppercase block">
            Methodology
          </span>
          <span className="text-xs font-bold text-zinc-200 font-mono">
            Standards-Based
          </span>
        </div>
        <div>
          <span className="text-[9px] font-mono text-zinc-500 uppercase block">
            Audit Process
          </span>
          <span className="text-xs font-bold text-zinc-200 font-mono">
            Manual & Thorough
          </span>
        </div>
        <div>
          <span className="text-[9px] font-mono text-zinc-500 uppercase block">
            Scope Range
          </span>
          <span className="text-xs font-bold text-zinc-200 font-mono">
            Full-Stack Coverage
          </span>
        </div>
      </div>
    </div>
  );
};
