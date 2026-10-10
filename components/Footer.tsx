export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 lg:px-8">

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row">

        <p>
          © {new Date().getFullYear()} NEXORA. All rights reserved.
        </p>

        <p>
          Digital Solutions • Development • Growth
        </p>

      </div>
    </footer>
  );
}