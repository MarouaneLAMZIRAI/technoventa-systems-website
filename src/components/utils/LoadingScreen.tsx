import React from "react";
import Container from "../layout/Container";

export default function LoadingScreen() {
  return (
    <Container className="py-16">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft">
          <span className="relative inline-flex h-5 w-5">
            <span className="absolute inset-0 rounded-full border-2 border-brand-teal/30" />
            <span className="absolute inset-0 animate-spin rounded-full border-2 border-brand-teal border-t-transparent" />
          </span>
          <span className="text-sm text-slate-700">Loading…</span>
        </div>
      </div>
    </Container>
  );
}
