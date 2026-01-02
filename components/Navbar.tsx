
"use client";
import { ChevronDown } from "lucide-react";


import Link from "next/link";
import { useState } from "react";
import SolutionsMenu from "@/components/SolutionMenu";
import ContactMenu from "@/components/ContactMenu";

export default function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-blue-600"
        >
          <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
            ⦿
          </div>
          NANO GST
        </Link>

        {/* ================= CENTER NAV ================= */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">

          {/* -------- SOLUTIONS -------- */}
          <div
            className="relative"
            onMouseEnter={() => {
              setSolutionsOpen(true);
              setContactOpen(false);
            }}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-full transition
                ${
                  solutionsOpen
                    ? "bg-blue-600 text-white"
                    : "hover:text-blue-600"
                }
              `}
            >
              Solutions
              <span
                className={`text-xs transition ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              >
  <ChevronDown
    size={16}
    className={`transition-transform duration-200 ${
      solutionsOpen ? "rotate-180" : ""
    }`}
  />

              </span>
            </button>

            {solutionsOpen && <SolutionsMenu />}
          </div>

          {/* -------- CONTACT -------- */}
          <div
            className="relative"
            onMouseEnter={() => {
              setContactOpen(true);
              setSolutionsOpen(false);
            }}
            onMouseLeave={() => setContactOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-full transition
                ${
                  contactOpen
                    ? "bg-blue-600 text-white"
                    : "hover:text-blue-600"
                }
              `}
            >
              Contact
              <span
                className={`text-xs transition ${
                  contactOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDown
                size={16}
               className={`transition ${
                     solutionsOpen ? "rotate-180" : ""
                 }`}
                       />

              </span>
            </button>

            {contactOpen && <ContactMenu />}
          </div>

          {/* -------- PRICING -------- */}
          <Link href="/pricing" className="hover:text-blue-600 transition">
            Pricing
          </Link>
        </div>

        {/* ================= RIGHT ACTIONS ================= */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact/sales"
            className="px-5 py-2 rounded-full border border-blue-500 text-blue-600 text-sm font-medium hover:bg-blue-50 transition"
          >
            Contact Sales
          </Link>

          <Link
            href="/login"
            className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
