export default function Footer() {
  return (
    <footer className="bg-slate-700 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">

        {/* ===== TOP GRID ===== */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 text-white text-xl font-bold">
              <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                ⦿
              </div>
              NANO GST
            </div>

            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              A modern GST compliance platform helping businesses automate
              returns, reconciliation, audits, and litigation workflows.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><FooterLink label="Returns & Compliance" /></li>
              <li><FooterLink label="Reconciliation" /></li>
              <li><FooterLink label="Automation & APIs" /></li>
              <li><FooterLink label="Audit & Litigation" /></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><FooterLink label="About Us" /></li>
              <li><FooterLink label="Careers" /></li>
              <li><FooterLink label="Partners" /></li>
              <li><FooterLink label="Contact Sales" /></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><FooterLink label="Help Center" /></li>
              <li><FooterLink label="Privacy Policy" /></li>
              <li><FooterLink label="Terms of Service" /></li>
              <li><FooterLink label="Security" /></li>
            </ul>
          </div>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="my-3 h-px bg-white/10" />

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-gray-400">
            © 2026 Octa GST. All rights reserved.
          </p>

          <div className="flex gap-6">
            <FooterLink label="Privacy" />
            <FooterLink label="Terms" />
            <FooterLink label="Contact" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===== LINK ===== */
function FooterLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="hover:text-white transition-colors"
    >
      {label}
    </a>
  );
}
