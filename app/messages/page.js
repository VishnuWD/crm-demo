"use client";

import { useState } from "react";
import AppShell from "@/components/layout/app-shell";
import SectionHeader from "@/components/ui/section-header";
import { messages } from "@/lib/data";

export default function MessagesPage() {
  const [selected, setSelected] = useState(messages[0]);

  return (
    <AppShell
      title="Messages"
      subtitle="A premium inbox layout for guest communication and internal coordination."
      action="Compose"
    >
      <div className="mx-auto max-w-[1600px] space-y-8 pt-8">
        <SectionHeader
          title="Unified inbox"
          description="Tap any conversation to preview it in a clean reading pane."
        />

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            {messages.map((message) => (
              <button
                key={message.subject}
                onClick={() => setSelected(message)}
                className={`w-full rounded-2xl p-4 text-left transition ${
                  selected.subject === message.subject
                    ? "bg-slate-950 text-white"
                    : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold">{message.from}</div>
                  <div className="text-xs opacity-70">{message.time}</div>
                </div>
                <div className="mt-1 text-sm font-medium">{message.subject}</div>
                <div
                  className={`mt-2 text-sm leading-6 ${
                    selected.subject === message.subject
                      ? "text-slate-200"
                      : "text-slate-500"
                  }`}
                >
                  {message.preview}
                </div>
                {message.unread ? (
                  <div className="mt-3 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Unread
                  </div>
                ) : null}
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Conversation preview
            </div>
            <div className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-950">
              {selected.subject}
            </div>
            <div className="mt-2 text-sm text-slate-500">From {selected.from}</div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                {selected.preview}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
                Reply thread area, notes, follow-up buttons, and guest actions can sit here in a live system.
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white">
                Reply
              </button>
              <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                Mark handled
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}