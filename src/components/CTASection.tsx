import { LawFairyIcon } from "./LawFairyLogo";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-chocolate py-20 md:py-28">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-tangerine/20 via-honey/10 to-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <LawFairyIcon size={48} color="#e7e3d9" className="mx-auto mb-8" />
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-off-white md:text-5xl lg:text-6xl">
          Your wish is{" "}
          <em className="italic text-tangerine">on demand</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-sans text-lg font-light leading-relaxed text-off-white/70">
          Join the growing number of SMEs transforming their legal processes
          with structured, explainable intelligence. No black boxes. No
          hallucinations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-full bg-tangerine px-10 py-4 font-sans text-base font-medium text-white shadow-lg shadow-tangerine/25 transition-all hover:bg-tangerine-80 hover:shadow-xl"
          >
            Get Started Free
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-off-white/20 px-10 py-4 font-sans text-base font-medium text-off-white transition-colors hover:border-off-white/40 hover:bg-off-white/5"
          >
            Talk to Sales
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-off-white/40">
          <span className="font-sans text-xs font-medium uppercase tracking-wider">
            SRA Application Pending
          </span>
          <span className="hidden h-4 w-px bg-off-white/20 sm:inline-block" />
          <span className="font-sans text-xs font-medium uppercase tracking-wider">
            SEIS/EIS Eligible
          </span>
          <span className="hidden h-4 w-px bg-off-white/20 sm:inline-block" />
          <span className="font-sans text-xs font-medium uppercase tracking-wider">
            UK Based
          </span>
        </div>
      </div>
    </section>
  );
}
