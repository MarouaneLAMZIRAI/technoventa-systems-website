import React from "react";
import type { Project } from "../../types";
import Badge from "../ui/Badge";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="space-y-5">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="teal">{project.category}</Badge>
          {project.tags.map((t) => (
            <Badge key={t} className="bg-slate-100 text-slate-700">
              {t}
            </Badge>
          ))}
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-700">{project.summary}</p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-slate-900">Highlights</h4>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm text-slate-700">
          Want something similar? We can tailor the architecture, UI, and device stack to your constraints and timeline.
        </p>
      </div>
    </div>
  );
}
