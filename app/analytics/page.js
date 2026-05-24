"use client";

import AppShell from "@/components/layout/app-shell";
import SectionHeader from "@/components/ui/section-header";
import MetricCard from "@/components/ui/metric-card";
import RevenueChart from "@/components/charts/revenue-chart";
import OccupancyChart from "@/components/charts/occupancy-chart";
import { guestMix, monthlyRevenue, occupancyByProperty, stats } from "@/lib/data";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const COLORS = ["#0f172a", "#334155", "#64748b", "#cbd5e1"];

export default function AnalyticsPage() {
  return (
    <AppShell
      title="Analytics"
      subtitle="A calm, data-forward view with enough visual polish for demo meetings."
      action="Export report"
    >
      <div className="mx-auto max-w-[1600px] space-y-8 pt-8">
        <div className="grid gap-5 xl:grid-cols-4">
          {stats.map((item) => (
            <MetricCard
              key={item.label}
              label={item.label}
              value={item.value}
              change={item.change}
              hint="Rolling trend from demo data."
            />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <RevenueChart data={monthlyRevenue} />
          <OccupancyChart data={occupancyByProperty} />
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionHeader
              title="Guest mix"
              description="A simple pie chart to keep the page elegant and easy to understand."
            />
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={guestMix}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={72}
                    outerRadius={110}
                    paddingAngle={3}
                  >
                    {guestMix.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: 16,
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionHeader
              title="Insights"
              description="Use this block to sell the value of the CRM during the client walkthrough."
            />
            <div className="space-y-4">
              {[
                "Revenue is strongest in the second half of the month.",
                "Premium inventory is outperforming mid-tier listings.",
                "Repeat guests contribute the highest average booking value.",
                "Occupancy is consistently above 80% across the strongest properties.",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}