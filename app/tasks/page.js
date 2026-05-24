"use client";

import { useState } from "react";
import AppShell from "@/components/layout/app-shell";
import SectionHeader from "@/components/ui/section-header";
import { tasks as initialTasks } from "@/lib/data";

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const toggleTask = (index) => {
    setTasks((prev) =>
      prev.map((task, i) => (i === index ? { ...task, done: !task.done } : task))
    );
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([{ title: newTask.trim(), done: false, priority: "Medium" }, ...tasks]);
    setNewTask("");
  };

  return (
    <AppShell
      title="Tasks"
      subtitle="A simple operations board with enough functionality for a live demo."
      action="Add task"
    >
      <div className="mx-auto max-w-[1600px] space-y-8 pt-8">
        <SectionHeader
          title="Operations checklist"
          description="This page is intentionally clean and functional, with breathing room and clear hierarchy."
        />

        <form onSubmit={addTask} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task"
              className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
            />
            <button className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white">
              Add item
            </button>
          </div>
        </form>

        <div className="grid gap-4">
          {tasks.map((task, index) => (
            <label
              key={`${task.title}-${index}`}
              className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(index)}
                  className="h-5 w-5 rounded border-slate-300 text-slate-950"
                />
                <div>
                  <div
                    className={`text-sm font-semibold ${
                      task.done ? "text-slate-400 line-through" : "text-slate-950"
                    }`}
                  >
                    {task.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Priority: {task.priority}
                  </div>
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  task.done ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                }`}
              >
                {task.done ? "Completed" : "Open"}
              </span>
            </label>
          ))}
        </div>
      </div>
    </AppShell>
  );
}