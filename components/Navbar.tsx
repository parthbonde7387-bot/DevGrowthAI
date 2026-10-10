"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#05070d]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20">
            <Sparkles size={19} />
          </div>

          <span className="text-xl font-bold tracking-tight">
            NEXORA
          </span>
        </a>

        {/* Desktop Navigation */}
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

          <a href="/process" className="nav-link">
            Process
          </a>
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-violet-200 md:block"
        >
          Get a Quote
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenu && (
        <div className="border-t border-white/10 bg-[#070a12] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <a href="/" onClick={() => setMobileMenu(false)}>
              Home
            </a>

            <a href="/services" onClick={() => setMobileMenu(false)}>
              Services
            </a>

            <a href="/portfolio" onClick={() => setMobileMenu(false)}>
              Our Work
            </a>

            <a href="/about" onClick={() => setMobileMenu(false)}>
              About
            </a>

            <a href="/process" onClick={() => setMobileMenu(false)}>
              Process
            </a>

            <a
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="rounded-full bg-white px-5 py-3 text-center font-semibold text-black"
            >
              Get a Quote
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}