import { ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Full-Stack Development", href: "/services/full-stack-development" },
  { name: "Database Solutions", href: "/services/database-solutions" },
  { name: "SEO", href: "/services/seo" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Video Editing", href: "/services/video-editing" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/portfolio" },
  { name: "Our Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070d] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="mb-5 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 text-lg font-extrabold text-white shadow-lg shadow-blue-500/20">
                DG
              </div>

              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Dev</span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Growth
                </span>
                <span className="text-white">AI</span>
              </span>
            </a>

            <p className="max-w-md text-sm leading-7 text-gray-400">
              We help businesses turn ideas into digital experiences through
              modern web development, creative solutions, and technology.
            </p>

            <p className="mt-5 font-medium text-white">
              Build Smart. Grow Faster.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-500/50 hover:bg-blue-500/10"
            >
              Let's Work Together
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="text-sm transition hover:text-cyan-400"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} DevGrowthAI. All rights reserved.
          </p>

          <p className="text-gray-500">
            Built with creativity and technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
