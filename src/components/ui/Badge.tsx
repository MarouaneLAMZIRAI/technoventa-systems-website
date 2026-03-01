import React from "react";
import { cn } from "../../utils/cn";

export default function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "teal";
}) {
  const tones = {
    neutral: "bg-slate-100 text-slate-700",
    teal: "bg-brand-teal/10 text-brand-navy",
  }[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        tones,
        className
      )}
    >
      {children}
    </span>
  );
}
