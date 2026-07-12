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
    image: "/src/assets/OurProjects/hdpe-pipeline.png",
    category: "EPC",
    path: "/projects/hdpe-pipeline",
  },
  {
    id: 2,
    title: "West Qurna Oil Manifolds",
    description:
      "Fabrication and precise installation of heavy-duty oil manifolds connecting field systems.",
    image: "/src/assets/OurProjects/oil-manifolds.png",
    category: "Mechanical",
    path: "/projects/oil-manifolds",
  },
  {
    id: 3,
    title: "Live Line Intervention, Basra",
    description:
      "Executed a critical hot tap on a live export line without interrupting operations.",
    image: "/src/assets/OurProjects/hot-tapping.png",
    category: "Hot Tapping",
    path: "/projects/hot-tapping",
  },
  {
    id: 4,
    title: "Facility Foundations",
    description:
      "Large-scale civil engineering works including earth-moving, piling, and foundation preparation.",
    image: "/src/assets/OurProjects/facility-foundations.png",
    category: "Civil",
    path: "/projects/facility-foundations",
  },
    {
    id: 5,
    title: "20” HDPE Pipeline",
    description:
      "Comprehensive engineering, procurement, and construction of a major pipeline project.",
    image: "/src/assets/OurProjects/hdpe-pipeline.png",
    category: "EPC",
    path: "/projects/hdpe-pipeline",
  },
  {
    id: 6,
    title: "West Qurna Oil Manifolds",
    description:
      "Fabrication and precise installation of heavy-duty oil manifolds connecting field systems.",
    image: "/src/assets/OurProjects/oil-manifolds.png",
    category: "Mechanical",
    path: "/projects/oil-manifolds",
  },
  {
    id: 7,
    title: "Live Line Intervention, Basra",
    description:
      "Executed a critical hot tap on a live export line without interrupting operations.",
    image: "/src/assets/OurProjects/hot-tapping.png",
    category: "Hot Tapping",
    path: "/projects/hot-tapping",
  },
  {
    id: 8,
    title: "Facility Foundations",
    description:
      "Large-scale civil engineering works including earth-moving, piling, and foundation preparation.",
    image: "/src/assets/OurProjects/facility-foundations.png",
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