import React, { useMemo, useState } from "react";
import heroUrl from "../../assets/hero.webp";
import { cn } from "../../utils/cn";

function Placeholder() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-brand-teal/10 shadow-soft">
      <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_40%_30%,black,transparent_70%)]">
        <svg viewBox="0 0 800 500" className="h-full w-full">
          <g fill="none" stroke="rgb(148 163 184)" strokeWidth="1.5">
            {Array.from({ length: 18 }).map((_, i) => (
              <path
                key={i}
                d={`M ${20 + i * 42} 0 V 500`}
                opacity={i % 2 === 0 ? 0.25 : 0.12}
              />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <path
                key={`h-${i}`}
                d={`M 0 ${30 + i * 38} H 800`}
                opacity={i % 2 === 0 ? 0.2 : 0.1}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="absolute inset-0 p-7">
        <div className="grid h-full grid-cols-2 gap-5">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
            <div className="text-xs font-semibold text-slate-600">IoT</div>
            <div className="mt-2 h-2 w-3/4 rounded bg-slate-200" />
            <div className="mt-2 h-2 w-1/2 rounded bg-slate-200" />
            <div className="mt-6 rounded-xl bg-brand-teal/10 p-3 text-xs text-brand-navy">
              Telemetry → dashboards → actions
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
            <div className="text-xs font-semibold text-slate-600">Automation</div>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-8 w-8 rounded-2xl bg-brand-teal/20" />
              <div className="h-8 w-16 rounded-2xl bg-slate-200" />
              <div className="h-8 w-10 rounded-2xl bg-slate-200" />
            </div>
            <div className="mt-6 h-2 w-2/3 rounded bg-slate-200" />
            <div className="mt-2 h-2 w-1/2 rounded bg-slate-200" />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
            <div className="text-xs font-semibold text-slate-600">AI</div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 rounded-2xl bg-slate-200" />
              ))}
            </div>
            <div className="mt-4 h-2 w-3/4 rounded bg-slate-200" />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
            <div className="text-xs font-semibold text-slate-600">Software</div>
            <div className="mt-3 rounded-2xl bg-slate-900/90 p-3 font-mono text-[10px] leading-4 text-slate-100">
              <div>GET /telemetry/latest</div>
              <div className="opacity-80">200 OK • 42ms</div>
              <div className="mt-2 opacity-80">devices: 18 • alerts: 2</div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-teal" />
              Deployable, observable, secure-ready.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroVisual({ className }: { className?: string }) {
  const [imgOk, setImgOk] = useState(true);

  // If you replace/remove hero.webp, the placeholder will still render.
  const hasImage = useMemo(() => Boolean(heroUrl), []);

  return (
    <div className={cn("relative", className)}>
      <Placeholder />

      {hasImage && imgOk ? (
        <img
          src={heroUrl}
          alt="High-tech illustration: IoT device, robot arm, AI hologram, and software screens"
          className="pointer-events-none absolute inset-0 h-full w-full rounded-3xl object-cover opacity-[0.92] mix-blend-multiply"
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      ) : null}

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-200" />
    </div>
  );
}
