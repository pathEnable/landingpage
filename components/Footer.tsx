import React from "react";

export default function Footer() {
  return (
    <footer className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
      <p>© {new Date().getFullYear()} VisionGuard. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-slate-300">
          Privacy
        </a>
        <a href="#" className="hover:text-slate-300">
          Terms
        </a>
        <a href="#developers" className="hover:text-slate-300">
          API docs
        </a>
      </div>
    </footer>
  );
}