import type { Job } from "../types";

export const JOBS: Job[] = [
  {
    id: "frontend-engineer",
    title: "Frontend Engineer (React)",
    location: "Morocco / Remote",
    type: "Contract",
    summary:
      "Build clean operator dashboards and customer-facing web apps with a focus on UX, performance, and maintainability.",
    responsibilities: [
      "Implement responsive UI components with accessibility in mind",
      "Collaborate with engineering to define data contracts and UX flows",
      "Ship production-ready features with solid code hygiene",
    ],
    requirements: [
      "Strong React + TypeScript experience",
      "Comfortable with TailwindCSS and component architecture",
      "Pragmatic problem-solving and attention to detail",
    ],
  },
  {
    id: "embedded-engineer",
    title: "Embedded / IoT Engineer",
    location: "On-site (Ben Guerir) / Hybrid",
    type: "Full-time",
    summary:
      "Design and prototype connected devices: sensor integration, firmware reliability, and deployment-ready connectivity.",
    responsibilities: [
      "Develop firmware for ESP32/STM32-class devices",
      "Integrate sensors and validate measurements",
      "Support pilot deployments and iterate fast",
    ],
    requirements: [
      "Embedded C/C++ fundamentals",
      "Experience with connectivity (BLE/Wi‑Fi/LoRa/RS485)",
      "Comfortable with debugging and test setups",
    ],
  },
  {
    id: "automation-engineer",
    title: "Automation Engineer (PLC/SCADA)",
    location: "Morocco",
    type: "Contract",
    summary:
      "Deliver automation projects: PLC programs, SCADA visualization, and commissioning documentation.",
    responsibilities: [
      "Design control logic with safety-first mindset",
      "Build SCADA screens and alarm rules",
      "Support commissioning and handover",
    ],
    requirements: [
      "PLC/SCADA experience (any major ecosystem)",
      "Industrial protocols (Modbus, OPC, Ethernet/IP)",
      "Clear documentation and communication",
    ],
  },
];
