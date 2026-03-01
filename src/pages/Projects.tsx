import React, { useMemo, useState } from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import Modal from "../components/ui/Modal";
import ProjectDetails from "../components/projects/ProjectDetails";
import ProjectCard from "../components/projects/ProjectCard";
import { PROJECTS } from "../data/projects";
import type { Project } from "../types";
import { usePageMeta } from "../hooks/usePageMeta";
import { cn } from "../utils/cn";

const ALL = "All";

export default function Projects() {
  usePageMeta("Projects — Technoventa Systems", "Selected projects across energy, water, IoT, automation, software, and AI.");

  const categories = useMemo(() => {
    const set = new Set(PROJECTS.map((p) => p.category));
    return [ALL, ...Array.from(set)];
  }, []);

  const [active, setActive] = useState<string>(ALL);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === ALL) return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title="Work samples and delivery patterns"
          description="Browse by category. Each project can be adapted to match your scope, constraints, and budget."
        />

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-teal/40",
                  isActive
                    ? "bg-brand-teal text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
                aria-pressed={isActive}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} onView={(proj) => setSelected(proj)} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900">Need a tailored case study?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share your use case and constraints — we’ll outline a realistic architecture, milestones, and deliverables.
              </p>
            </div>
            <Button as="link" to="/contact?intent=quote" rightIcon={<span aria-hidden="true">→</span>}>
              Request a quote
            </Button>
          </div>
        </div>

        <Modal
          open={Boolean(selected)}
          title={selected?.title ?? ""}
          description="Project details"
          onClose={() => setSelected(null)}
        >
          {selected ? <ProjectDetails project={selected} /> : null}
        </Modal>
      </Container>
    </section>
  );
}
