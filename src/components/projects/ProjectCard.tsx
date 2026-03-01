import React from "react";
import type { Project } from "../../types";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function ProjectCard({
  project,
  onView,
}: {
  project: Project;
  onView: (p: Project) => void;
}) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="h-32 bg-gradient-to-br from-white via-slate-50 to-brand-teal/10" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <Badge tone="teal">{project.category}</Badge>
          <span className="text-xs font-semibold text-slate-500">Project</span>
        </div>

        <h3 className="mt-3 text-base font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <Badge key={t} className="bg-slate-100 text-slate-700">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-5">
          <Button variant="secondary" size="sm" onClick={() => onView(project)}>
            View details
          </Button>
        </div>
      </div>
    </Card>
  );
}
