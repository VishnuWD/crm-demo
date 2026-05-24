"use client";

import { useMemo, useState } from "react";
import AppShell from "@/components/layout/app-shell";
import SectionHeader from "@/components/ui/section-header";
import { guests } from "@/lib/data";

const filters = ["All", "VIP", "Returning", "Corporate", "New"];

export default function GuestsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    return guests.filter((guest) => {
      const matchQuery =
        guest.name.toLowerCase().includes(query.toLowerCase()) ||
        guest.city.toLowerCase().includes(query.toLowerCase());
      const matchFilter =
        activeFilter === "All" ? true : guest.type === activeFilter;
      return matchQuery && matchFilter;
    });
  }, [query, activeFilter]);

  return (
    <AppShell
      title="Guests"
      subtitle="A clean guest CRM with room for leads, repeat visitors, and VIPs."
      action="Add guest"
    >
      <div className="mx-auto max-w-[1600px] space-y-8 pt-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionHeader
            title="Guest directory"
            description="Search, filter, and present a polished guest overview."
          />
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "bg-slate-950 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or city"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none placeholder:text-slate-400 lg:w-80"
            />
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {filtered.map((guest) => (
            <div
              key={guest.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-slate-950">
                    {guest.name}
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    {guest.city} · {guest.visits} stays
                  </div>
                </div>
                <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
                  {guest.type}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Lifetime spend
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-950">
                    {guest.spend}
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Visits
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-950">
                    {guest.visits}
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Last stay
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-950">
                    {guest.lastStay}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white">
                  View profile
                </button>
                <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                  Add note
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}