"use client";

import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="flex items-center justify-between gap-4 py-3 sm:py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/50">
            <span className="text-sm font-semibold text-emerald-300">VG</span>
          </div>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            VisionGuard
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-xs text-slate-300 md:flex md:text-sm">
          <a
            href="#features"
            className="relative py-1 transition-colors duration-200 hover:text-white focus:text-white focus:outline-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
          >
            Products
          </a>
          <a
            href="#how-it-works"
            className="relative py-1 transition-colors duration-200 hover:text-white focus:text-white focus:outline-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
          >
            Demo
          </a>
          <a
            href="#pricing"
            className="relative py-1 transition-colors duration-200 hover:text-white focus:text-white focus:outline-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
          >
            Pricing
          </a>
          <a
            href="#developers"
            className="relative py-1 transition-colors duration-200 hover:text-white focus:text-white focus:outline-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
          >
            Resources
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden rounded-full bg-emerald-400 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition-all duration-200 hover:bg-emerald-300 hover:scale-105 hover:shadow-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-95 md:inline-flex md:px-4 md:text-sm">
            Get API key
          </button>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-slate-200 transition-all duration-200 hover:border-emerald-400/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 active:scale-95 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-transform ${
                  open ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 pb-3 pt-2 text-xs text-slate-200 md:hidden">
          <a
            href="#features"
            className="relative px-2 py-2 transition-colors duration-200 hover:text-white focus:text-white focus:outline-none after:absolute after:bottom-1 after:left-2 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-1rem)] focus:after:w-[calc(100%-1rem)]"
            onClick={() => setOpen(false)}
          >
            Products
          </a>
          <a
            href="#how-it-works"
            className="relative px-2 py-2 transition-colors duration-200 hover:text-white focus:text-white focus:outline-none after:absolute after:bottom-1 after:left-2 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-1rem)] focus:after:w-[calc(100%-1rem)]"
            onClick={() => setOpen(false)}
          >
            Demo
          </a>
          <a
            href="#pricing"
            className="relative px-2 py-2 transition-colors duration-200 hover:text-white focus:text-white focus:outline-none after:absolute after:bottom-1 after:left-2 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-1rem)] focus:after:w-[calc(100%-1rem)]"
            onClick={() => setOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#developers"
            className="relative px-2 py-2 transition-colors duration-200 hover:text-white focus:text-white focus:outline-none after:absolute after:bottom-1 after:left-2 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-1rem)] focus:after:w-[calc(100%-1rem)]"
            onClick={() => setOpen(false)}
          >
            Resources
          </a>
          <button
            className="mt-2 rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition-all duration-200 hover:bg-emerald-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-300 active:scale-95"
            onClick={() => setOpen(false)}
          >
            Get API key
          </button>
        </nav>
      )}
    </header>
  );
}
