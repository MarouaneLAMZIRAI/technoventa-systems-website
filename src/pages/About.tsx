import React from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import Badge from "../components/ui/Badge";
import { usePageMeta } from "../hooks/usePageMeta";

export default function About() {
  usePageMeta("About — Technoventa Systems", "Mission, values, and what makes Technoventa Systems different.");

  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="About"
            title="Engineering that ships"
            description="Technoventa Systems is a design & engineering office focused on delivering deployable solutions — not demos."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Card className="p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Build high-impact technology solutions that improve operations in the field — combining hardware,
                  software, and data with a pragmatic engineering mindset.
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-slate-900">What makes us different</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {[
                      "We design for constraints: power, connectivity, maintenance, and real users.",
                      "We favor clean architectures and measurable outcomes over unnecessary complexity.",
                      "We prototype fast, then harden for deployment with documentation and support.",
                    ].map((v) => (
                      <li key={v} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>

            <Reveal className="lg:col-span-5">
              <div className="grid gap-5">
                <Card className="p-6">
                  <Badge tone="teal">Values</Badge>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">Clarity</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Simple, maintainable designs that stakeholders can understand and operate.
                  </p>
                </Card>
                <Card className="p-6">
                  <Badge tone="teal">Values</Badge>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">Reliability</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Robust systems with observability hooks and deployment-friendly choices.
                  </p>
                </Card>
                <Card className="p-6">
                  <Badge tone="teal">Values</Badge>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">Delivery</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Fast iteration with clear milestones — and support after go-live.
                  </p>
                </Card>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                { k: "10+ domains", v: "Cross-industry experience in real deployments" },
                { k: "End-to-end delivery", v: "From discovery to support, under one roof" },
                { k: "Rapid prototyping", v: "Hardware + software iteration cycles" },
              ].map((s) => (
                <Card key={s.k} className="p-6">
                  <div className="text-2xl font-semibold text-slate-900">{s.k}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{s.v}</div>
                </Card>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
