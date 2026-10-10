"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Layers3,
  Database,
  Search,
  Megaphone,
  Video,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites designed to strengthen your online presence and turn visitors into customers.",
    features: [
      "Business Websites",
      "Landing Pages",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    slug: "full-stack-development",
    icon: Layers3,
    title: "Full-Stack Web Apps",
    description:
      "Complete web applications built with reliable frontend and backend technologies to support your business.",
    features: [
      "Frontend Development",
      "Backend Development",
      "Authentication Systems",
      "Custom Web Applications",
    ],
  },
  {
    slug: "database-solutions",
    icon: Database,
    title: "Database Solutions",
    description:
      "Structured, reliable database solutions designed to organize your data and support application growth.",
    features: [
      "Database Design",
      "Data Management",
      "Database Integration",
      "Performance Optimization",
    ],
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your website's search visibility and help potential customers discover your business online.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Website Audits",
    ],
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Reach the right audience and build your online presence through practical digital marketing strategies.",
    features: [
      "Social Media Marketing",
      "Content Strategy",
      "Campaign Planning",
      "Performance Tracking",
    ],
  },
  {
    slug: "video-editing",
    icon: Video,
    title: "Video Editing",
    description:
      "Engaging video content for brands, creators, and businesses across websites and social media platforms.",
    features: [
      "Social Media Reels",
      "Promotional Videos",
      "Transitions and Effects",
      "Color Correction",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

        <div className="absolute -right-40 top-[500px] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute -left-40 top-[1000px] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 pb-20 pt-28 sm:pb-24 sm:pt-36">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-sm text-violet-200"
            >
              <Sparkles size={15} />
              <span>What We Do</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Digital Services.
              <br />

              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Real Results.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
            >
              From websites and full-stack applications to SEO, digital
              marketing, and video editing, we help turn your ideas into
              meaningful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Get a Quote
                <ArrowRight size={17} />
              </Link>

              <a
                href="#services"
                className="rounded-xl border border-white/10 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                Our Expertise
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Everything You Need to
                <span className="text-zinc-500"> Grow Online</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
                Explore our services and find the right solution for your
                business, brand, or next big idea.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.slug}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: (index % 3) * 0.08,
                    }}
                    className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.045] sm:p-8"
                  >
                    {/* Icon */}
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-blue-500/10 text-violet-300 transition duration-300 group-hover:border-violet-400/40 group-hover:text-violet-200">
                      <Icon size={26} strokeWidth={1.7} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-zinc-400">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-zinc-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-violet-400"
                          />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Correct Service Detail Link */}
                    <div className="mt-auto pt-8">
                      <div className="mb-6 h-px w-full bg-white/[0.07]" />

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-violet-300"
                      >
                        Learn More

                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl rounded-3xl border border-white/[0.08] bg-gradient-to-br from-violet-500/[0.08] via-white/[0.02] to-blue-500/[0.06] p-8 sm:p-12 lg:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                  Why Nexora
                </p>

                <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Your Vision.
                  <br />
                  Our Digital Expertise.
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                  We focus on creating useful, modern, and user-friendly
                  digital solutions. Our goal is to understand your needs,
                  communicate clearly, and build solutions that support your
                  growth.
                </p>

                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-violet-400/40 hover:bg-white/[0.04]"
                >
                  Get to Know Us
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Modern Approach",
                    text: "Clean design and current technologies.",
                  },
                  {
                    number: "02",
                    title: "User Focused",
                    text: "Experiences designed around real people.",
                  },
                  {
                    number: "03",
                    title: "Clear Communication",
                    text: "A collaborative and transparent process.",
                  },
                  {
                    number: "04",
                    title: "Built to Grow",
                    text: "Solutions designed with future needs in mind.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-white/[0.08] bg-[#080a12]/70 p-6"
                  >
                    <span className="text-sm font-semibold text-violet-300">
                      {item.number}
                    </span>

                    <h3 className="mt-4 font-semibold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 pb-28 pt-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              Have a Project in Mind?
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Let's Build Something
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Great.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
              Tell us what you're planning, and let's explore how we can bring
              your idea to life.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Start Your Project
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}