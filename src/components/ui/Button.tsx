import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";

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

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "to" | "className" | "children"> & {
    as: "link";
    to: string;
  };

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    leftIcon,
    rightIcon,
    children,
  } = props;

  const base =
    "inline-flex items-center gap-2 rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-teal/40 disabled:cursor-not-allowed disabled:opacity-60";

  const sizeMap: Record<NonNullable<CommonProps["size"]>, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
  };

  const variantMap: Record<Variant, string> = {
    primary:
      "bg-brand-teal text-white shadow-sm hover:brightness-[0.98] active:brightness-[0.96]",
    secondary:
      "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
  };

  const cls = cn(base, sizeMap[size], variantMap[variant], className);

  const content = (
    <>
      {leftIcon ? <span aria-hidden="true">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span aria-hidden="true">{rightIcon}</span> : null}
    </>
  );

  if (props.as === "link") {
    const { to, as, variant: _v, size: _s, leftIcon: _li, rightIcon: _ri, ...linkProps } =
      props as ButtonAsLink;

    return (
      <Link to={to} className={cls} {...linkProps}>
        {content}
      </Link>
    );
  }

  const {
    as,
    variant: _v,
    size: _s,
    leftIcon: _li,
    rightIcon: _ri,
    ...buttonProps
  } = props as ButtonAsButton;

  return (
    <button className={cls} {...buttonProps}>
      {content}
    </button>
  );
}
