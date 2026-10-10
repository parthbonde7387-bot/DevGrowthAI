"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clapperboard,
  Code2,
  Database,
  Globe,
  Megaphone,
  Search,
  Sparkles,
} from "lucide-react";

import type { Service } from "@/data/services";

const icons = {
  Globe,
  Code2,
  Database,
  Search,
  Megaphone,
  Clapperboard,
};

type Props = {
  service: Service;
};

export default function ServiceDetail({ service }: Props) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Sparkles;

  return (
    <main className="overflow-hidden bg-[#05070d] text-white">
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-36 sm:pt-44">
        <div
          className={`pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 blur-[120px]`}
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient}`}
          >
            <Icon size={30} className="text-white" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            NEXORA Digital Services
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            {service.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            {service.subtitle}
          </p>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-zinc-500">
            {service.description}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-zinc-200"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              What We Offer
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Everything You Need to Get Started
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
              Explore the services we can tailor to your project's goals.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-500/40 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                  <Check size={20} />
                </div>

                <h3 className="font-semibold">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Why Choose NEXORA
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Built Around Your Goals
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              Every project starts with understanding your requirements. We
              focus on practical solutions, clear communication, and work
              aligned with your business objectives.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-300 transition hover:text-violet-200"
            >
              Discuss Your Project <ArrowRight size={18} />
            </Link>
          </div>

          <div className="space-y-4">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#090c15] p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                  <Check size={18} />
                </div>

                <p className="font-medium text-zinc-200">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            Tools & Technologies
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            The Right Tools for the Job
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
            We choose tools based on the requirements and scope of each
            project.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {service.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              FAQs
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {faq.question}

                  <ChevronDown
                    size={20}
                    className="shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 leading-7 text-zinc-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 pt-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/15 via-[#111323] to-blue-500/10 p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="relative">
            <Sparkles className="mx-auto text-violet-300" size={30} />

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Ready to Start Your Project?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
              Tell us what you have in mind. We'll discuss your requirements
              and the next steps.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-zinc-200"
            >
              Let's Talk <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}