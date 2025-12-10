import React from "react";

export default function CTA() {
  return (
    <section
      id="pricing"
      className="space-y-4 rounded-2xl border border-emerald-400/40 bg-linear-to-r from-emerald-500/15 via-emerald-400/10 to-slate-950 p-6"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
            Start moderating for free
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-200">
            5,000 requests / month included. Scale to billions of calls with
            volume discounts and enterprise SLAs.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-300">
            Create free account
          </button>
          <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-white/5">
            View pricing
          </button>
        </div>
      </div>
      <p className="text-xs text-slate-300">
        Need a custom plan? Contact our team for dedicated infrastructure,
        data residency guarantees and 24/7 support.
      </p>
    </section>
  );
}
