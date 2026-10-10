import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Hero />

      <section id="services">
        <Services />
      </section>

      <CTA />
    </main>
  );
}