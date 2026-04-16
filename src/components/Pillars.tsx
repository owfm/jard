const pillars = [
  {
    number: "01",
    title: "Trust & Accuracy",
    description:
      "No hallucinations. No black-box AI. Every output is fact-checked and regulation-ready.",
    color: "bg-teal",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="text-white"
      >
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
        <path
          d="M14 20l4 4 8-8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Structured Workflows",
    description:
      "From onboarding to compliance, LawFairy connects every process using reusable data.",
    color: "bg-tangerine",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="text-white"
      >
        <rect
          x="4"
          y="4"
          width="14"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="22"
          y="22"
          width="14"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M18 11h4v4h7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Explainable Intelligence",
    description:
      "Every decision and document can be explained, traced and verified.",
    color: "bg-honey",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="text-white"
      >
        <circle cx="20" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 30h8M18 26h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="16" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "SME Empowerment",
    description:
      "Built for growth - SMEs save hours weekly and scale without legal bottlenecks.",
    color: "bg-chocolate",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="text-white"
      >
        <path
          d="M8 32 L20 8 L32 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 26h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function Pillars() {
  return (
    <section id="solutions" className="bg-mint py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-widest text-teal">
            Our Pillars
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-chocolate md:text-5xl">
            Built on four pillars of{" "}
            <em className="italic">legal intelligence</em>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group flex flex-col rounded-2xl border border-black/5 bg-white/70 p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${pillar.color}`}
              >
                {pillar.icon}
              </div>
              <p className="mb-1 font-sans text-xs font-medium text-foreground/40">
                Pillar {pillar.number}
              </p>
              <h3 className="mb-3 font-serif text-xl font-medium text-chocolate">
                {pillar.title}
              </h3>
              <p className="mt-auto font-sans text-sm font-light leading-relaxed text-foreground/60">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
