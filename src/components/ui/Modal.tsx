import React, { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

export default function Modal({
  open,
  title,
  description,
  onClose,
  children,
  className,
}: {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-soft",
          className
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            {description ? (
              <p className="mt-1 text-sm text-slate-600">{description}</p>
            ) : null}
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="px-5 py-4">{children}</div>
      </div>
    </div>
  );
}
