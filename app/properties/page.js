"use client";

import AppShell from "@/components/layout/app-shell";
import SectionHeader from "@/components/ui/section-header";
import { properties } from "@/lib/data";

export default function PropertiesPage() {
  return (
    <AppShell
      title="Properties"
      subtitle="A visually refined property portfolio with strong white space."
      action="Add property"
    >
      <div className="mx-auto max-w-[1600px] space-y-8 pt-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionHeader
            title="Property portfolio"
            description="Use this space to show how the CRM organizes listings, occupancy, and nightly rates."
          />
          <div className="grid gap-5 xl:grid-cols-2">
            {properties.map((property) => (
              <div
                key={property.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-slate-950">
                      {property.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {property.location} · {property.type}
                    </div>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    {property.status}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      Occupancy
                    </div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">
                      {property.occupancy}%
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      Nightly rate
                    </div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">
                      {property.nightlyRate}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      Rooms
                    </div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">
                      {property.rooms}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                    <span>Availability</span>
                    <span>{property.occupancy}% booked</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-200">
                    <div
                      className="h-3 rounded-full bg-slate-950"
                      style={{ width: `${property.occupancy}%` }}
                    />
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white">
                    View calendar
                  </button>
                  <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
                    Edit listing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}