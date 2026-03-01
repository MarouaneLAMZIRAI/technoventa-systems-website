import React, { useMemo, useState } from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Reveal from "../components/ui/Reveal";
import { JOBS } from "../data/jobs";
import type { Job } from "../types";
import { useToast } from "../components/toast/useToast";
import { isEmail } from "../utils/validators";
import { usePageMeta } from "../hooks/usePageMeta";

type ApplyPayload = {
  fullName: string;
  email: string;
  cvLink: string;
  jobId: string;
};

export default function Careers() {
  usePageMeta("Careers — Technoventa Systems", "Open roles and application form.");

  const { push } = useToast();
  const [selected, setSelected] = useState<Job | null>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cvLink, setCvLink] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setCvLink("");
    setErrors({});
  };

  const openApply = (job: Job) => {
    setSelected(job);
    resetForm();
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fullName.trim()) e.fullName = "Full name is required.";
    if (!email.trim() || !isEmail(email)) e.email = "A valid email is required.";
    if (!cvLink.trim()) e.cvLink = "CV link is required (Google Drive / Dropbox / etc).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!selected) return;
    if (!validate()) return;

    const payload: ApplyPayload = {
      fullName: fullName.trim(),
      email: email.trim(),
      cvLink: cvLink.trim(),
      jobId: selected.id,
    };

    // INTEGRATION HOOK:
    // Replace this block with EmailJS or API call. Example:
    // await fetch(import.meta.env.VITE_API_BASE_URL + "/apply", { method: "POST", body: JSON.stringify(payload) })
    console.log("CAREERS_APPLY_PAYLOAD", payload);

    push({
      variant: "success",
      title: "Application sent",
      message: "Thanks — we’ll review your profile and get back to you.",
    });

    setSelected(null);
  };

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Careers"
          title="Build deployable systems with us"
          description="We value clean engineering, pragmatic choices, and strong delivery habits."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {JOBS.map((job) => (
            <Reveal key={job.id}>
              <Card className="flex h-full flex-col p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="teal">{job.type}</Badge>
                  <Badge>{job.location}</Badge>
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{job.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{job.summary}</p>

                <div className="mt-5 space-y-2 text-sm text-slate-700">
                  <div>
                    <span className="font-semibold">Responsibilities:</span>
                    <ul className="mt-2 space-y-1">
                      {job.responsibilities.slice(0, 2).map((r) => (
                        <li key={r} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="secondary" size="sm" onClick={() => openApply(job)}>
                    Apply
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Modal
          open={Boolean(selected)}
          title={selected ? `Apply — ${selected.title}` : "Apply"}
          description="Send your details. No account required."
          onClose={() => setSelected(null)}
        >
          {selected ? (
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Role:</span> {selected.title} — {selected.location}
                </p>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}
              >
                <div>
                  <label className="text-sm font-semibold text-slate-900" htmlFor="fullName">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    autoComplete="name"
                  />
                  {errors.fullName ? <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p> : null}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                  {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email}</p> : null}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900" htmlFor="cvLink">
                    CV link
                  </label>
                  <input
                    id="cvLink"
                    type="url"
                    placeholder="https://..."
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    value={cvLink}
                    onChange={(e) => setCvLink(e.target.value)}
                  />
                  {errors.cvLink ? <p className="mt-1 text-xs text-rose-600">{errors.cvLink}</p> : null}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button type="button" variant="secondary" onClick={() => setSelected(null)}>
                    Cancel
                  </Button>
                  <Button type="submit" rightIcon={<span aria-hidden="true">→</span>}>
                    Send application
                  </Button>
                </div>
              </form>
            </div>
          ) : null}
        </Modal>
      </Container>
    </section>
  );
}
