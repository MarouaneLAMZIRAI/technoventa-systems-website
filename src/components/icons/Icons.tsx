import React from "react";

export function IconChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-teal/10 text-brand-navy">
      {children}
    </span>
  );
}

export function IoTIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 7h10v10H7V7Z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 9h4M17 9h4M3 15h4M17 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RobotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 21h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 3v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 8h8v6a4 4 0 0 1-8 0V8Z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12h.01M15 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7.5 7.5h9v9h-9v-9Z" stroke="currentColor" strokeWidth="2" />
      <path d="M9.5 9.5h5v5h-5v-5Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 9 5 12l3 3M16 9l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 6 10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function EnergyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

export function WaterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 14c.6 1.7 2 3 4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
