import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 pb-24 lg:px-8">

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-transparent px-8 py-20 text-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_60%)]" />

        <div className="relative">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Let's Work Together
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Tell us about your project and let's turn your idea into a
            digital solution.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:scale-105"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </a>

        </div>
      </div>
    </section>
  );
}