import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Container from "./Container";
import { NAV_ITEMS } from "../../data/nav";
import Button from "../ui/Button";
import { cn } from "../../utils/cn";
import logoUrl from "../../assets/logo.png";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-5 w-6">
      <span
        className={cn(
          "absolute left-0 top-1 block h-0.5 w-6 rounded bg-slate-900 transition-all",
          open && "top-2.5 rotate-45"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-2.5 block h-0.5 w-6 rounded bg-slate-900 transition-all",
          open && "opacity-0"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-4 block h-0.5 w-6 rounded bg-slate-900 transition-all",
          open && "top-2.5 -rotate-45"
        )}
      />
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = useMemo(() => NAV_ITEMS, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        scrolled && "border-slate-200 shadow-soft"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            aria-label="Go to homepage"
            onClick={() => navigate("/")}
          >
            <img
              src={logoUrl}
              alt="Technoventa Systems logo"
              className="h-9 w-auto"
              loading="eager"
            />
          </button>
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-teal/40",
                  isActive && "text-slate-900"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button as="link" to="/contact?intent=quote">
            Get a quote
          </Button>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="pb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-soft">
            <nav aria-label="Mobile primary" className="flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                      isActive && "bg-slate-50 text-slate-900"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-2 p-2">
              <Button as="link" to="/contact?intent=quote" className="w-full justify-center">
                Get a quote
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
