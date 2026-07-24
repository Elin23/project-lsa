// ======================================================
// Project 1 Images - Najaf Basra Pipeline
// ======================================================

import najafBasraCard from "../assets/projects/najaf-basra/card.webp";
import najafBasraHero from "../assets/projects/najaf-basra/hero.webp";
import najafBasraGallery1 from "../assets/projects/najaf-basra/gallery-1.webp";
import najafBasraGallery2 from "../assets/projects/najaf-basra/gallery-2.webp";
import najafBasraGallery3 from "../assets/projects/najaf-basra/gallery-3.webp";
import najafBasraGallery4 from "../assets/projects/najaf-basra/gallery-4.webp";

// ======================================================
// Project 2 Images - West Qurna Oil Manifolds
// ======================================================

import westQurnaCard from "../assets/projects/west-qurna/card.webp";
import westQurnaHero from "../assets/projects/west-qurna/hero.webp";
import westQurnaGallery1 from "../assets/projects/west-qurna/gallery-1.webp";
import westQurnaGallery2 from "../assets/projects/west-qurna/gallery-2.webp";
import westQurnaGallery3 from "../assets/projects/west-qurna/gallery-3.webp";
import westQurnaGallery4 from "../assets/projects/west-qurna/gallery-4.webp";


// ======================================================
// Project 3 Images - Live Line Intervention
// ======================================================

import liveLineCard from "../assets/projects/live-line/card.webp";
import liveLineHero from "../assets/projects/live-line/hero.webp";
import liveLineGallery1 from "../assets/projects/live-line/gallery-1.webp";
import liveLineGallery2 from "../assets/projects/live-line/gallery-2.webp";
import liveLineGallery3 from "../assets/projects/live-line/gallery-3.webp";
import liveLineGallery4 from "../assets/projects/live-line/gallery-4.webp";


// ======================================================
// Project 4 Images - Facility Foundations
// ======================================================

import facilityCard from "../assets/projects/facility-foundations/card.webp";
import facilityHero from "../assets/projects/facility-foundations/hero.webp";
import facilityGallery1 from "../assets/projects/facility-foundations/gallery-1.webp";
import facilityGallery2 from "../assets/projects/facility-foundations/gallery-2.webp";
import facilityGallery3 from "../assets/projects/facility-foundations/gallery-3.webp";
import facilityGallery4 from "../assets/projects/facility-foundations/gallery-4.webp";

// ======================================================
// Project 5 Images - Rumaila Water Pipeline
// ======================================================
import rumailaCard from "../assets/projects/rumaila-water-pipeline/card.webp";
import rumailaHero from "../assets/projects/rumaila-water-pipeline/hero.webp";
import rumailaGallery1 from "../assets/projects/rumaila-water-pipeline/gallery-1.webp";
import rumailaGallery2 from "../assets/projects/rumaila-water-pipeline/gallery-2.webp";
import rumailaGallery3 from "../assets/projects/rumaila-water-pipeline/gallery-3.webp";
import rumailaGallery4 from "../assets/projects/rumaila-water-pipeline/gallery-4.webp";

// ======================================================
// Project 6 Images - Majnoon Mechanical Upgrade
// ======================================================

import majnoonCard from "../assets/projects/majnoon-mechanical-upgrade/card.webp";
import majnoonHero from "../assets/projects/majnoon-mechanical-upgrade/hero.webp";
import majnoonGallery1 from "../assets/projects/majnoon-mechanical-upgrade/gallery-1.webp";
import majnoonGallery2 from "../assets/projects/majnoon-mechanical-upgrade/gallery-2.webp";
import majnoonGallery3 from "../assets/projects/majnoon-mechanical-upgrade/gallery-3.webp";
import majnoonGallery4 from "../assets/projects/majnoon-mechanical-upgrade/gallery-4.webp";


// ======================================================
// Project 7 Images - Zubair Hot Tapping
// ======================================================
import zubairCard from "../assets/projects/zubair-hot-tapping/card.webp";
import zubairHero from "../assets/projects/zubair-hot-tapping/hero.webp";
import zubairGallery1 from "../assets/projects/zubair-hot-tapping/gallery-1.webp";
import zubairGallery2 from "../assets/projects/zubair-hot-tapping/gallery-2.webp";
import zubairGallery3 from "../assets/projects/zubair-hot-tapping/gallery-3.webp";
import zubairGallery4 from "../assets/projects/zubair-hot-tapping/gallery-4.webp";


// ======================================================
// Project 8 Images - Khor Al Zubair Foundations
// ======================================================

import khorAlZubairCard from "../assets/projects/khor-al-zubair-foundations/card.webp";
import khorAlZubairHero from "../assets/projects/khor-al-zubair-foundations/hero.webp";
import khorAlZubairGallery1 from "../assets/projects/khor-al-zubair-foundations/gallery-1.webp";
import khorAlZubairGallery2 from "../assets/projects/khor-al-zubair-foundations/gallery-2.webp";
import khorAlZubairGallery3 from "../assets/projects/khor-al-zubair-foundations/gallery-3.webp";
import khorAlZubairGallery4 from "../assets/projects/khor-al-zubair-foundations/gallery-4.webp";
// ======================================================
// Types
// ======================================================

export type ProjectCategory =
  | "Pipeline Construction"
  | "Hot Tapping & Stopple"
  | "Tank Construction & Maintenance"
  | "Mechanical Equipment Installation";

export interface ProjectOverviewItem {
  label: string;
  value: string;
}

export interface ProjectParagraph {
  text: string;
  primary?: boolean;
}

export interface ProjectHighlight {
  id: number;
  title: string;
  description: string;
}

export interface ProjectGalleryImage {
  id: number;
  image: string;
  alt: string;
}

export interface ProjectScope {
  title: string;
  paragraphs: ProjectParagraph[];
  highlights: ProjectHighlight[];
}

export interface Project {
  id: number;

  // Main card
  slug: string;
  path: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;

  // Details page hero
  heroImage: string;
  heroTitle: string;
  heroDescription: string;

  // Details page sections
  overview: ProjectOverviewItem[];
  scope: ProjectScope;
  gallery: ProjectGalleryImage[];

  // IDs of related projects
  relatedProjectIds: number[];
}

// ======================================================
// Projects Data
// ======================================================

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "najaf-basra-pipeline",
    path: "/projects/najaf-basra-pipeline",

    title: `24" Pipeline Najaf to Basra`,
    description:
      "Engineering, procurement, and construction of a strategic pipeline connecting major energy hubs in Iraq.",

    category: "Pipeline Construction",
    image: najafBasraCard,

    heroImage: najafBasraHero,
    heroTitle: `24" Pipeline Najaf to Basra`,
    heroDescription:
      "A major infrastructure project connecting Iraq’s energy hubs through advanced Pipeline Construction engineering and specialized pipeline construction.",

    overview: [
      {
        label: "CLIENT",
        value: "Basra Oil Company",
      },
      {
        label: "CONTRACTOR",
        value: "LSA",
      },
      {
        label: "LOCATION",
        value: "Najaf to Basra, Iraq",
      },
      {
        label: "SPECIALIZATION",
        value: "Pipeline Construction",
      },
      {
        label: "DURATION",
        value: "18 Months Completion",
      },
    ],

    scope: {
      title: "Detailed Scope of Work",

      paragraphs: [
        {
          text: `The 24" Pipeline from Najaf to Basra represents a critical infrastructure development for Iraq's energy sector. LSA was responsible for the comprehensive engineering, procurement, and construction of this strategic pipeline.`,
          primary: true,
        },
        {
          text: `The work included geotechnical surveys, route optimization, pipe transportation, trenching, welding, coating inspection, hydrostatic testing, and commissioning. Specialized teams operated across challenging terrain under strict quality and safety requirements.`,
        },
        {
          text: `The project also included cathodic protection systems and advanced monitoring solutions to maintain pipeline integrity and ensure reliable long-term operation.`,
        },
      ],

      highlights: [
        {
          id: 1,
          title: "Directional Drilling",
          description:
            "Complex drilling operations beneath waterways, roads, and critical infrastructure intersections.",
        },
        {
          id: 2,
          title: "Advanced Monitoring",
          description:
            "Integrated monitoring systems for real-time pipeline integrity and operational security.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        image: najafBasraGallery1,
        alt: "Pipeline equipment mobilization",
      },
      {
        id: 2,
        image: najafBasraGallery2,
        alt: "Pipeline machinery installation",
      },
      {
        id: 3,
        image: najafBasraGallery3,
        alt: "Pipeline drilling operations",
      },
      {
        id: 4,
        image: najafBasraGallery4,
        alt: "Pipeline valve installation",
      },
    ],

    relatedProjectIds: [2, 5, 7],
  },

  {
    id: 2,
    slug: "west-qurna-oil-manifolds",
    path: "/projects/west-qurna-oil-manifolds",

    title: "West Qurna Oil Manifolds",
    description:
      "Fabrication and installation of heavy-duty oil manifolds connecting multiple production systems.",

    category: "Hot Tapping & Stopple",
    image: westQurnaCard,

    heroImage: westQurnaHero,
    heroTitle: "West Qurna Oil Manifolds",
    heroDescription:
      "Precision fabrication and installation of production manifolds designed for reliable oil-field operations.",

    overview: [
      {
        label: "CLIENT",
        value: "West Qurna Operating Division",
      },
      {
        label: "CONTRACTOR",
        value: "LSA",
      },
      {
        label: "LOCATION",
        value: "West Qurna, Basra",
      },
      {
        label: "SPECIALIZATION",
        value: "Mechanical Construction",
      },
      {
        label: "DURATION",
        value: "12 Months Completion",
      },
    ],

    scope: {
      title: "Detailed Scope of Work",

      paragraphs: [
        {
          text: `LSA delivered the fabrication and installation of high-capacity oil manifolds serving multiple production lines in the West Qurna field.`,
          primary: true,
        },
        {
          text: `The scope included material preparation, precision cutting, welding, non-destructive examination, pressure testing, protective coating, transportation, and installation at the operating site.`,
        },
        {
          text: `All manifolds were manufactured according to approved engineering drawings and international oil and gas standards to ensure dependable flow control and safe operation.`,
        },
      ],

      highlights: [
        {
          id: 1,
          title: "Precision Fabrication",
          description:
            "Controlled fabrication processes using qualified welding procedures and certified materials.",
        },
        {
          id: 2,
          title: "Pressure Testing",
          description:
            "Comprehensive hydrostatic testing to verify mechanical integrity before commissioning.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        image: westQurnaGallery1,
        alt: "Oil manifold fabrication",
      },
      {
        id: 2,
        image: westQurnaGallery2,
        alt: "Manifold welding process",
      },
      {
        id: 3,
        image: westQurnaGallery3,
        alt: "Oil manifold installation",
      },
      {
        id: 4,
        image: westQurnaGallery4,
        alt: "Completed oil manifold system",
      },
    ],

    relatedProjectIds: [1, 6, 7],
  },

  {
    id: 3,
    slug: "live-line-intervention-basra",
    path: "/projects/live-line-intervention-basra",

    title: "Live Line Intervention, Basra",
    description:
      "Execution of a critical hot tap on an operating export line without interrupting production.",

    category: "Mechanical Equipment Installation",
    image: liveLineCard,

    heroImage: liveLineHero,
    heroTitle: "Live Line Intervention, Basra",
    heroDescription:
      "A specialized hot tapping operation completed safely while maintaining continuous pipeline production.",

    overview: [
      {
        label: "CLIENT",
        value: "Basra Energy Operator",
      },
      {
        label: "CONTRACTOR",
        value: "LSA",
      },
      {
        label: "LOCATION",
        value: "Basra, Iraq",
      },
      {
        label: "SPECIALIZATION",
        value: "Hot Tapping",
      },
      {
        label: "DURATION",
        value: "6 Months Completion",
      },
    ],

    scope: {
      title: "Detailed Scope of Work",

      paragraphs: [
        {
          text: `The project involved a critical live-line intervention on an operating export pipeline without shutting down production.`,
          primary: true,
        },
        {
          text: `LSA performed engineering verification, pipeline inspection, fitting fabrication, reinforcement installation, pressure monitoring, hot tapping, and connection of the new branch line.`,
        },
        {
          text: `The operation was executed under a controlled safety procedure with continuous monitoring of pressure, temperature, and pipeline conditions.`,
        },
      ],

      highlights: [
        {
          id: 1,
          title: "Zero Shutdown",
          description:
            "The intervention was completed without interrupting the existing production process.",
        },
        {
          id: 2,
          title: "Live Pressure Control",
          description:
            "Continuous monitoring maintained safe operating conditions throughout the intervention.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        image: liveLineGallery1,
        alt: "Hot tapping equipment preparation",
      },
      {
        id: 2,
        image: liveLineGallery2,
        alt: "Live pipeline intervention",
      },
      {
        id: 3,
        image: liveLineGallery3,
        alt: "Hot tapping machine installation",
      },
      {
        id: 4,
        image: liveLineGallery4,
        alt: "Completed hot tapping connection",
      },
    ],

    relatedProjectIds: [2, 5, 7],
  },

  {
    id: 4,
    slug: "facility-foundations",
    path: "/projects/facility-foundations",

    title: "Facility Foundations",
    description:
      "Large-scale civil works including earth-moving, piling, concrete construction, and foundation preparation.",

    category: "Tank Construction & Maintenance",
    image: facilityCard,

    heroImage: facilityHero,
    heroTitle: "Facility Foundations",
    heroDescription:
      "Comprehensive civil construction works supporting major industrial and energy facilities.",

    overview: [
      {
        label: "CLIENT",
        value: "Southern Energy Facilities",
      },
      {
        label: "CONTRACTOR",
        value: "LSA",
      },
      {
        label: "LOCATION",
        value: "Southern Iraq",
      },
      {
        label: "SPECIALIZATION",
        value: "Civil Construction",
      },
      {
        label: "DURATION",
        value: "14 Months Completion",
      },
    ],

    scope: {
      title: "Detailed Scope of Work",

      paragraphs: [
        {
          text: `LSA completed extensive civil foundation works for a major industrial facility in southern Iraq.`,
          primary: true,
        },
        {
          text: `The work included land preparation, soil improvement, excavation, piling, reinforcement installation, concrete casting, underground utilities, and final surface finishing.`,
        },
        {
          text: `Quality control teams performed continuous inspections and material testing to ensure that all foundations met the required structural and operational standards.`,
        },
      ],

      highlights: [
        {
          id: 1,
          title: "Heavy Foundations",
          description:
            "Reinforced concrete foundations designed to support heavy industrial equipment.",
        },
        {
          id: 2,
          title: "Ground Improvement",
          description:
            "Advanced soil stabilization and compaction processes for long-term structural performance.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        image: facilityGallery1,
        alt: "Facility earthworks",
      },
      {
        id: 2,
        image: facilityGallery2,
        alt: "Foundation reinforcement",
      },
      {
        id: 3,
        image: facilityGallery3,
        alt: "Concrete foundation construction",
      },
      {
        id: 4,
        image: facilityGallery4,
        alt: "Completed facility foundations",
      },
    ],

    relatedProjectIds: [1, 6, 8],
  },

  {
    id: 5,
    slug: "rumaila-produced-water-pipeline",
    path: "/projects/rumaila-produced-water-pipeline",

    title: "Rumaila Produced Water Pipeline",
    description:
      "Construction of a corrosion-resistant pipeline network for produced-water transportation and treatment.",

    category: "Pipeline Construction",
    image: rumailaCard,

    heroImage: rumailaHero,
    heroTitle: "Rumaila Produced Water Pipeline",
    heroDescription:
      "An integrated Pipeline Construction pipeline solution supporting safe produced-water transport and environmental protection.",

    overview: [
      {
        label: "CLIENT",
        value: "Rumaila Operating Organization",
      },
      {
        label: "CONTRACTOR",
        value: "LSA",
      },
      {
        label: "LOCATION",
        value: "Rumaila Field, Basra",
      },
      {
        label: "SPECIALIZATION",
        value: "Water Pipeline Pipeline Construction",
      },
      {
        label: "DURATION",
        value: "16 Months Completion",
      },
    ],

    scope: {
      title: "Detailed Scope of Work",

      paragraphs: [
        {
          text: `The Rumaila Produced Water Pipeline project was developed to improve the safe transportation of produced water from operating facilities to treatment and disposal systems.`,
          primary: true,
        },
        {
          text: `LSA delivered pipeline design, hydraulic calculations, procurement, fabrication, trenching, welding, coating, testing, and commissioning.`,
        },
        {
          text: `Special consideration was given to corrosion protection, leak prevention, and environmental compliance throughout the project lifecycle.`,
        },
      ],

      highlights: [
        {
          id: 1,
          title: "Corrosion Protection",
          description:
            "Advanced internal and external protection systems designed for produced-water service.",
        },
        {
          id: 2,
          title: "Environmental Control",
          description:
            "Leak prevention and monitoring measures supporting safe environmental operation.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        image: rumailaGallery1,
        alt: "Produced water pipeline installation",
      },
      {
        id: 2,
        image: rumailaGallery2,
        alt: "Pipeline welding operation",
      },
      {
        id: 3,
        image: rumailaGallery3,
        alt: "Pipeline coating inspection",
      },
      {
        id: 4,
        image: rumailaGallery4,
        alt: "Produced water pipeline testing",
      },
    ],

    relatedProjectIds: [1, 3, 6],
  },

  {
    id: 6,
    slug: "majnoon-mechanical-upgrade",
    path: "/projects/majnoon-mechanical-upgrade",

    title: "Majnoon Mechanical Upgrade",
    description:
      "Mechanical modification and equipment upgrade works for an operating oil-processing facility.",

    category: "Hot Tapping & Stopple",
    image: majnoonCard,

    heroImage: majnoonHero,
    heroTitle: "Majnoon Mechanical Upgrade",
    heroDescription:
      "A comprehensive mechanical upgrade improving the reliability and capacity of critical processing systems.",

    overview: [
      {
        label: "CLIENT",
        value: "Majnoon Oil Field Operator",
      },
      {
        label: "CONTRACTOR",
        value: "LSA",
      },
      {
        label: "LOCATION",
        value: "Majnoon Field, Basra",
      },
      {
        label: "SPECIALIZATION",
        value: "Mechanical Upgrade",
      },
      {
        label: "DURATION",
        value: "10 Months Completion",
      },
    ],

    scope: {
      title: "Detailed Scope of Work",

      paragraphs: [
        {
          text: `LSA executed a mechanical upgrade program for critical systems operating within the Majnoon oil field.`,
          primary: true,
        },
        {
          text: `The scope covered piping modifications, equipment replacement, valve installation, structural supports, tie-in works, inspection, pressure testing, and mechanical completion.`,
        },
        {
          text: `The work was carefully coordinated with facility operations to minimize production disruption and maintain safe site conditions.`,
        },
      ],

      highlights: [
        {
          id: 1,
          title: "System Integration",
          description:
            "New mechanical equipment was integrated with existing operating systems.",
        },
        {
          id: 2,
          title: "Controlled Tie-ins",
          description:
            "Planned tie-in activities minimized shutdown periods and operational impact.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        image: majnoonGallery1,
        alt: "Mechanical equipment upgrade",
      },
      {
        id: 2,
        image: majnoonGallery2,
        alt: "Industrial piping modification",
      },
      {
        id: 3,
        image: majnoonGallery3,
        alt: "Mechanical valve installation",
      },
      {
        id: 4,
        image: majnoonGallery4,
        alt: "Completed facility upgrade",
      },
    ],

    relatedProjectIds: [2, 4, 8],
  },

  {
    id: 7,
    slug: "zubair-export-line-hot-tapping",
    path: "/projects/zubair-export-line-hot-tapping",

    title: `36" Zubair Export Line Hot Tap`,
    description:
      "Specialized branch connection installed on a live 36-inch crude-oil export pipeline.",

    category: "Mechanical Equipment Installation",
    image: zubairCard,

    heroImage: zubairHero,
    heroTitle: `36" Zubair Export Line Hot Tap`,
    heroDescription:
      "A high-precision live pipeline connection completed safely without stopping export operations.",

    overview: [
      {
        label: "CLIENT",
        value: "Zubair Field Operator",
      },
      {
        label: "CONTRACTOR",
        value: "LSA",
      },
      {
        label: "LOCATION",
        value: "Zubair, Basra",
      },
      {
        label: "SPECIALIZATION",
        value: "Hot Tapping",
      },
      {
        label: "DURATION",
        value: "5 Months Completion",
      },
    ],

    scope: {
      title: "Detailed Scope of Work",

      paragraphs: [
        {
          text: `LSA completed a specialized 36-inch hot tapping operation on a live crude-oil export pipeline in the Zubair field.`,
          primary: true,
        },
        {
          text: `The scope included engineering assessment, ultrasonic inspection, fitting design, reinforcement welding, valve installation, hot tapping, branch connection, and final integrity testing.`,
        },
        {
          text: `The operation maintained continuous export flow while meeting strict safety, pressure-control, and environmental requirements.`,
        },
      ],

      highlights: [
        {
          id: 1,
          title: "Large Diameter Hot Tap",
          description:
            "Specialized equipment was used to complete the connection on a 36-inch export pipeline.",
        },
        {
          id: 2,
          title: "Continuous Export",
          description:
            "Export operations remained active throughout the complete intervention process.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        image: zubairGallery1,
        alt: "Hot tapping fitting preparation",
      },
      {
        id: 2,
        image: zubairGallery2,
        alt: "Hot tapping valve installation",
      },
      {
        id: 3,
        image: zubairGallery3,
        alt: "Live export pipeline intervention",
      },
      {
        id: 4,
        image: zubairGallery4,
        alt: "Completed branch connection",
      },
    ],

    relatedProjectIds: [1, 3, 5],
  },

  {
    id: 8,
    slug: "khor-al-zubair-tank-foundations",
    path: "/projects/khor-al-zubair-tank-foundations",

    title: "Khor Al Zubair Tank Foundations",
    description:
      "Construction of reinforced foundations and containment structures for industrial storage tanks.",

    category: "Tank Construction & Maintenance",
    image: khorAlZubairCard,

    heroImage: khorAlZubairHero,
    heroTitle: "Khor Al Zubair Tank Foundations",
    heroDescription:
      "Heavy civil construction supporting industrial tank storage and long-term facility operations.",

    overview: [
      {
        label: "CLIENT",
        value: "Khor Al Zubair Terminal",
      },
      {
        label: "CONTRACTOR",
        value: "LSA",
      },
      {
        label: "LOCATION",
        value: "Khor Al Zubair, Basra",
      },
      {
        label: "SPECIALIZATION",
        value: "Tank Foundations",
      },
      {
        label: "DURATION",
        value: "11 Months Completion",
      },
    ],

    scope: {
      title: "Detailed Scope of Work",

      paragraphs: [
        {
          text: `The project involved the construction of reinforced concrete foundations for large industrial storage tanks at Khor Al Zubair.`,
          primary: true,
        },
        {
          text: `The work included excavation, soil replacement, compaction, ring-wall reinforcement, concrete casting, drainage systems, containment walls, and final surface preparation.`,
        },
        {
          text: `Each foundation was constructed under detailed survey control to achieve the required level, alignment, and load-bearing performance.`,
        },
      ],

      highlights: [
        {
          id: 1,
          title: "Ring-Wall Foundations",
          description:
            "High-strength reinforced ring walls designed for large storage tank loads.",
        },
        {
          id: 2,
          title: "Secondary Containment",
          description:
            "Containment structures were built to improve operational and environmental safety.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        image: khorAlZubairGallery1,
        alt: "Tank foundation excavation",
      },
      {
        id: 2,
        image: khorAlZubairGallery2,
        alt: "Ring wall reinforcement",
      },
      {
        id: 3,
        image: khorAlZubairGallery3,
        alt: "Foundation concrete casting",
      },
      {
        id: 4,
        image: khorAlZubairGallery4,
        alt: "Completed storage tank foundation",
      },
    ],

    relatedProjectIds: [2, 4, 6],
  },
];

// ======================================================
// Categories
// ======================================================

export const projectCategories = [
  {
    label: "All Projects",
    value: "All Projects",
  },
  {
    label: "Mechanical Equipment Installation",
    value: "Mechanical Equipment Installation",
  },
  {
    label: "Tank Construction & Maintenance",
    value: "Tank Construction & Maintenance",
  },
  {
    label: "Hot Tapping & Stopple",
    value: "Hot Tapping & Stopple",
  },
  {
    label: "Pipeline Construction",
    value: "Pipeline Construction",
  },
] as const;

// ======================================================
// Helper Functions
// ======================================================

export const getProjectBySlug = (slug?: string) => {
  if (!slug) return undefined;

  return projectsData.find((project) => project.slug === slug);
};

export const getProjectById = (id: number) => {
  return projectsData.find((project) => project.id === id);
};

export const getRelatedProjects = (project: Project) => {
  return project.relatedProjectIds
    .map((projectId) => getProjectById(projectId))
    .filter((item): item is Project => Boolean(item));
};

export const getProjectsByCategory = (category: string) => {
  if (category === "All Projects") {
    return projectsData;
  }

  return projectsData.filter(
    (project) => project.category === category,
  );
};