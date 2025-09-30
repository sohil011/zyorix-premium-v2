export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1 text-slate-600">
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Services</div>
          <ul className="space-y-1 text-slate-600">
            <li><a href="/services">FinOps Assessment</a></li>
            <li><a href="/services">Cost Optimization</a></li>
            <li><a href="/services">Governance</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Resources</div>
          <ul className="space-y-1 text-slate-600">
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-1 text-slate-600">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© 2025 Zyorix.com. All rights reserved.</div>
    </footer>
  );
}
