import img1 from '../assets/Images/ourservices/pipeline.webp'
import img2 from '../assets/Images/ourservices/hot-tapping.webp'
import img3 from '../assets/Images/ourservices/structural.webp'
// import img4 from '../assets/Images/ourservices/'

import {
  Compass,
  Wrench,
  Flame,
  ShieldCheck,
} from "lucide-react";

export const servicesData2 = [
  {
    id: 1,
    slug: "pipeline-construction",
    title: "Pipeline Construction",
    description:
      "Expertise in the fabrication, laying, and testing of complex pipeline networks for oil, gas, and water distribution.",
    image: img1,
    path: "/services/pipeline-construction",
    reverse: false,

    features: [
      "Flowline Installation",
      "Trunklines & Export Lines",
      "Pipeline Rehabilitation",
    ],

    details: {
      heroImage: img1,
      heroTitle: "Pipeline Construction Services",
      heroDescription:
        "End-to-end pipeline construction solutions covering fabrication, installation, testing, and commissioning for oil, gas, and water networks.",

      processTitle: "The Pipeline Construction Process",
      processDescription:
        "A structured engineering workflow ensuring safe, accurate, and durable pipeline execution from planning to commissioning.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Route Survey",
          description:
            "Site inspection, route analysis, and technical assessment to define the safest and most efficient pipeline alignment.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Fabrication",
          description:
            "Pipe cutting, welding, coating, and preparation according to approved engineering standards.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Testing",
          description:
            "Hydrostatic testing, inspection, and quality verification before commissioning.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Commissioning",
          description:
            "Final tie-ins, operational readiness checks, and handover for active service.",
        },
      ],

      operationalRanges: {
        title: "Operational Ranges",
        description:
          "Our pipeline capabilities cover different terrains, pressure classes, and industrial operating conditions.",
        sideNotes: [
          "Oil & Gas Pipelines",
          "Water Transmission Lines",
          "Industrial Flowlines",
        ],
        tableHeaders: ["Parameter", "Standard Capacity", "Custom Engineered"],
        tableRows: [
          ["Pipe Sizes", '2" to 48"', 'Up to 60"'],
          ["Pressure Rating", "Up to ANSI 600", "Up to ANSI 900"],
          ["Materials", "Carbon Steel", "Stainless & Alloy Steel"],
          ["Applications", "Oil, Gas, Water", "Industrial Fluids"],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Pipeline Construction",
          title: "Export Pipeline Installation, Basra",
          description:
            "Executed pipeline installation works for critical oil export infrastructure.",
          image: img1,
        },
        {
          id: 2,
          category: "Pipeline Construction",
          title: "Flowline Construction Project",
          description:
            "Delivered field flowline construction with full testing and commissioning.",
          image: img1,
        },
        {
          id: 3,
          category: "Pipeline Construction",
          title: "Pipeline Rehabilitation Works",
          description:
            "Rehabilitated existing pipeline sections to improve reliability and safety.",
          image: img1,
        },
      ],
    },
  },

  {
    id: 2,
    slug: "hot-tapping-stopple",
    title: "Hot Tapping & Stopple",
    description:
      "Uninterrupted operations are critical. Our specialized hot tapping services allow tie-ins without halting production flow.",
    image: img2,
    path: "/services/hot-tapping-stopple",
    reverse: true,

    features: [
      "Live Pipeline Interventions",
      "Under-pressure Drilling",
      "Zero Downtime Maintenance",
    ],

    details: {
      heroImage: img2,
      heroTitle: "Hot Tapping & Stopple Services",
      heroDescription:
        "Uninterrupted operations are critical. Our specialized hot tapping services allow for modifications, maintenance, and tie-ins to existing piping systems without halting production flow.",

      processTitle: "The Hot Tapping Process",
      processDescription:
        "A meticulous, multi-stage engineering procedure designed to penetrate active pipelines without disrupting flow or compromising safety.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Planning & Assessment",
          description:
            "Comprehensive structural analysis, ultrasonic thickness testing, and metallurgical evaluation to determine optimal intervention points.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Machine Installation",
          description:
            "Welding of split tee or full encirclement fitting, followed by valve and hot tapping machine installation.",
        },
        {
          id: 3,
          icon: Flame,
          title: "Live Cutting",
          description:
            "Precision cutting through the pipe wall while maintaining system pressure and flow.",
        },
        {
          id: 4,
          icon: ShieldCheck,
          title: "Coupon Recovery",
          description:
            "Withdrawal of the cutter assembly along with the pipe coupon and final machine removal.",
        },
      ],

      operationalRanges: {
        title: "Operational Ranges",
        description:
          "Our equipment fleet is capable of handling extreme conditions across various pipeline media.",
        sideNotes: [
          "Crude Oil & Refined Products",
          "Natural Gas & NGLs",
          "Water & Specialized Fluids",
        ],
        tableHeaders: ["Parameter", "Standard Capacity", "Custom Engineered"],
        tableRows: [
          ["Pipe Sizes", '1/2" to 42"', 'Up to 60"'],
          ["Pressure Rating", "Up to 1480 psi", "Up to 2220 psi"],
          ["Temperature Range", "-20°C to +300°C", "-50°C to +400°C"],
          ["Line Materials", "Carbon Steel, Stainless", "Alloy, Concrete, Cast Iron"],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Hot Tapping & Stopple",
          title: "Live Line Intervention, Basra",
          description:
            "Executed a critical 36-inch hot tap on a live export line without interrupting production.",
          image: img2,
        },
        {
          id: 2,
          category: "Hot Tapping & Stopple",
          title: "Under-pressure Tie-in Project",
          description:
            "Completed tie-in works while maintaining continuous pipeline operation.",
          image: img2,
        },
        {
          id: 3,
          category: "Stopple",
          title: "Pipeline Isolation Works",
          description:
            "Performed safe isolation works for maintenance without system shutdown.",
          image: img2,
        },
      ],
    },
  },
  {
    id: 3,
    slug: "tank-construction-maintenance",
    title: "Tank Construction & Maintenance",
    description:
      "Engineering, fabrication, erection, and maintenance of atmospheric and pressurized storage tanks for oil, gas, and industrial facilities.",
    image: img3,
    path: "/services/tank-construction-maintenance",
    reverse: false,

    features: [
      "Storage Tank Construction",
      "Tank Rehabilitation",
      "Inspection & Maintenance",
    ],

    details: {
      heroImage: img3,
      heroTitle: "Tank Construction & Maintenance",
      heroDescription:
        "Complete storage tank solutions including fabrication, erection, inspection, repair, and long-term maintenance in accordance with international standards.",

      processTitle: "The Tank Construction Process",
      processDescription:
        "A systematic engineering approach ensuring structural integrity, safety, and long operational life.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Engineering & Design",
          description:
            "Site evaluation, foundation planning, and engineering calculations based on project requirements.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Fabrication",
          description:
            "Precision fabrication of tank shells, roofs, floors, and structural components.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Inspection & Testing",
          description:
            "Dimensional inspection, welding examination, hydrostatic testing, and quality assurance.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Commissioning",
          description:
            "Final inspections, coating verification, and operational handover.",
        },
      ],

      operationalRanges: {
        title: "Operational Ranges",
        description:
          "Construction and maintenance capabilities for tanks of various capacities and industrial applications.",

        sideNotes: [
          "Crude Oil Storage",
          "Water Storage Tanks",
          "Industrial Process Tanks",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Capacity",
          "Custom Engineered",
        ],

        tableRows: [
          ["Tank Capacity", "100–50,000 m³", "Up to 150,000 m³"],
          ["Tank Type", "API 650", "API 620 / Custom"],
          ["Materials", "Carbon Steel", "Stainless & Alloy Steel"],
          ["Applications", "Oil, Water", "Chemical & Industrial"],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Tank Construction & Maintenance",
          title: "Crude Oil Storage Tanks",
          description:
            "Construction of large-capacity crude oil storage facilities.",
          image: img2,
        },
        {
          id: 2,
          category: "Mechanical Equipment Installation",
          title: "Tank Rehabilitation",
          description:
            "Complete rehabilitation and structural reinforcement of aging storage tanks.",
          image: img2,
        },
        {
          id: 3,
          category: "Mechanical Equipment Installation",
          title: "Industrial Tank Inspection",
          description:
            "Inspection and testing services for operational storage facilities.",
          image: img2,
        },
      ],
    },
  },
  {
    id: 4,
    slug: "mechanical-equipment-installation",
    title: "Mechanical Equipment Installation",
    description:
      "Professional installation, alignment, and commissioning of rotating and static mechanical equipment for industrial facilities.",
    image: img3,
    path: "/services/mechanical-equipment-installation",
    reverse: true,

    features: [
      "Rotating Equipment",
      "Static Equipment",
      "Commissioning Support",
    ],

    details: {
      heroImage: img3,
      heroTitle: "Mechanical Equipment Installation",
      heroDescription:
        "Comprehensive mechanical installation services covering pumps, compressors, vessels, heat exchangers, and other critical industrial equipment.",

      processTitle: "The Installation Process",
      processDescription:
        "A controlled installation methodology ensuring precision, alignment, and operational reliability.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Site Preparation",
          description:
            "Equipment verification, foundation inspection, and installation planning.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Mechanical Installation",
          description:
            "Positioning, alignment, grouting, and assembly of mechanical equipment.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Inspection",
          description:
            "Dimensional checks, torque verification, and quality inspections.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Commissioning",
          description:
            "Functional testing, startup support, and performance verification.",
        },
      ],

      operationalRanges: {
        title: "Operational Ranges",
        description:
          "Mechanical installation capabilities for a wide range of industrial equipment and facilities.",

        sideNotes: [
          "Pumps & Compressors",
          "Pressure Vessels",
          "Heat Exchangers",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Capacity",
          "Custom Engineered",
        ],

        tableRows: [
          ["Equipment Weight", "Up to 50 Tons", "Up to 300 Tons"],
          ["Installation", "Indoor & Outdoor", "Hazardous Areas"],
          ["Alignment", "Laser Alignment", "High Precision Systems"],
          ["Industries", "Oil & Gas", "Power & Petrochemical"],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Mechanical Equipment Installation",
          title: "Pump Station Installation",
          description:
            "Installation and commissioning of high-capacity pumping systems.",
          image: img3,
        },
        {
          id: 2,
          category: "Mechanical Equipment Installation",
          title: "Compressor Package",
          description:
            "Mechanical installation and alignment of compressor units.",
          image: img3,
        },
        {
          id: 3,
          category: "Mechanical Equipment Installation",
          title: "Process Equipment Startup",
          description:
            "Commissioning support for critical process equipment.",
          image: img3,
        },
      ],
    },
  },
];