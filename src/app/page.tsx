import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Products } from "@/components/Products";
import { ToneSection } from "@/components/ToneSection";
import { ColorPalette } from "@/components/ColorPalette";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <Products />
        <ToneSection />
        <ColorPalette />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
