"use client";

import { useState } from "react";
import AppShell from "@/components/layout/app-shell";
import SectionHeader from "@/components/ui/section-header";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    company: "Estate CRM",
    email: "hello@estatecrm.demo",
    notifications: true,
    darkMode: false,
  });

  const update = (key, value) => {
    setSaved(false);
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <AppShell
      title="Settings"
      subtitle="Simple controls for branding, contact details, and preferences."
      action="Save changes"
    >
      <div className="mx-auto max-w-[1200px] space-y-8 pt-8">
        <SectionHeader
          title="Workspace settings"
          description="This page keeps the demo polished and practical without feeling cluttered."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Workspace name</label>
                <input
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Contact email</label>
                <input
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => update("notifications", !form.notifications)}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-left"
              >
                <div>
                  <div className="text-sm font-semibold text-slate-950">Notifications</div>
                  <div className="text-sm text-slate-500">Email alerts for new bookings and updates.</div>
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  {form.notifications ? "On" : "Off"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => update("darkMode", !form.darkMode)}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-left"
              >
                <div>
                  <div className="text-sm font-semibold text-slate-950">Appearance</div>
                  <div className="text-sm text-slate-500">Keep the presentation in a light luxury style.</div>
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  {form.darkMode ? "Dark" : "Light"}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSaved(true)}
            className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white"
          >
            Save changes
          </button>
          {saved ? (
            <span className="text-sm font-medium text-emerald-700">
              Changes saved.
            </span>
          ) : null}
        </div>
      </div>
    </AppShell>
  );
}