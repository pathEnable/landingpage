import React from "react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="space-y-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
    >
      <div>
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
          How it works
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Send an image or video URL to the API and get back a detailed JSON
          response with all the detections you need to apply your rules.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2 rounded-xl bg-slate-950/60 p-4 ring-1 ring-white/5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            1. Send content
          </p>
          <p className="text-xs text-slate-400">
            Upload or pass a public URL for images, videos or GIFs.
          </p>
        </div>
        <div className="space-y-2 rounded-xl bg-slate-950/60 p-4 ring-1 ring-white/5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            2. Get predictions
          </p>
          <p className="text-xs text-slate-400">
            Receive probabilities, labels and bounding boxes within milliseconds.
          </p>
        </div>
        <div className="space-y-2 rounded-xl bg-slate-950/60 p-4 ring-1 ring-white/5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            3. Apply rules
          </p>
          <p className="text-xs text-slate-400">
            Block, blur or review content according to your policies.
          </p>
        </div>
      </div>
    </section>
  );
}
