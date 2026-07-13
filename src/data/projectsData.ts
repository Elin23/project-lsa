import hdpePipeline from "../assets/OurProjects/hdpe-pipeline.webp";
import oilManifolds from "../assets/OurProjects/oil-manifolds.webp";
import hotTapping from "../assets/OurProjects/hot-tapping.webp";
import facilityFoundations from "../assets/OurProjects/facility-foundations.webp";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  path: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "20” HDPE Pipeline",
    description:
      "Comprehensive engineering, procurement, and construction of a major pipeline project.",
    image: hdpePipeline,
    category: "EPC",
    path: "/projects/hdpe-pipeline",
  },
  {
    id: 2,
    title: "West Qurna Oil Manifolds",
    description:
      "Fabrication and precise installation of heavy-duty oil manifolds connecting field systems.",
    image: oilManifolds,
    category: "Mechanical",
    path: "/projects/oil-manifolds",
  },
  {
    id: 3,
    title: "Live Line Intervention, Basra",
    description:
      "Executed a critical hot tap on a live export line without interrupting operations.",
    image: hotTapping,
    category: "Hot Tapping",
    path: "/projects/hot-tapping",
  },
  {
    id: 4,
    title: "Facility Foundations",
    description:
      "Large-scale civil engineering works including earth-moving, piling, and foundation preparation.",
    image: facilityFoundations,
    category: "Civil",
    path: "/projects/facility-foundations",
  },
  {
    id: 5,
    title: "20” HDPE Pipeline",
    description:
      "Comprehensive engineering, procurement, and construction of a major pipeline project.",
    image: hdpePipeline,
    category: "EPC",
    path: "/projects/hdpe-pipeline",
  },
  {
    id: 6,
    title: "West Qurna Oil Manifolds",
    description:
      "Fabrication and precise installation of heavy-duty oil manifolds connecting field systems.",
    image: oilManifolds,
    category: "Mechanical",
    path: "/projects/oil-manifolds",
  },
  {
    id: 7,
    title: "Live Line Intervention, Basra",
    description:
      "Executed a critical hot tap on a live export line without interrupting operations.",
    image: hotTapping,
    category: "Hot Tapping",
    path: "/projects/hot-tapping",
  },
  {
    id: 8,
    title: "Facility Foundations",
    description:
      "Large-scale civil engineering works including earth-moving, piling, and foundation preparation.",
    image: facilityFoundations,
    category: "Civil",
    path: "/projects/facility-foundations",
  },
];

export const projectCategories = [
  { label: "All Projects", value: "All Projects" },
  { label: "Mechanical", value: "Mechanical" },
  { label: "Civil", value: "Civil" },
  { label: "Hot Tapping", value: "Hot Tapping" },
  { label: "EPC", value: "EPC" },
];