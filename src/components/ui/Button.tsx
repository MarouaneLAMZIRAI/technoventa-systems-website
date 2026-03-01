import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type As = "button" | "link";

type CommonProps = {
  variant?: Variant;
  size?: "sm" | "md";
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsLink = CommonProps & { as: "link"; to: string };

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    leftIcon,
    rightIcon,
    children,
    ...rest
  } = props as any;

  const base =
    "inline-flex items-center gap-2 rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-teal/40 disabled:cursor-not-allowed disabled:opacity-60";
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
  }[size];

  const variants: Record<Variant, string> = {
    primary:
      "bg-brand-teal text-white shadow-sm hover:brightness-[0.98] active:brightness-[0.96]",
    secondary:
      "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50",
    ghost:
      "bg-transparent text-slate-900 hover:bg-slate-100",
  };

  const cls = cn(base, sizes, variants[variant], className);

  const content = (
    <>
      {leftIcon ? <span aria-hidden="true">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span aria-hidden="true">{rightIcon}</span> : null}
    </>
  );

  if ((props as any).as === "link") {
    const { to } = props as ButtonAsLink;
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
