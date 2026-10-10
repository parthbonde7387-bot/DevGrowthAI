"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Search,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={15} />
            Digital Solutions For Modern Businesses
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            We Build Digital
            <span className="gradient-text block">
              Solutions
            </span>
            That Grow Your Business
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
            From websites and full-stack applications to SEO,
            digital marketing and creative content — we help
            businesses build and grow their digital presence.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <a
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 font-semibold shadow-xl shadow-violet-600/20 transition hover:scale-[1.02]"
            >
              Get a Free Quote

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="/portfolio"
              className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold backdrop-blur transition hover:bg-white/[0.08]"
            >
              View Our Work
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">

            <div>
              <p className="text-2xl font-bold">6+</p>
              <p className="mt-1 text-sm text-zinc-500">
                Services
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="mt-1 text-sm text-zinc-500">
                Custom Solutions
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="mt-1 text-sm text-zinc-500">
                Digital Support
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >

          <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-[100px]" />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl">

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090c14]">

              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              <div className="grid min-h-[390px] grid-cols-2 gap-4 p-6">

                <div className="col-span-2 rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/20 p-6">

                  <div className="h-3 w-24 rounded-full bg-white/20" />

                  <div className="mt-5 h-8 w-3/4 rounded-lg bg-white/10" />

                  <div className="mt-3 h-4 w-1/2 rounded-lg bg-white/10" />

                  <div className="mt-8 h-10 w-32 rounded-full bg-white/20" />

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <Code2 className="text-violet-400" size={25} />

                  <div className="mt-6 h-3 w-20 rounded bg-white/10" />

                  <div className="mt-3 h-3 w-full rounded bg-white/5" />

                  <div className="mt-2 h-3 w-3/4 rounded bg-white/5" />

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <Search className="text-blue-400" size={25} />

                  <div className="mt-6 h-3 w-20 rounded bg-white/10" />

                  <div className="mt-3 h-3 w-full rounded bg-white/5" />

                  <div className="mt-2 h-3 w-3/4 rounded bg-white/5" />

                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}