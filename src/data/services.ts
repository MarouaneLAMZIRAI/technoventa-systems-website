import type { Service } from "../types";

export const SERVICES: Service[] = [
  {
    id: "iot-embedded",
    title: "IoT & Embedded Systems",
    description:
      "Connected devices, sensing, edge compute, and reliable field deployments — designed for real-world constraints.",
    bullets: ["ESP32/STM32 prototyping", "Sensor integration", "Edge-to-cloud pipelines"],
  },
  {
    id: "automation-robotics",
    title: "Automation & Robotics",
    description:
      "Automation systems from concept to commissioning: robotics, PLC, SCADA, and production-grade safety practices.",
    bullets: ["6-DOF integration", "PLC/SCADA", "Industrial networking"],
  },
  {
    id: "ai-data",
    title: "AI & Data",
    description:
      "Actionable intelligence for monitoring and optimization: computer vision, forecasting, anomaly detection, dashboards.",
    bullets: ["Computer vision", "Predictive analytics", "Monitoring & alerting"],
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "Web and mobile products built for performance and maintainability — with APIs and secure data foundations.",
    bullets: ["Web dashboards", "Mobile apps", "REST/GraphQL APIs"],
  },
  {
    id: "energy",
    title: "Electrical Energy Management",
    description:
      "Measure, understand, and optimize energy systems with practical instrumentation and data-driven improvements.",
    bullets: ["Energy monitoring", "Optimization", "Reporting & KPIs"],
  },
  {
    id: "water",
    title: "Water Management",
    description:
      "Sensing, control, and reporting for water assets — with robust hardware and clear operational visibility.",
    bullets: ["Flow/level sensing", "Control strategies", "Operational reporting"],
  },
];
