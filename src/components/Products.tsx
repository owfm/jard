import { LawFairyIcon } from "./LawFairyLogo";

const products = [
  {
    name: "FairyLogic",
    tag: "The Engine",
    description:
      "Our advanced Legal Intelligence engine that makes every decision transparent and verifiable. The structured logic layer powering everything we do.",
    color: "bg-teal",
    textColor: "text-white",
  },
  {
    name: "FairyDraft",
    tag: "Documents",
    description:
      "Auto-generates documents and contracts with minimal input, delivering consistent, top law-firm-grade output without the risks of generic AI.",
    color: "bg-tangerine",
    textColor: "text-white",
  },
  {
    name: "FairyFlow",
    tag: "Workflows",
    description:
      "Synchronises your workflows, ensuring a smooth, end-to-end process from onboarding through to compliance and beyond.",
    color: "bg-mint",
    textColor: "text-chocolate",
  },
  {
    name: "FairyTrust",
    tag: "Brand Promise",
    description:
      "Helps meet compliance standards and regulatory requirements with no hallucination risks. The quality guarantee behind every output.",
    color: "bg-chocolate",
    textColor: "text-off-white",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-widest text-tangerine">
            Product Suite
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-chocolate md:text-5xl">
            Legal intelligence,{" "}
            <em className="italic">not AI guesswork</em>
          </h2>
          <p className="mt-4 font-sans text-lg font-light leading-relaxed text-foreground/60">
            Our integrated platform connects every stage of your legal and HR
            workflows through a single, structured intelligence layer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className={`group relative overflow-hidden rounded-2xl ${product.color} p-8 transition-all hover:-translate-y-1 hover:shadow-2xl md:p-10`}
            >
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <LawFairyIcon
                    size={22}
                    color={
                      product.textColor === "text-white"
                        ? "#ffffff"
                        : product.textColor === "text-chocolate"
                          ? "#461c17"
                          : "#e7e3d9"
                    }
                  />
                  <span
                    className={`font-sans text-lg font-bold ${product.textColor}`}
                  >
                    {product.name}
                  </span>
                  <span className="ml-auto font-sans text-xs font-medium opacity-60">
                    <span className={product.textColor}>
                      ({product.tag})
                    </span>
                  </span>
                </div>
                <p
                  className={`font-sans text-base font-light leading-relaxed ${product.textColor} opacity-90`}
                >
                  {product.description}
                </p>
              </div>
              {/* Decorative oversized icon */}
              <div className="pointer-events-none absolute -bottom-8 -right-8 opacity-[0.07]">
                <LawFairyIcon
                  size={180}
                  color={
                    product.textColor === "text-white"
                      ? "#ffffff"
                      : "#461c17"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
