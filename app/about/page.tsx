import {
  ArrowRight,
  Code2,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Ideas First",
    description:
      "We start by understanding the problem, goals and audience before deciding what to build.",
  },
  {
    icon: Code2,
    title: "Quality Development",
    description:
      "We focus on clean, responsive and maintainable digital solutions.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description:
      "We communicate clearly and keep the client involved throughout the project.",
  },
  {
    icon: Rocket,
    title: "Built To Grow",
    description:
      "Our solutions are designed with future improvements and business growth in mind.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-40 lg:px-8">
        <div className="hero-glow hero-glow-one" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            About DevGrowthAI
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Two Minds.
            <span className="gradient-text block">
              One Digital Vision.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            DevGrowthAI is a freelance digital solutions team focused on
            helping businesses build, improve and grow their online
            presence.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-violet-600/10 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-4xl font-bold text-violet-400">
                    2
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    Creative Minds
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-4xl font-bold text-blue-400">
                    6+
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    Digital Services
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Our Mission
                  </p>

                  <p className="mt-4 text-2xl font-semibold leading-relaxed">
                    Turn ideas into digital experiences that
                    people remember.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              We Build More Than Websites
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-zinc-400">
              <p>
                DevGrowthAI was created with a simple idea: businesses
                shouldn't need to work with multiple people for
                every part of their digital presence.
              </p>

              <p>
                We bring development, databases, SEO, digital
                marketing and creative services together under
                one team.
              </p>

              <p>
                Whether you need a simple business website or a
                complete full-stack application, we focus on
                understanding your goals and building a solution
                around them.
              </p>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3.5 font-semibold text-white transition hover:scale-105"
            >
              Work With Us
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              How We Work
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="service-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 to-blue-600/10 px-8 py-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Let's Build Together
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Have An Idea?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Let's discuss your project and find the right digital
            solution for your business.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-3.5 font-semibold text-white transition hover:scale-105"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </main>
  );
}