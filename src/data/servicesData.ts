import img1 from '../assets/Images/ourservices/pipeline.webp'
import img2 from '../assets/Images/ourservices/hot-tapping.webp'
import img3 from '../assets/Images/ourservices/structural.webp'

export const servicesData = [
  {
    id: 1,
    title: "Pipeline Construction",
    description:
      "Expertise in the fabrication, laying, and testing of complex pipeline networks for oil, gas, and water distribution.",
    image: img1,
    features: [
      "Flowline Installation",
      "Trunklines & Export Lines",
      "Pipeline Rehabilitation",
    ],
    path: "services/:id",
    reverse: false,
  },
  {
    title: "Hot Tapping & Stopple",
    description:
      "Uninterrupted operations are critical. Our specialized hot tapping services allow tie-ins without halting production flow.",
    image: img2,
    features: [
      "Live Pipeline Interventions",
      "Under-pressure Drilling",
      "Zero Downtime Maintenance",
    ],
    path: "/",

    reverse: true,
  },
  {
    title: "Structural Fabrication",
    description:
      "Heavy steel fabrication for industrial plants, platforms, and structural supports with strict quality standards.",
    image: img3,
    features: [
      "Heavy Duty Steel Frameworks",
      "Skids & Modular Assemblies",
      "On-site Erection Services",
    ],
    path: "/",

    reverse: false,
  },
  {
    title: "Pipeline Construction",
    description:
      "Expertise in the fabrication, laying, and testing of complex pipeline networks for oil, gas, and water distribution.",
    image: img1,
    features: [
      "Flowline Installation",
      "Trunklines & Export Lines",
      "Pipeline Rehabilitation",
    ],
    path: "/",
    reverse: false,
  },
  {
    title: "Hot Tapping & Stopple",
    description:
      "Uninterrupted operations are critical. Our specialized hot tapping services allow tie-ins without halting production flow.",
    image: img2,
    features: [
      "Live Pipeline Interventions",
      "Under-pressure Drilling",
      "Zero Downtime Maintenance",
    ],
    path: "/",

    reverse: true,
  },
  {
    title: "Structural Fabrication",
    description:
      "Heavy steel fabrication for industrial plants, platforms, and structural supports with strict quality standards.",
    image: img3,
    features: [
      "Heavy Duty Steel Frameworks",
      "Skids & Modular Assemblies",
      "On-site Erection Services",
    ],
    path: "/",

    reverse: false,
  },
];