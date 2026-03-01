import React from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import { SOLUTION_CATEGORIES } from "../data/solutions";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Solutions() {
  usePageMeta(
    "Solutions — Technoventa Systems",
    "Solutions by category: Energy, Water, IoT, Automation, Software, and AI."
  );

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title="Capabilities organized by outcomes"
          description="Choose the domain, then we tailor the architecture and deliverables to your constraints."
        />

        <div className="mt-10 grid gap-5">
          {SOLUTION_CATEGORIES.map((cat) => (
            <Reveal key={cat.id}>
              <Card className="p-6 sm:p-7" id={cat.id}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-lg font-semibold text-slate-900">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{cat.description}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-slate-900">Typical deliverables</h4>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    {cat.deliverables.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
