import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";
import Badge from "../components/ui/Badge";
import Reveal from "../components/ui/Reveal";
import HeroVisual from "../components/hero/HeroVisual";
import { SERVICES } from "../data/services";
import { PROJECTS } from "../data/projects";
import Modal from "../components/ui/Modal";
import ProjectDetails from "../components/projects/ProjectDetails";
import ProjectCard from "../components/projects/ProjectCard";
import type { Project } from "../types";
import { usePageMeta } from "../hooks/usePageMeta";
import { IconChip, IoTIcon, RobotIcon, AIIcon, CodeIcon, EnergyIcon, WaterIcon } from "../components/icons/Icons";

const ICONS: Record<string, React.ReactNode> = {
  "iot-embedded": <IoTIcon />,
  "automation-robotics": <RobotIcon />,
  "ai-data": <AIIcon />,
  "software": <CodeIcon />,
  "energy": <EnergyIcon />,
  "water": <WaterIcon />,
};

export default function Home() {
  usePageMeta(
    "Technoventa Systems — Tech & Engineering Solutions",
    "Innovative solutions in IoT, Engineering, Automation, AI, and Software Development."
  );

  const featured = useMemo(() => PROJECTS.slice(0, 4), []);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" aria-hidden="true" />
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <Badge tone="teal">Design & Engineering Office</Badge>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  Innovative Solutions in <span className="text-brand-teal">Tech</span> &amp; Engineering
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  We provide advanced technology solutions in IoT, Engineering, Automation, AI, and Software Development —
                  built to ship, deploy, and support in real environments.
                </p>

                <p className="mt-5 text-sm font-semibold tracking-wide text-slate-700">
                  IoT • Engineering • Automation • AI • Software
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button as="link" to="/contact?intent=quote" rightIcon={<span aria-hidden="true">→</span>}>
                    Get a quote
                  </Button>
                  <Button as="link" to="/solutions" variant="secondary">
                    View Solutions
                  </Button>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { k: "End-to-end delivery", v: "From discovery to support" },
                    { k: "Rapid prototyping", v: "Hardware + software" },
                    { k: "Production mindset", v: "Reliable systems" },
                    { k: "Clear reporting", v: "KPIs that matter" },
                  ].map((item) => (
                    <div key={item.k} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                      <div className="text-xs font-semibold text-slate-900">{item.k}</div>
                      <div className="mt-1 text-xs text-slate-600">{item.v}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal className="lg:pl-6">
                <HeroVisual className="h-[360px] sm:h-[420px]" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="What we deliver"
            description="Focused capabilities, built for practical constraints — from prototype to deployment."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Reveal key={s.id}>
                <Card className="h-full p-6">
                  <div className="flex items-start justify-between gap-4">
                    <IconChip>{ICONS[s.id]}</IconChip>
                    <Badge>Service</Badge>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>

                  {s.bullets ? (
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-6">
                    <Link to="/solutions" className="text-sm font-semibold text-brand-teal hover:underline">
                      Learn more →
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Process"
            title="How we work"
            description="A simple, reliable delivery flow — designed to keep stakeholders aligned and results measurable."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              {
                step: "Discover",
                desc: "Clarify objectives, constraints, timelines, and success metrics.",
              },
              {
                step: "Design",
                desc: "Architecture, UX flows, prototypes, and technical plan.",
              },
              {
                step: "Build",
                desc: "Implementation with clear milestones and QA checkpoints.",
              },
              {
                step: "Deploy & Support",
                desc: "Deployment, monitoring hooks, documentation, and iteration.",
              },
            ].map((x, idx) => (
              <Reveal key={x.step}>
                <Card className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-teal/10 text-sm font-bold text-brand-navy">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-semibold text-slate-900">{x.step}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{x.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Projects"
              title="Featured work"
              description="A few representative examples. Each engagement is tailored to your constraints and delivery needs."
            />
            <div className="shrink-0">
              <Button as="link" to="/projects" variant="secondary">
                View all projects
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Reveal key={p.id}>
                <ProjectCard project={p} onView={(proj) => setSelected(proj)} />
              </Reveal>
            ))}
          </div>

          <Modal
            open={Boolean(selected)}
            title={selected?.title ?? ""}
            description="Project overview"
            onClose={() => setSelected(null)}
          >
            {selected ? <ProjectDetails project={selected} /> : null}
          </Modal>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-teal/10 via-white to-white p-8 shadow-soft sm:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-teal/20 blur-3xl" aria-hidden="true" />
              <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-slate-200/40 blur-3xl" aria-hidden="true" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    Ready to move from idea to deployment?
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Tell us what you’re building. We’ll propose a clean technical approach, realistic milestones, and a
                    delivery plan.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button as="link" to="/contact?intent=quote" rightIcon={<span aria-hidden="true">→</span>}>
                    Request a quote
                  </Button>
                  <Button as="link" to="/contact" variant="secondary">
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
