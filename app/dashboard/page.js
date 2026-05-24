"use client";

import AppShell from "@/components/layout/app-shell";
import SectionHeader from "@/components/ui/section-header";
import MetricCard from "@/components/ui/metric-card";
import RevenueChart from "@/components/charts/revenue-chart";
import { stats, recentBookings, monthlyRevenue } from "@/lib/data";
import { ArrowUpRight, Clock3, Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <AppShell
      title="Dashboard"
      subtitle="A premium overview of bookings, revenue, and operations."
      action="Create booking"
    >
      <div className="mx-auto max-w-[1600px] space-y-8 pt-8">
        <div className="grid gap-5 xl:grid-cols-4">
          {stats.map((item) => (
            <MetricCard
              key={item.label}
              label={item.label}
              value={item.value}
              change={item.change}
              hint="Compared with the previous period."
            />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
          <RevenueChart data={monthlyRevenue} />

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionHeader
              title="Today’s focus"
              description="A crisp snapshot of what matters most right now."
            />

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white p-2 shadow-sm">
                    <Sparkles className="h-4 w-4 text-slate-950" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-950">High demand weekend</div>
                    <div className="text-sm text-slate-500">
                      3 premium properties are likely to sell out early.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white p-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-slate-950" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-950">Pending guest approvals</div>
                    <div className="text-sm text-slate-500">
                      7 bookings are waiting for confirmation.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white p-2 shadow-sm">
                    <ArrowUpRight className="h-4 w-4 text-slate-950" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-950">Upsell opportunities</div>
                    <div className="text-sm text-slate-500">
                      Add late checkout and chef service to top-value stays.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionHeader
            title="Recent bookings"
            description="Neatly organized demo bookings to make the dashboard feel alive."
          />
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-sm text-slate-500">
                <tr>
                  <th className="px-5 py-4 font-medium">Guest</th>
                  <th className="px-5 py-4 font-medium">Property</th>
                  <th className="px-5 py-4 font-medium">Dates</th>
                  <th className="px-5 py-4 font-medium">Amount</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {recentBookings.map((item) => (
                  <tr key={item.id} className="text-sm">
                    <td className="px-5 py-4 font-medium text-slate-950">{item.guest}</td>
                    <td className="px-5 py-4 text-slate-600">{item.property}</td>
                    <td className="px-5 py-4 text-slate-600">{item.dates}</td>
                    <td className="px-5 py-4 text-slate-950">{item.amount}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          item.status === "Confirmed"
                            ? "bg-emerald-50 text-emerald-700"
                            : item.status === "Checked In"
                            ? "bg-sky-50 text-sky-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}