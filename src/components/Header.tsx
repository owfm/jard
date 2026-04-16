import { LawFairyWordmark } from "./LawFairyLogo";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Intelligence Hub", href: "#hub" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-off-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <LawFairyWordmark color="#1a1a1a" />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-tangerine"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-tangerine sm:inline-block"
          >
            Log in
          </a>
          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-full bg-tangerine px-5 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-tangerine-80"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
