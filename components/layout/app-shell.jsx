"use client";

import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function AppShell({ title, subtitle, children, action }) {
  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Sidebar />
      <div className="lg:pl-72">
        <Topbar title={title} subtitle={subtitle} action={action} />
        <main className="px-4 pb-12 sm:px-6 lg:px-10">{children}</main>
      </div>
    </div>
  );
}