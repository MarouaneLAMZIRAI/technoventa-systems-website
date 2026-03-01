import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-brand-teal">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
