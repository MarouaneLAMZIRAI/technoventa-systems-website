import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import PageShell from "./components/layout/PageShell";
import LoadingScreen from "./components/utils/LoadingScreen";

const Home = lazy(() => import("./pages/Home"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-soft"
        href="#main"
      >
        Skip to content
      </a>

      <Navbar />

      <ScrollToTop />
      <main id="main" className="pt-16">
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route element={<PageShell />}>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
