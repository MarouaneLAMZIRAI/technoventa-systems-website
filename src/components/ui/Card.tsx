import React from "react";
import { cn } from "../../utils/cn";

export default function Card({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn("rounded-2xl border border-slate-200 bg-white shadow-sm", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
