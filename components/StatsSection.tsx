"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  /* ===== COUNT UP HOOK ===== */
  function useCountUp(target: number, start: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let current = 0;
      const duration = 1500; // ms
      const step = 16;
      const increment = target / (duration / step);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, step);

      return () => clearInterval(timer);
    }, [start, target]);

    return count;
  }

  /* ===== STATS VALUES ===== */
  const gstins = useCountUp(14500, visible);
  const invoices = useCountUp(500, visible);
  const users = useCountUp(250, visible);

  /* ===== OBSERVER ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-40 overflow-hidden">
      {/* ===== ANIMATED GRADIENT BACKGROUND ===== */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(120deg, rgba(59,130,246,0.35), rgba(99,102,241,0.35), rgba(34,211,238,0.35))",
          backgroundSize: "200% 200%",
          animation: "gradientMove 14s ease infinite",
        }}
      />

      {/* ===== FLOATING GLOW BLOBS ===== */}
      <div
        className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full blur-[140px]"
        style={{
          background: "rgba(89,130,246,0.55)",
          animation: "float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 h-[380px] w-[380px] rounded-full blur-[140px]"
        style={{
          background: "rgba(99,102,241,0.55)",
          animation: "float 16s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[340px] w-[340px] rounded-full blur-[140px]"
        style={{
          background: "rgba(34,211,238,0.55)",
          animation: "float 20s ease-in-out infinite",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-24">
          Serving taxpayers since{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            2017
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* STAT 1 */}
          <StatCard
            value={`${gstins.toLocaleString()}+`}
            label="GSTINs Managed"
            color="text-black-700"
            delay="0s"
          />

          {/* STAT 2 */}
          <StatCard
            value={`${invoices.toLocaleString()}+`}
            label="Invoices Processed per Month"
            color="text-black-700"
            delay="0.2s"
          />

          {/* STAT 3 */}
          <StatCard
            value={`${users.toLocaleString()}+`}
            label="Active Users"
            color="text-black-700"
            delay="0.4s"
          />
        </div>
      </div>

      {/* ===== KEYFRAMES ===== */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

/* ===== STAT CARD ===== */
function StatCard({
  value,
  label,
  color,
  delay,
}: {
  value: string;
  label: string;
  color: string;
  delay: string;
}) {
  return (
    <div
      className={`relative rounded-3xl p-14 backdrop-blur-xl bg-white/50
      shadow-[0_40px_120px_-40px_rgba(59,130,246,0.7)]
      hover:-translate-y-3 hover:shadow-[0_60px_160px_-40px_rgba(99,102,241,0.9)]
      transition-all duration-700 opacity-0`}
      style={{
        animation: `fadeUp 0.9s ease forwards`,
        animationDelay: delay,
      }}
    >
      <p className={`text-5xl font-extrabold ${color}`}>
        {value}
      </p>
      <p className="mt-4 text-gray-500 font-semibold">
        {label}
      </p>
    </div>
  );
}
