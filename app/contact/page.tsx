"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              Let&apos;s Work Together
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Have a Project in{" "}
              <span className="gradient-text">Mind?</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Tell us about your idea, and let&apos;s turn it into a digital
              solution that helps your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <h2 className="text-2xl font-semibold">
              Let&apos;s start a conversation
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Whether you need a website, web application, SEO, digital
              marketing, database solution, or video editing — we&apos;re here
              to help.
            </p>

            <div className="mt-8 space-y-5">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="mt-1 text-zinc-200">
                    nexora.digital@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Phone</p>
                  <p className="mt-1 text-zinc-200">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">WhatsApp</p>
                  <p className="mt-1 text-zinc-200">
                    Available for quick discussions
                  </p>
                </div>
              </div>

            </div>

            {/* Response */}
            <div className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 text-violet-400" size={20} />

                <div>
                  <p className="font-medium">Quick Response</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    We usually respond to project inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <h2 className="text-2xl font-semibold">
              Tell us about your project
            </h2>

            <p className="mt-2 text-zinc-400">
              Fill out the form and we&apos;ll get back to you.
            </p>

            <form className="mt-8 space-y-5">

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500"
                  />
                </div>

              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500"
                />
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Service
                </label>

                <select
                  className="w-full rounded-xl border border-white/10 bg-[#0b0e17] px-4 py-3 text-zinc-300 outline-none focus:border-violet-500"
                >
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>Full-Stack Development</option>
                  <option>Database Solutions</option>
                  <option>SEO Services</option>
                  <option>Digital Marketing</option>
                  <option>Video Editing</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Estimated Budget
                </label>

                <select
                  className="w-full rounded-xl border border-white/10 bg-[#0b0e17] px-4 py-3 text-zinc-300 outline-none focus:border-violet-500"
                >
                  <option value="">Select your budget</option>
                  <option>Under ₹10,000</option>
                  <option>₹10,000 – ₹25,000</option>
                  <option>₹25,000 – ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Project Details
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-zinc-200"
              >
                Send Inquiry

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </form>
          </motion.div>
        </div>
      </section>

    </main>
  );
}