import Link from "next/link";

export default function ContactMenu() {
  return (
    <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[560px]
      rounded-2xl bg-white/95 backdrop-blur-xl border shadow-2xl p-8">

      <div className="grid grid-cols-2 gap-8">

        <Item
          title="Contact Sales"
          desc="Explore Octa GST for your business. Talk to our team about plans, features, and pricing."
          link="/contact/sales"
        />

        <Item
          title="Get Support"
          desc="Already a customer? Reach our support team for help with your account or technical issues."
          link="/support"
        />

        <Item
          title="Partner with Us"
          desc="Join our referral program and collaborate to create mutual growth opportunities."
          link="/partners"
        />

        <Item
          title="Join Our Team"
          desc="We’re hiring passionate people. Explore careers and grow with us."
          link="/careers"
        />

      </div>
    </div>
  );
}

function Item({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="block rounded-xl p-4 hover:bg-blue-50 transition"
    >
      <h4 className="font-semibold text-blue-600">{title}</h4>
      <p className="mt-1 text-sm text-gray-600 leading-relaxed">
        {desc}
      </p>
    </Link>
  );
}
