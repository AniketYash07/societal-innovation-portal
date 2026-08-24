import { ArrowUpRight } from "lucide-react";

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}
        >
          <Icon size={24} />
        </div>

        <div className="flex items-center gap-1 text-sm font-semibold text-emerald-600">
          <ArrowUpRight size={16} />
          12%
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <h2 className="mt-1 text-3xl font-bold text-slate-900">
          {value}
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default StatCard;