import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "pv-operator-dashboard",
    title: "Solar Operator Dashboard",
    summary:
      "Operator-facing web dashboard for PV sites with live KPIs, weather context, and alert-ready telemetry foundations.",
    category: "Energy",
    tags: ["React", "Telemetry", "KPIs", "Open-Meteo"],
    highlights: [
      "Realtime production/consumption monitoring",
      "Device health and data age indicators",
      "Time-range exploration and export-ready views",
    ],
  },
  {
    id: "industrial-automation-cell",
    title: "Automation Cell (Robotics + SCADA)",
    summary:
      "Concept-to-deployment automation cell integrating robotics, safety practices, and SCADA visualization.",
    category: "Automation",
    tags: ["PLC", "SCADA", "Safety", "6‑DOF"],
    highlights: [
      "Interlocks and safety zoning",
      "Operator screens and alarm rules",
      "Commissioning checklist & documentation",
    ],
  },
  {
    id: "smart-water-telemetry",
    title: "Smart Water Telemetry",
    summary:
      "Remote monitoring and reporting for water assets: tanks, flow points, and control nodes with clean dashboards.",
    category: "Water",
    tags: ["Sensors", "Control", "Reporting"],
    highlights: [
      "Level/flow sensing and analytics",
      "Remote control with safeguards",
      "Operational reporting and KPIs",
    ],
  },
  {
    id: "iot-device-fleet",
    title: "IoT Device Fleet (Edge-to-Cloud)",
    summary:
      "Connected embedded devices with a scalable telemetry pipeline and fleet provisioning patterns.",
    category: "IoT",
    tags: ["ESP32", "BLE/Wi‑Fi", "Provisioning"],
    highlights: [
      "Reliable firmware patterns",
      "Secure provisioning approach",
      "Fleet-friendly telemetry structure",
    ],
  },
  {
    id: "ai-vision-monitoring",
    title: "AI Vision Monitoring",
    summary:
      "Computer vision module for operational monitoring: detection + audit trail designed to fit real constraints.",
    category: "AI",
    tags: ["Computer Vision", "Edge", "Monitoring"],
    highlights: [
      "Model outputs presented for operators",
      "Performance and drift tracking hooks",
      "Privacy-aware data handling",
    ],
  },
  {
    id: "ops-dashboard-api",
    title: "Operations Dashboard + API",
    summary:
      "Full-stack-ready UI for managing assets, users, and reports — structured so an API/backend can be added cleanly.",
    category: "Software",
    tags: ["Dashboards", "APIs", "RBAC"],
    highlights: [
      "Role-based UI foundations",
      "Search + filtering patterns",
      "Modular components and clear integration points",
    ],
  },
];
