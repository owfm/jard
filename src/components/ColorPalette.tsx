const colors = [
  { name: "Mint", hex: "#bfdbcc", className: "bg-mint", textDark: true },
  {
    name: "Chocolate",
    hex: "#461c17",
    className: "bg-chocolate",
    textDark: false,
  },
  {
    name: "Off-white",
    hex: "#e7e3d9",
    className: "bg-off-white",
    textDark: true,
  },
  {
    name: "Tangerine",
    hex: "#ff642c",
    className: "bg-tangerine",
    textDark: false,
  },
  { name: "Honey", hex: "#ffa426", className: "bg-honey", textDark: true },
  { name: "Teal", hex: "#09a0ad", className: "bg-teal", textDark: false },
];

export function ColorPalette() {
  return (
    <section className="bg-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-widest text-teal">
            Colour System
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-chocolate md:text-5xl">
            A bold, <em className="italic">playful palette</em>
          </h2>
          <p className="mt-4 font-sans text-lg font-light leading-relaxed text-foreground/60">
            Our bold colour-way represents the playful nature of the brand.
            Carefully considered and balanced with a 40/20/15/10/7.5/7.5 ratio.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {colors.map((color) => (
            <div key={color.name} className="flex flex-col">
              <div
                className={`${color.className} aspect-[3/4] rounded-2xl border border-black/5 p-5 transition-all hover:scale-[1.02] hover:shadow-lg`}
              >
                <p
                  className={`mt-auto font-sans text-sm font-medium ${color.textDark ? "text-chocolate" : "text-white"}`}
                >
                  {color.name}
                </p>
                <p
                  className={`font-sans text-xs ${color.textDark ? "text-chocolate/60" : "text-white/70"}`}
                >
                  {color.hex}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
