import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { SERVICES } from "../data/services";
import { useToast } from "../components/toast/useToast";
import { isEmail, isPhone } from "../utils/validators";
import { usePageMeta } from "../hooks/usePageMeta";

type ContactPayload = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
};

export default function Contact() {
  usePageMeta("Contact — Technoventa Systems", "Request a quote or contact Technoventa Systems.");

  const { push } = useToast();
  const [searchParams] = useSearchParams();

  const serviceOptions = useMemo(
    () => ["General inquiry", ...SERVICES.map((s) => s.title)],
    []
  );

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(serviceOptions[0] ?? "General inquiry");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const intent = searchParams.get("intent");
    if (intent === "quote") setService("General inquiry");
  }, [searchParams]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fullName.trim()) e.fullName = "Full name is required.";
    if (!email.trim() || !isEmail(email)) e.email = "A valid email is required.";
    if (!isPhone(phone)) e.phone = "Phone number looks invalid.";
    if (!service.trim()) e.service = "Please choose a service.";
    if (!message.trim() || message.trim().length < 10)
      e.message = "Please add a short message (at least 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload: ContactPayload = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      company: company.trim() || undefined,
      service: service.trim(),
      message: message.trim(),
    };

    // INTEGRATION HOOK:
    // Plug EmailJS or your API here. Example:
    // await fetch(import.meta.env.VITE_API_BASE_URL + "/contact", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload) })
    console.log("CONTACT_FORM_PAYLOAD", payload);

    push({
      variant: "success",
      title: "Message sent",
      message: "Thanks — we’ll reply as soon as possible.",
    });

    setFullName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setService(serviceOptions[0] ?? "General inquiry");
    setMessage("");
    setErrors({});
  };

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something that works in the real world"
          description="Request a quote, ask a question, or share your project constraints. We’ll respond with a practical next step."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Card className="p-6 sm:p-7">
              <h3 className="text-base font-semibold text-slate-900">Contact details</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>
                  Email:{" "}
                  <a className="font-semibold text-slate-800 hover:underline" href="mailto:contact@technoventa.example">
                    contact@technoventa.example
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a className="font-semibold text-slate-800 hover:underline" href="tel:+212000000000">
                    +212 000 000 000
                  </a>
                </p>
                <p>Availability: Monday–Friday, 09:00–18:00</p>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-semibold">What to include for faster quoting</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Scope and priority outcomes",
                    "Constraints (connectivity, power, deadlines, compliance)",
                    "Expected integrations (devices, APIs, data sources)",
                    "Deployment context (site count, users, environment)",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <Card className="p-6 sm:p-7">
              <h3 className="text-base font-semibold text-slate-900">Contact form</h3>

              <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
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
                      aria-invalid={Boolean(errors.fullName)}
                    />
                    {errors.fullName ? <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p> : null}
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-900" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
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
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email}</p> : null}
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-900" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone ? <p className="mt-1 text-xs text-rose-600">{errors.phone}</p> : null}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900" htmlFor="service">
                    Service of interest
                  </label>
                  <select
                    id="service"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    aria-invalid={Boolean(errors.service)}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service ? <p className="mt-1 text-xs text-rose-600">{errors.service}</p> : null}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message ? <p className="mt-1 text-xs text-rose-600">{errors.message}</p> : null}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button type="submit" rightIcon={<span aria-hidden="true">→</span>}>
                    Send message
                  </Button>
                </div>

                <p className="text-xs text-slate-500">
                  By submitting, you agree that your message may be used to prepare a quote and follow up about your request.
                </p>
              </form>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
