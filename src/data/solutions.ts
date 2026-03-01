import type { SolutionCategory } from "../types";

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    id: "energy",
    title: "Energy",
    description:
      "Monitoring and optimization solutions for solar plants, industrial energy consumers, and critical facilities.",
    deliverables: [
      "Real-time KPIs (production, consumption, voltage/current)",
      "Energy audits and improvement roadmap",
      "Alarm rules and operational reporting",
      "Data integration (inverters, meters, Modbus/RS485)",
    ],
  },
  {
    id: "water",
    title: "Water",
    description:
      "Instrumentation and automation for water networks, tanks, irrigation, and process water systems.",
    deliverables: [
      "Level/flow/pressure sensing and telemetry",
      "Remote control (valves, pumps) with safety interlocks",
      "Leak detection signals and analytics",
      "Compliance-ready reporting and dashboards",
    ],
  },
  {
    id: "iot",
    title: "IoT",
    description:
      "End-to-end device solutions: embedded firmware, hardware integration, connectivity, and fleet management.",
    deliverables: [
      "Prototype to pilot devices (ESP32/STM32)",
      "Connectivity (BLE/Wi‑Fi/LoRa/RS485)",
      "Secure device provisioning and telemetry",
      "Edge + cloud architecture and observability",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Automation systems that improve throughput and reliability, from robotics cells to industrial control.",
    deliverables: [
      "PLC programs and SCADA screens",
      "Robotics integration (6‑DOF, safety zones)",
      "Industrial protocols and networking",
      "Commissioning, documentation, and training",
    ],
  },
  {
    id: "software",
    title: "Software",
    description:
      "Modern software products for operations and management: dashboards, APIs, and data workflows.",
    deliverables: [
      "Web/mobile dashboards",
      "Backend APIs and authentication patterns",
      "Role-based access foundations",
      "Cloud deployability (Vercel/Netlify + API later)",
    ],
  },
  {
    id: "ai",
    title: "AI",
    description:
      "AI features integrated into products: computer vision, forecasting, and monitoring at scale.",
    deliverables: [
      "Computer vision pipelines (detection, classification)",
      "Time-series forecasting and anomaly detection",
      "Model monitoring and performance metrics",
      "Human-in-the-loop review workflows",
    ],
  },
];
