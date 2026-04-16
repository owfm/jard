const tones = [
  {
    label: "Confident",
    description: "We speak like experts - but never arrogant.",
    bg: "bg-off-white",
  },
  {
    label: "Clear",
    description: "Plain English > Legalese or AI hype.",
    bg: "bg-mint",
  },
  {
    label: "Creative",
    description:
      "We think differently, we unlock possibility and we avoid unnecessary formality.",
    bg: "bg-honey/30",
  },
  {
    label: "Supportive",
    description: "We empower and reassure our users - never intimidate them.",
    bg: "bg-teal/10",
  },
  {
    label: "Intelligent",
    description: "Always structured, always explainable.",
    bg: "bg-tangerine/10",
  },
];

export function ToneSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-widest text-honey">
            Brand Tone
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-chocolate md:text-5xl">
            How we <em className="italic">communicate</em>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tones.map((tone, index) => (
            <div
              key={tone.label}
              className={`rounded-2xl ${tone.bg} border border-black/5 p-6 transition-all hover:-translate-y-0.5 hover:shadow-md`}
            >
              <p className="mb-1 font-sans text-xs text-foreground/40">
                Tone 0{index + 1}
              </p>
              <h3 className="mb-3 font-serif text-2xl text-chocolate">
                {tone.label}
              </h3>
              <p className="font-sans text-sm font-light leading-relaxed text-foreground/60">
                {tone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
