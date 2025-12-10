import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative overflow-hidden rounded-2xl  bg-slate-950/80">
      <Image
        src="/image.png"
        alt="Content moderation dashboard background"
        fill
        priority
        className="-z-10 object-cover opacity-40"
      />
      <div className="relative grid gap-12 px-6 py-8 lg:grid-cols-2 lg:items-center sm:px-8 sm:py-10">
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200 ring-1 ring-emerald-400/30 sm:text-xs">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>AI content safety for images, videos & text</span>
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Protect your platform from unsafe user content.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Detect nudity, violence, hate symbols, NSFW content and more with one
            simple API. Moderate millions of images and videos in real time and
            keep your community safe.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-300">
              Start for free
            </button>
            <button className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-white/5">
              Talk to sales
            </button>
            <p className="w-full text-xs text-slate-400 sm:w-auto">
              No credit card required · 5,000 free calls / month
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_80px_rgba(16,185,129,0.25)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-emerald-300">
                Live moderation
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Stream of images and videos analysed in real-time.
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-200 ring-1 ring-emerald-400/40">
              99.9% uptime
            </span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="space-y-1 rounded-xl bg-slate-900/70 p-3 ring-1 ring-white/5">
              <p className="text-[11px] font-medium text-slate-400">Nudity</p>
              <p className="text-base font-semibold text-emerald-300">blocked</p>
              <p className="text-[11px] text-slate-500">Adult, explicit, suggestive</p>
            </div>
            <div className="space-y-1 rounded-xl bg-slate-900/70 p-3 ring-1 ring-white/5">
              <p className="text-[11px] font-medium text-slate-400">Violence</p>
              <p className="text-base font-semibold text-emerald-300">flagged</p>
              <p className="text-[11px] text-slate-500">Gore, weapons, fights</p>
            </div>
            <div className="space-y-1 rounded-xl bg-slate-900/70 p-3 ring-1 ring-white/5">
              <p className="text-[11px] font-medium text-slate-400">Logos</p>
              <p className="text-base font-semibold text-emerald-300">detected</p>
              <p className="text-[11px] text-slate-500">Brand & watermark</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-[11px] text-slate-400">
            <p>Global coverage · &lt; 500ms latency · GDPR compliant</p>
            <div className="flex -space-x-2">
              <span className="h-6 w-6 rounded-full bg-emerald-400/60" />
              <span className="h-6 w-6 rounded-full bg-sky-400/60" />
              <span className="h-6 w-6 rounded-full bg-violet-400/60" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}