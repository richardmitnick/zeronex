import ServicesPanel from "./ServicesPanel";

export const ServicesSection = () => {
  return (
    <section
      className="py-24 md:py-32 rounded-3xl w-[98%] mx-auto flex justify-center backdrop-blur-lg"
      id="services-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-2 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight">
            Our Services
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 max-w-xl">
            We diagnose custom application architectures, discover attack
            surfaces, audit code security, and certify compliant defensive
            integrity.
          </p>
        </div>

        <ServicesPanel />
      </div>
    </section>
  );
};
