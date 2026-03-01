import React from "react";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../utils/cn";

export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
