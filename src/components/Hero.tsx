import { LawFairyIcon } from "./LawFairyLogo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-off-white">
      {/* Decorative background element */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mint/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-tangerine/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-32 md:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column - copy */}
          <div className="max-w-xl">
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-widest text-teal">
              Trusted Legal Intelligence
            </p>
            <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-chocolate md:text-6xl lg:text-7xl">
              Transforming{" "}
              <em className="not-italic text-tangerine">legal &amp; HR</em>{" "}
              tasks into{" "}
              <em className="italic">intelligent workflows</em>
            </h1>
            <p className="mt-6 font-sans text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
              Now SMEs have a scalable, explainable alternative to generic AI
              and manual legal processes. Structured intelligence, not
              guesswork.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-tangerine px-8 py-3.5 font-sans text-base font-medium text-white shadow-lg shadow-tangerine/25 transition-all hover:bg-tangerine-80 hover:shadow-xl hover:shadow-tangerine/30"
              >
                Request a Demo
              </a>
              <a
                href="#learn"
                className="inline-flex items-center justify-center rounded-full border-2 border-chocolate/20 bg-transparent px-8 py-3.5 font-sans text-base font-medium text-chocolate transition-colors hover:border-chocolate/40 hover:bg-chocolate/5"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right column - decorative card */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl border border-black/5 bg-mint/50 p-10 shadow-2xl shadow-mint/20">
              <div className="mb-6 flex items-center gap-3">
                <LawFairyIcon size={24} color="#461c17" />
                <span className="font-sans text-sm font-medium text-chocolate">
                  Dashboard
                </span>
              </div>
              <p className="font-sans text-xs font-medium uppercase tracking-wider text-chocolate/60">
                Intelligent, structured &amp; compliant.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/80 p-5">
                  <p className="font-serif text-4xl font-bold text-chocolate">
                    230
                  </p>
                  <p className="mt-1 font-sans text-xs text-chocolate/60">
                    Hours saved
                  </p>
                </div>
                <div className="rounded-xl bg-white/80 p-5">
                  <p className="font-serif text-4xl font-bold text-chocolate">
                    81
                  </p>
                  <p className="mt-1 font-sans text-xs text-chocolate/60">
                    Documents
                  </p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-full bg-tangerine py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-tangerine-80">
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
