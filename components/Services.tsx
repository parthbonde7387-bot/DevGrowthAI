"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Search,
  Megaphone,
  Video,
  Layers3,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    slug: "web-development",
    description:
      "Modern, responsive websites designed to represent your business professionally.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Development",
    slug: "full-stack-development",
    description:
      "Complete web applications with powerful frontend, backend and database systems.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    slug: "database-solutions",
    description:
      "Reliable database design, management and integration for your applications.",
  },
  {
    icon: Search,
    title: "SEO Services",
    slug: "seo",
    description:
      "Improve your online visibility and help your business reach the right audience.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Smart digital strategies to build your brand and attract more customers.",
  },
  {
    icon: Video,
    title: "Video Editing",
    slug: "video-editing",
    description:
      "Engaging videos, reels and promotional content for your digital presence.",
  },
];

export default function Services() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything You Need
            <span className="gradient-text"> Digitally</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            One team for development, growth and creative digital solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="service-card group block h-full"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-500">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-300">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}