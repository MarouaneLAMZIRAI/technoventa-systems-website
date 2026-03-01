import React, { createContext, useCallback, useMemo, useState } from "react";
import type { Toast, ToastVariant } from "./types";
import { cn } from "../../utils/cn";

type ToastInput = {
  title: string;
  message?: string;
  variant?: ToastVariant;
};

type ToastContextValue = {
  push: (t: ToastInput) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);

function makeId() {
  // Works in modern browsers; safe fallback included.
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const c: any = crypto;
    if (c?.randomUUID) return c.randomUUID();
  } catch {}
  return String(Date.now()) + Math.random().toString(16).slice(2);
}

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  const tone = {
    success: "border-emerald-200 bg-emerald-50 text-emerald-900",
    info: "border-slate-200 bg-white text-slate-900",
    error: "border-rose-200 bg-rose-50 text-rose-900",
  }[toast.variant];

  return (
    <div className={cn("w-full rounded-2xl border px-4 py-3 shadow-soft", tone)}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold">{toast.title}</p>
          {toast.message ? (
            <p className="mt-1 text-sm opacity-90">{toast.message}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-xl px-2 py-1 text-xs font-semibold opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = useCallback((input: ToastInput) => {
    const id = makeId();
    const toast: Toast = {
      id,
      title: input.title,
      message: input.message,
      variant: input.variant ?? "info",
    };
    setToasts((prev) => [toast, ...prev].slice(0, 4));
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4200);
  }, []);

  const value = useMemo(() => ({ push }), [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div
        className="fixed inset-x-0 bottom-3 z-[80] mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 sm:inset-auto sm:bottom-6 sm:right-6 sm:left-auto sm:w-[360px] sm:px-0"
        aria-live="polite"
        aria-relevant="additions"
      >
        {toasts.map((t) => (
          <ToastItem
            key={t.id}
            toast={t}
            onClose={() => setToasts((p) => p.filter((x) => x.id !== t.id))}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
