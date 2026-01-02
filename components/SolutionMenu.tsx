import Link from "next/link";
import {
  FileText,
  Bot,
  Scale,
  ShieldCheck,
} from "lucide-react";

export default function SolutionsMenu() {
  return (
    <div
      className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[760px]
      rounded-xl bg-white border shadow-xl px-10 py-8"
    >
      <div className="space-y-8">

        {/* ================= RETURNS ================= */}
        <Section
          icon={<FileText size={18} />}
          title="Returns"
          items={[
            {
              title: "Regular GST Compliance",
              desc:
                "Simplify monthly GST returns. Auto-generate GSTR-1 & GSTR-3B and reconcile input credits with GSTR-2B.",
              link: "/solutions/regular-gst",
            },
            {
              title: "SEZ GST Compliance",
              desc:
                "Seamless GST filing for SEZ units. Automate SEZ invoicing rules with ready GSTR-1 & GSTR-3B reports.",
              link: "/solutions/sez",
            },
            {
              title: "ISD Compliance",
              desc:
                "Effortless compliance for Input Service Distributors. Automate ITC distribution & generate ISD invoices. Reconcile GSTR-6A and auto-generate GSTR-6.",
              link: "/solutions/isd",
            },
            {
              title: "TDS under GST",
              desc:
                "Stay compliant with GST TDS rules. Track deductions and file GSTR-7 with ease when paying your vendors.",
              link: "/solutions/tds",
            },
          ]}
        />

        {/* ================= AUTOMATION ================= */}
        <Section
          icon={<Bot size={18} />}
          title="Automation"
          items={[
            {
              title: "E-Invoicing & E-Waybills",
              desc:
                "Generate e-invoices and e-waybills in one click. Upload via UI, Excel, or API, and fetch all historical data.",
              link: "/solutions/e-invoicing",
            },
            {
              title: "GSP APIs",
              desc:
                "Integrate external system by connecting to Govt GST System using GSP (GST Suvidha Provider) APIs.",
              link: "/solutions/apis",
            },
          ]}
        />

        {/* ================= RECONCILIATION ================= */}
        <Section
          icon={<Scale size={18} />}
          title="Reconciliation"
          items={[
            {
              title: "IMS Reconciliation & Actions",
              desc:
                "Easily reconcile inward IMS invoices. Bulk accept, reject, or keep pending with streamlined workflows.",
              link: "/solutions/ims",
            },
            {
              title: "GSTR-2B Reconciliation",
              desc:
                "Match thousands of invoices with AI-driven accuracy. Identify mismatches and maximize eligible ITC claims.",
              link: "/solutions/2b",
            },
          ]}
        />

        {/* ================= AUDIT & LITIGATION ================= */}
        <Section
          icon={<ShieldCheck size={18} />}
          title="Audit & Litigation"
          items={[
            {
              title: "GST Audit Reports",
              desc:
                "One-click PAN-level data fetch with detailed analytics. Export transaction-level data and reconcile across returns.",
              link: "/solutions/audit-reports",
            },
            {
              title: "GST Notice Tracker",
              desc:
                "Never miss a GST notice. Get daily alerts, track replies, and manage notices until closure.",
              link: "/solutions/notice-tracker",
            },
          ]}
        />

      </div>
    </div>
  );
}

/* ================= SECTION ================= */

function Section({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: {
    title: string;
    desc: string;
    link: string;
  }[];
}) {
  return (
    <div>
      {/* Section header */}
      <div className="flex items-center gap-2 text-gray-700 font-medium mb-4">
        <span className="text-gray-600">{icon}</span>
        {title}
      </div>

      {/* Two-column items */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        {items.map((item) => (
          <Link key={item.title} href={item.link} className="group">
            <h4 className="text-blue-600 font-semibold group-hover:underline">
              {item.title}
            </h4>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
