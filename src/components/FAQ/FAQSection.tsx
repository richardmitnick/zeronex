import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How quickly can you start?",
    answer:
      "Most engagements begin within 4-6 weeks of initial consultation. For urgent pre-launch assessments, we offer expedited onboarding.",
  },
  {
    question: "What information do you need to get started?",
    answer:
      "We will need a brief overview of your game/platform, infrastructure details, launch timeline, and specific security concerns.",
  },
  {
    question: "Do you work under NDA?",
    answer:
      "Yes. All consultations and engagements are automatically covered by our standard NDA. We can also work under your company's NDA if preferred.",
  },
  {
    question: "What are typical engagement costs?",
    answer:
      "Every project we handle is custom-scoped to your specific infrastructure. The most efficient way to get accurate pricing is to book a brief, no-commitment consultation. We can typically provide a clear price indication during our first call so you can plan accordingly.",
  },
];

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveFAQ((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq-section"
      className="relative mx-auto w-[92%] max-w-6xl py-24 md:py-32"
    >
      {/* very subtle ambient glow only */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-105 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#52eb8e]/2.5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* HEADER */}

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-white md:text-5xl">
            Common Questions
          </h2>

          <p className="mt-4 max-w-md text-xs leading-relaxed text-zinc-400 md:text-sm">
            Quick answers before starting your security engagement.
          </p>
        </m.div>

        {/* FAQ */}

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = activeFAQ === index;

            return (
              <m.div
                key={item.question}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                  isOpen
                    ? "border-white/13 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.05)]"
                    : "border-white/7 bg-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] hover:border-white/12 hover:bg-black/30"
                }`}
              >
                {/* subtle open glow */}

                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#52eb8e]/5 blur-[65px] transition-opacity duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* soft glass highlight */}

                <div className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFAQ(index)}
                  className="relative z-10 flex w-full cursor-pointer items-center gap-4 p-5 text-left md:p-6"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-mono text-[9px] font-semibold backdrop-blur-lg transition-all duration-300 ${
                      isOpen
                        ? "border-[#52eb8e]/20 bg-[#52eb8e]/8 text-[#52eb8e]"
                        : "border-white/7 bg-white/2.5 text-zinc-500 group-hover:text-zinc-300"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-sm font-semibold transition-colors duration-300 md:text-[15px] ${isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"}`}
                    >
                      {item.question}
                    </span>
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border backdrop-blur-lg transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-[#52eb8e]/20 bg-[#52eb8e]/7 text-[#52eb8e]"
                        : "border-white/7 bg-white/2 text-zinc-500 group-hover:border-white/12 group-hover:text-white"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-6">
                        <div className="ml-13 border-l border-white/7 pl-5">
                          <p className="max-w-2xl text-xs leading-[1.8] text-zinc-400 md:text-[13px]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>

        {/* FOOTER TEXT */}

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-2 text-center text-[10px] text-zinc-500"
        >
          <MessageCircleQuestion className="h-3.5 w-3.5" />

          <span>
            Still have questions? We&apos;ll cover them during your
            consultation.
          </span>
        </m.div>
      </div>
    </section>
  );
}
