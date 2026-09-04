import React from "react";
import ProcessTimeline from "../ProcessTimeLine/ProcessTimeline";

export const OurProcess = () => {
  return (
    <section
      className="py-24 md:py-32 rounded-3xl mx-auto flex justify-center w-[98%]  backdrop-blur-lg"
      id="process-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-2 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight">
            Our Structured Auditing Process
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 max-w-xl">
            A meticulously phased penetration testing model that prioritizes
            safety, manual precision, and developer-oriented mitigation.
          </p>
        </div>

        <ProcessTimeline />
      </div>
    </section>
  );
};
