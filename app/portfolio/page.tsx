import {
  ArrowUpRight,
  Code2,
  Database,
  Globe,
  Layers3,
} from "lucide-react";

const projects = [
  {
    title: "SchoolERP",
    category: "Full-Stack Web Application",
    description:
      "A school management platform for managing students, attendance, fees, examinations and multiple user roles.",
    technologies: ["Flask", "Python", "MySQL", "HTML", "CSS"],
    icon: Layers3,
  },
  {
    title: "MockMate",
    category: "AI Interview Platform",
    description:
      "An AI-powered interview preparation platform designed to help users practice mock interviews and improve their answers.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    icon: Code2,
  },
  {
    title: "YouTube Clone",
    category: "Frontend Web Application",
    description:
      "A modern video-platform interface inspired by popular video streaming applications.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    icon: Globe,
  },
  {
    title: "Smart Job Agent",
    category: "Web Application",
    description:
      "A job-focused web application designed to help users discover and manage relevant opportunities.",
    technologies: ["Python", "Flask", "MongoDB", "Bootstrap"],
    icon: Database,
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-40 lg:px-8">
        <div className="hero-glow hero-glow-one" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Our Work
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Projects That
            <span className="gradient-text block">
              Make An Impact
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Explore some of the applications and digital solutions
            we've built using modern technologies.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-2 hover:border-violet-500/30"
              >
                {/* Project visual */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-transparent">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_60%)]" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-xl transition duration-300 group-hover:scale-110">
                    <Icon
                      size={42}
                      className="text-violet-400"
                    />
                  </div>

                  <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-zinc-400 backdrop-blur">
                    {project.category}
                  </div>
                </div>

                {/* Project information */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {project.title}
                      </h2>

                      <p className="mt-3 leading-7 text-zinc-500">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition group-hover:border-violet-500/40 group-hover:bg-violet-500/10">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 to-blue-600/10 px-8 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Your Project Could Be Next
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let's Build Something Great
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Have an idea? Let's turn it into a fast, modern and
            professional digital experience.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-3.5 font-semibold text-white transition hover:scale-105"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}