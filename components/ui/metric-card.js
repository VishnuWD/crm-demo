export default function MetricCard({
  label,
  value,
  change,
  hint,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">
        {label}
      </p>

      <div className="mt-3 flex items-end justify-between gap-4">
        <div className="text-3xl font-semibold tracking-tight text-slate-950">
          {value}
        </div>

        <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
          {change}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-500">
        {hint}
      </p>
    </div>
  );
}