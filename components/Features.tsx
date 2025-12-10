import React from "react";

export default function Features() {
  return (
    <section
      id="features"
      className="mt-4 space-y-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
            Everything you need to moderate visual content
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Combine multiple models in one call: nudity, violence, OCR, faces,
            age, weapons, alcohol, and more. Designed for marketplaces,
            social apps, dating and UGC platforms.
          </p>
        </div>
        <p className="text-xs text-slate-400">
          Simple REST API · SDKs for Node, Python, PHP, Java
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2 rounded-xl bg-slate-950/60 p-4 ring-1 ring-white/5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Image & video
          </p>
          <p className="text-sm font-medium">Detect NSFW, gore & weapons</p>
          <p className="text-xs text-slate-400">
            Automatically block uploads that break your content policy and
            protect your users from shocking content.
          </p>
        </div>
        <div className="space-y-2 rounded-xl bg-slate-950/60 p-4 ring-1 ring-white/5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Brand safety
          </p>
          <p className="text-sm font-medium">Logos, watermarks & context</p>
          <p className="text-xs text-slate-400">
            Keep ads and UGC aligned with partner brands by detecting logos,
            overlays and sensitive contexts.
          </p>
        </div>
        <div className="space-y-2 rounded-xl bg-slate-950/60 p-4 ring-1 ring-white/5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Compliance
          </p>
          <p className="text-sm font-medium">Global regulations ready</p>
          <p className="text-xs text-slate-400">
            Built for GDPR and major app store guidelines with data centers
            in the EU and US.
          </p>
        </div>
      </div>
    </section>
  );
}
