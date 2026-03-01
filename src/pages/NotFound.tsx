import React from "react";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("404 — Technoventa Systems");

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10 text-brand-navy">
            <span className="text-xl font-bold">404</span>
          </div>
          <h1 className="mt-5 text-2xl font-semibold text-slate-900">Page not found</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            The page you’re looking for doesn’t exist or was moved.
          </p>
          <div className="mt-6 flex justify-center">
            <Button as="link" to="/" variant="secondary">
              Back to home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
