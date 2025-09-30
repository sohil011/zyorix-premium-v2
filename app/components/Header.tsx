export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="inline-flex items-center gap-2">
          <img src="/zyorix-logo-embedded.svg" alt="Zyorix" className="h-6 w-auto" />
          <span className="sr-only">Zyorix</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm text-slate-700">
          <a href="/services" className="hover:text-slate-900">Services</a>
          <a href="/pricing" className="hover:text-slate-900">Pricing</a>
          <a href="/case-studies" className="hover:text-slate-900">Case Studies</a>
          <a href="/blog" className="hover:text-slate-900">Blog</a>
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <a
          href="/contact"
          className="ml-4 inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}
