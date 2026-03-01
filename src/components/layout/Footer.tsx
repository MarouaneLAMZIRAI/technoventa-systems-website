import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import logoUrl from "../../assets/logo.png";
import { NAV_ITEMS } from "../../data/nav";

function SocialIcon({
  label,
  children,
  href = "#",
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={logoUrl}
              alt="Technoventa Systems logo"
              className="h-10 w-auto"
              loading="lazy"
            />
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              Technoventa Systems is a design & engineering office delivering pragmatic, high-impact
              solutions across IoT, automation, AI, software, energy, and water management.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <SocialIcon label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9H3v12h3V9Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 21v-7a4 4 0 0 0-4-4 3.7 3.7 0 0 0-3 1.5V9H11v12h3v-6a2 2 0 1 1 4 0v6h3Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </SocialIcon>
              <SocialIcon label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 19c-4 1.5-4-2.5-5-3m10 6v-3.5c0-1 .1-1.3-.5-2 2.5-.3 5-1.2 5-5.5 0-1.2-.4-2.3-1.2-3.1.1-.3.5-1.6-.1-3.4 0 0-1-.3-3.3 1.2a11.4 11.4 0 0 0-6 0C5.6 1.9 4.6 2.2 4.6 2.2c-.6 1.8-.2 3.1-.1 3.4C3.7 6.4 3.3 7.5 3.3 8.7c0 4.3 2.5 5.2 5 5.5-.4.4-.6 1-.6 2V22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 4l16 16M20 4L4 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-slate-900">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_ITEMS.map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-slate-600 hover:text-slate-900">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>
                Email: <a className="hover:text-slate-900" href="mailto:contact@technoventa.example">contact@technoventa.example</a>
              </p>
              <p>
                Phone: <a className="hover:text-slate-900" href="tel:+212000000000">+212 000 000 000</a>
              </p>
              <p>Address: Morocco (add your office address)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Technoventa Systems. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-teal/90" aria-hidden="true" />
            Built for speed, clarity, and deployability.
          </p>
        </div>
      </Container>
    </footer>
  );
}
