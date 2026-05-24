"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Building2,
  BarChart3,
  Mail,
  CheckSquare,
  Settings,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/guests", label: "Guests", icon: Users },
  { href: "/bookings", label: "Bookings", icon: CalendarDays },
  { href: "/properties", label: "Properties", icon: Building2 },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/messages", label: "Messages", icon: Mail },
  { href: "/tasks", label: "Tasks", icon: CheckSquare },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200/80 bg-white/85 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="flex h-full flex-col px-5 py-6">
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Premium CRM
          </div>
          <div className="mt-2 font-semibold text-3xl font-semibold tracking-tight text-slate-950">
            Estate
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Spacious, premium, and impressive.
          </p>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-900/10"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <Icon className="h-4.5 w-4.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="text-sm font-semibold text-slate-950">
            Demo workspace
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Client-facing CRM with sample data.
          </p>
        </div>
      </div>
    </aside>
  );
}