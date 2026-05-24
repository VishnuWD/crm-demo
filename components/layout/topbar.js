"use client";

import { Search, Plus, Bell } from "lucide-react";

export default function Topbar({ title, subtitle, action }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-10">
        <div>
          <h1 className="font-semibold text-3xl font-semibold tracking-tight text-slate-950">
            {title}
          </h1>
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 lg:flex">
            <Search className="h-4 w-4" />
            <span>Search guests, bookings, properties...</span>
          </div>

          <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <Bell className="h-4 w-4" />
          </button>

          <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800">
            <Plus className="h-4 w-4" />
            {action || "New"}
          </button>
        </div>
      </div>
    </header>
  );
}