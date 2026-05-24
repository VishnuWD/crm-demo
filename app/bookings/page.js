"use client";

import { useMemo, useState } from "react";
import AppShell from "@/components/layout/app-shell";
import SectionHeader from "@/components/ui/section-header";
import { recentBookings } from "@/lib/data";

const filters = ["All", "Confirmed", "Pending", "Checked In"];

export default function BookingsPage() {
  const [status, setStatus] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return recentBookings.filter((booking) => {
      const matchStatus = status === "All" ? true : booking.status === status;
      const matchQuery =
        booking.guest.toLowerCase().includes(query.toLowerCase()) ||
        booking.property.toLowerCase().includes(query.toLowerCase());
      return matchStatus && matchQuery;
    });
  }, [status, query]);

  return (
    <AppShell
      title="Bookings"
      subtitle="Elegant reservations management with clean filtering and presentation."
      action="New booking"
    >
      <div className="mx-auto max-w-[1600px] space-y-8 pt-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionHeader
            title="Reservation board"
            description="Use filters and search to keep the booking workflow easy to demo."
          />
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setStatus(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    status === item
                      ? "bg-slate-950 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guest or property"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none placeholder:text-slate-400 lg:w-80"
            />
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {filtered.map((booking) => (
            <div
              key={booking.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-slate-950">
                    {booking.guest}
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    {booking.property}
                  </div>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    booking.status === "Confirmed"
                      ? "bg-emerald-50 text-emerald-700"
                      : booking.status === "Checked In"
                      ? "bg-sky-50 text-sky-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-400">
                    Booking ID
                  </div>
                  <div className="mt-2 font-semibold text-slate-950">{booking.id}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-400">
                    Dates
                  </div>
                  <div className="mt-2 font-semibold text-slate-950">{booking.dates}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-400">
                    Amount
                  </div>
                  <div className="mt-2 font-semibold text-slate-950">{booking.amount}</div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white">
                  Open booking
                </button>
                <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                  Send update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}