import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";
import Link from "next/link";
function ColorCard({
  title,
  children,
  link,
}: {
  title: string;
  children: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="
        relative block rounded-xl p-6
        bg-white/70 backdrop-blur-xl
        border border-blue-100
        shadow-[0_15px_40px_-20px_rgba(59,130,246,0.35)]
        hover:shadow-[0_25px_60px_-15px_rgba(99,102,241,0.45)]
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{children}</p>

      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-blue-200/40" />
    </Link>
  );
}


export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white text-gray-900">

    <Navbar />


      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-sky-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ================= HERO ================= */}
      <section className="pt-44 pb-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
            ✨ Special offer for Clear users →
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
            GST compliance <br />
            <span className="text-blue-600 underline decoration-blue-300 decoration-4">
              made simpler
            </span>{" "}
            for businesses.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Reconciling purchase invoices and tracking ITC claims is difficult.
            We simplify it with smart invoice matching and automated ITC tracking.
          </p>

          <div className="mt-14 text-yellow-500">
            <p className="text-xl font-semibold">GST Suvidha Provider</p>
            <p className="text-sm text-gray-500 mt-2">
              Blowbits Solutions LLP
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE GRID ================= */}
      <section className="relative py-32">
  {/* Background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100" />

  <div className="max-w-6xl mx-auto px-6 space-y-9">

    {/* ================= RETURNS ================= */}
    <div>
      <div className="flex items-center justify-center gap-3 mb-12 text-gray-800">
        <span className="text-xl">📄</span>
        <h3 className="text-2xl font-semibold">Returns</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <ColorCard link="/solutions/regular-gst" title="Regular GST Compliance →">
          Simplify monthly GST returns. Auto-generate GSTR-1 & GSTR-3B and
          reconcile input credits with GSTR-2B.
        </ColorCard>

        <ColorCard link="/solutions/sez" title="SEZ GST Compliance →">
          Seamless GST filing for SEZ units. Automate SEZ invoicing rules with
          ready GSTR-1 & GSTR-3B reports.
        </ColorCard>

        <ColorCard link="/solutions/isd" title="ISD Compliance →">
          Automate ITC distribution and generate ISD invoices. Reconcile GSTR-6A
          and auto-generate GSTR-6.
        </ColorCard>

        <ColorCard link="/solutions/tds" title="TDS under GST →">
          Stay compliant with GST TDS rules. Track deductions and file GSTR-7
          with ease.
        </ColorCard>
      </div>
    </div>

    {/* ================= AUTOMATION ================= */}
    <div>
      <div className="flex items-center justify-center gap-3 mb-12 text-gray-800">
        <span className="text-xl">🤖</span>
        <h3 className="text-2xl font-semibold">Automation</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <ColorCard link="/solutions/e-invoicing" title="E-Invoicing & E-Waybills →">
          Generate e-invoices and e-waybills in one click. Upload via UI, Excel,
          or API and fetch historical data.
        </ColorCard>

        <ColorCard link="/solutions/apis" title="GSP APIs →">
          Integrate external systems by connecting to Govt GST systems using
          GSP (GST Suvidha Provider) APIs.
        </ColorCard>
      </div>
    </div>

    {/* ================= RECONCILIATION ================= */}
    <div>
      <div className="flex items-center justify-center gap-3 mb-12 text-gray-800">
        <span className="text-xl">⚖️</span>
        <h3 className="text-2xl font-semibold">Reconciliation</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <ColorCard link="/solutions/ims" title="IMS Reconciliation & Actions →">
          Easily reconcile inward IMS invoices. Bulk accept, reject, or keep
          pending with streamlined workflows.
        </ColorCard>

        <ColorCard link="/solutions/2b" title="GSTR-2B Reconciliation →">
          Match thousands of invoices with high accuracy. Identify mismatches
          and maximize eligible ITC claims.
        </ColorCard>
      </div>
    </div>

    {/* ================= AUDIT & LITIGATION ================= */}
    <div>
      <div className="flex items-center justify-center gap-3 mb-12 text-gray-800">
        <span className="text-xl">🛡️</span>
        <h3 className="text-2xl font-semibold">Audit & Litigation</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <ColorCard link="/solutions/audit-reports" title="GST Audit Reports →">
          One-click PAN-level data fetch with detailed analytics. Export
          transaction-level data and reconcile across returns.
        </ColorCard>

        <ColorCard link="/solutions/notice-tracker" title="GST Notice Tracker →">
          Never miss a GST notice. Get daily alerts, track replies, and manage
          notices until closure.
        </ColorCard>
      </div>
    </div>

  </div>
</section>

      {/* ================= STATS ================= */}
    <StatsSection />

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function Section({ title, children }: any) {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40" />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Grid({ children }: any) {
  return <div className="grid md:grid-cols-2 gap-8">{children}</div>;
}

function Card({
  title,
  children,
  link,
}: {
  title: string;
  children: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-xl p-6
      shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]
      hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]
      transition block"
    >
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="mt-3 text-gray-600 text-sm">{children}</p>
    </Link>
  );
}


