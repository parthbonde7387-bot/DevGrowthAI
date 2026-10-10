"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#05070d]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* DevGrowthAI Brand */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="DevGrowthAI Home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 text-lg font-extrabold text-white shadow-lg shadow-blue-500/20">
            DG
          </div>

          <span className="whitespace-nowrap text-xl font-bold tracking-tight sm:text-2xl">
            <span className="text-white">Dev</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Growth
            </span>
            <span className="text-white">AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 transition-colors hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 md:block"
        >
          Get a Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu((open) => !open)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="border-t border-white/10 bg-[#05070d] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="text-gray-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-3 text-center font-semibold text-white"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}