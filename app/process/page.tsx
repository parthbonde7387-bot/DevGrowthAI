import {
  ArrowRight,
  MessageSquare,
  Lightbulb,
  Code2,
  TestTube,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, audience and project requirements.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planning",
    description:
      "We define the solution, features, technology and project roadmap before development begins.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Our team designs and develops the solution using modern technologies and best practices.",
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testing",
    description:
      "We test the project across devices and scenarios to identify and fix issues before launch.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description:
      "Once everything is ready, we deploy your project and help you move forward with confidence.",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#05070d]/80 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          <a
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            NEXORA
          </a>

          <div className="hidden items-center gap-8 md:flex">

            <a href="/" className="nav-link">
              Home
            </a>

            <a href="/services" className="nav-link">
              Services
            </a>

            <a href="/portfolio" className="nav-link">
              Our Work
            </a>

            <a href="/about" className="nav-link">
              About
            </a>

            <a
              href="/process"
              className="nav-link text-white"
            >
              Process
            </a>

          </div>

          <a
            href="/contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-violet-200"
          >
            Get a Quote
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-40 lg:px-8">

        <div className="hero-glow hero-glow-one" />

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Our Process
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">

            From Idea
            <span className="gradient-text block">
              To Reality
            </span>

          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            A simple and transparent process designed to turn your
            idea into a reliable digital solution.
          </p>

        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 pb-24 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <div className="relative">

            {/* Connecting line */}
            <div className="absolute left-7 top-8 hidden h-[calc(100%-60px)] w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent md:block" />

            <div className="space-y-6">

              {steps.map((step) => {

                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 md:flex-row md:items-start"
                  >

                    {/* Number / icon */}
                    <div className="relative z-10 flex shrink-0 items-center gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">

                        <Icon size={24} />

                      </div>

                      <span className="text-sm font-bold text-zinc-600 md:hidden">
                        {step.number}
                      </span>

                    </div>

                    {/* Content */}
                    <div className="flex-1">

                      <div className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-violet-400 md:block">
                        Step {step.number}
                      </div>

                      <h2 className="mt-1 text-2xl font-bold">
                        {step.title}
                      </h2>

                      <p className="mt-3 max-w-2xl leading-7 text-zinc-500">
                        {step.description}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Why NEXORA
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Simple. Transparent. Focused.
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              We believe good projects come from clear communication,
              thoughtful planning and quality execution.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="service-card">
              <h3 className="text-xl font-semibold">
                Clear Communication
              </h3>

              <p className="mt-3 leading-7 text-zinc-500">
                Stay informed about your project from the first
                conversation to launch.
              </p>
            </div>

            <div className="service-card">
              <h3 className="text-xl font-semibold">
                Modern Technology
              </h3>

              <p className="mt-3 leading-7 text-zinc-500">
                We use modern tools and technologies to build
                reliable digital experiences.
              </p>
            </div>

            <div className="service-card">
              <h3 className="text-xl font-semibold">
                Long-Term Thinking
              </h3>

              <p className="mt-3 leading-7 text-zinc-500">
                We build with future updates, scalability and
                business growth in mind.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">

        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 to-blue-600/10 px-8 py-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Ready To Start?
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let's Build Your Idea
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Tell us what you want to build and we'll take it
            from idea to launch.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:scale-105"
          >
            Start a Project
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </main>
  );
}