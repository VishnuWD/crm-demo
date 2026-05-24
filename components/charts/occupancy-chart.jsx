"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function OccupancyChart({ data }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-slate-950">
          Property occupancy
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Occupancy performance across the portfolio.
        </p>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" barSize={18}>
            <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" horizontal={false} />
            <XAxis type="number" stroke="#64748b" tickLine={false} axisLine={false} />
            <YAxis
              type="category"
              dataKey="name"
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
              width={120}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "1px solid #e2e8f0",
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
              }}
            />
            <Bar dataKey="occupancy" fill="#0f172a" radius={[0, 999, 999, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}