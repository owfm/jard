import { LawFairyWordmark } from "./LawFairyLogo";

const footerLinks = {
  Products: ["FairyLogic", "FairyDraft", "FairyFlow", "FairyTrust"],
  Company: ["About", "Careers", "Contact", "Blog"],
  Resources: ["Intelligence Hub", "Documentation", "Compliance", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-1">
            <LawFairyWordmark color="#461c17" />
            <p className="mt-4 font-sans text-sm font-light leading-relaxed text-foreground/50">
              Trusted Legal Intelligence for modern businesses.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 font-sans text-xs font-medium uppercase tracking-widest text-chocolate/40">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-foreground/60 transition-colors hover:text-tangerine"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 sm:flex-row">
          <p className="font-sans text-xs text-foreground/40">
            LawFairy Ltd 2025. 180 Strand, London, WC2R 1EA, GB.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-sans text-xs text-foreground/40 transition-colors hover:text-tangerine"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="font-sans text-xs text-foreground/40 transition-colors hover:text-tangerine"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
