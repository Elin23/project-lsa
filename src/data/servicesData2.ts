import epcImg from "../assets/Images/ourservices/epc-projects.jpg";
import pipelineImg from "../assets/Images/ourservices/pipeline-services.webp";
import processPipingImg from "../assets/Images/ourservices/process-piping.webp";
import hotTappingImg from "../assets/Images/ourservices/hot-tapping.jpg";
import integrityImg from "../assets/Images/ourservices/pipeline-integrity.webp";
import storageTankImg from "../assets/Images/ourservices/storage-tanks.jpg";
import mechanicalImg from "../assets/Images/ourservices/mechanical-works.webp";
import cpImg from "../assets/Images/ourservices/cathodic-protection.webp";
import civilImg from "../assets/Images/ourservices/civil-works.webp";
import eiImg from "../assets/Images/ourservices/electrical-instrumentation.jpg";
import hddImg from "../assets/Images/ourservices/hdd-crossing.jpg";

import {
  Compass,
  Wrench,
  Flame,
  ShieldCheck,
} from "lucide-react";

export const servicesData2 = [
  {
    id: 1,
    slug: "epc-projects",
    title: "EPC Projects",
    description:
      "Comprehensive Engineering, Procurement, and Construction (EPC) solutions delivering complex oil, gas, energy, and industrial infrastructure projects from concept through commissioning.",
    image: epcImg,
    path: "/services/epc-projects",
    reverse: false,

    features: [
      "Engineering & Design",
      "Procurement Management",
      "Construction & Commissioning",
    ],

    details: {
      heroImage: epcImg,
      heroTitle: "EPC Projects",
      heroDescription:
        "Delivering integrated EPC solutions with complete project management, engineering excellence, procurement efficiency, construction execution, and safe commissioning for large-scale industrial facilities.",

      processTitle: "Our EPC Delivery Process",
      processDescription:
        "Every EPC project follows a structured execution methodology that ensures safety, quality, schedule compliance, and cost efficiency from concept to final handover.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Engineering",
          description:
            "Front-end engineering, detailed design, technical studies, and multidisciplinary planning tailored to project requirements.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Procurement",
          description:
            "Global sourcing, material procurement, logistics coordination, vendor management, and quality assurance for all project equipment.",
        },
        {
          id: 3,
          icon: Flame,
          title: "Construction",
          description:
            "Civil, mechanical, piping, electrical, and instrumentation works executed according to international standards and project specifications.",
        },
        {
          id: 4,
          icon: ShieldCheck,
          title: "Commissioning",
          description:
            "Testing, pre-commissioning, system verification, startup assistance, and final project handover with complete documentation.",
        },
      ],

      operationalRanges: {
        title: "Project Capabilities",
        description:
          "Integrated EPC services covering upstream, midstream, downstream, power generation, and industrial infrastructure developments.",

        sideNotes: [
          "Oil & Gas Facilities",
          "Energy Infrastructure",
          "Industrial Plants",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Scope",
          "Extended Capability",
        ],

        tableRows: [
          ["Project Type", "Brownfield", "Greenfield"],
          ["Engineering", "FEED & Detailed", "Complete EPC"],
          ["Construction", "Single Discipline", "Multi-Discipline"],
          ["Industries", "Oil & Gas", "Power & Petrochemical"],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "EPC",
          title: "Oil Processing Facility Development",
          description:
            "Complete engineering, procurement, construction, and commissioning of a new oil processing facility.",
          image: epcImg,
        },
        {
          id: 2,
          category: "EPC",
          title: "Gas Compression Station",
          description:
            "Integrated EPC execution for gas compression infrastructure including mechanical and electrical systems.",
          image: epcImg,
        },
        {
          id: 3,
          category: "EPC",
          title: "Industrial Utility Upgrade",
          description:
            "Engineering-led modernization of utility systems for enhanced operational reliability.",
          image: epcImg,
        },
      ],
    },
  },

  {
    id: 2,
    slug: "pipeline-services",
    title: "Pipeline Services",
    description:
      "Complete pipeline solutions including construction, maintenance, rehabilitation, testing, commissioning, and operational support for oil, gas, and water transmission systems.",
    image: pipelineImg,
    path: "/services/pipeline-services",
    reverse: true,

    features: [
      "Pipeline Construction",
      "Pipeline Rehabilitation",
      "Testing & Commissioning",
    ],

    details: {
      heroImage: pipelineImg,
      heroTitle: "Pipeline Services",
      heroDescription:
        "Reliable pipeline engineering services covering fabrication, installation, maintenance, inspection, rehabilitation, and commissioning across a wide range of pipeline systems.",

      processTitle: "Pipeline Service Workflow",
      processDescription:
        "Every pipeline project follows internationally recognized engineering procedures to ensure long-term reliability and operational safety.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Survey & Planning",
          description:
            "Route surveys, engineering assessments, alignment studies, and construction planning.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Installation",
          description:
            "Pipe laying, welding, coating, lowering, tie-ins, and associated mechanical works.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Inspection & Testing",
          description:
            "NDT inspection, hydrostatic testing, dimensional verification, and quality assurance.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Commissioning",
          description:
            "System cleaning, pigging, pressure verification, startup support, and operational handover.",
        },
      ],

      operationalRanges: {
        title: "Operational Capabilities",
        description:
          "Pipeline execution capabilities for onshore industrial facilities and cross-country transmission networks.",

        sideNotes: [
          "Oil Transmission",
          "Gas Pipelines",
          "Water Networks",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Capacity",
          "Custom Engineered",
        ],

        tableRows: [
          ['Pipe Size', '2"–48"', 'Up to 60"'],
          ["Pressure Class", "ANSI 150–600", "Up to ANSI 900"],
          ["Materials", "Carbon Steel", "Stainless & Alloy Steel"],
          ["Services", "Construction", "Maintenance & Rehabilitation"],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Pipeline",
          title: "Crude Oil Pipeline Construction",
          description:
            "Construction of long-distance crude oil transportation pipelines.",
          image: pipelineImg,
        },
        {
          id: 2,
          category: "Pipeline",
          title: "Pipeline Rehabilitation",
          description:
            "Integrity restoration and rehabilitation of aging pipeline infrastructure.",
          image: pipelineImg,
        },
        {
          id: 3,
          category: "Pipeline",
          title: "Transmission Line Expansion",
          description:
            "Pipeline expansion works supporting increased production capacity.",
          image: pipelineImg,
        },
      ],
    },
  },

  {
    id: 3,
    slug: "process-piping",
    title: "Process Piping",
    description:
      "Engineering, fabrication, installation, and testing of process piping systems for refineries, production facilities, petrochemical plants, and industrial complexes.",
    image: processPipingImg,
    path: "/services/process-piping",
    reverse: false,

    features: [
      "Piping Fabrication",
      "Field Installation",
      "Testing & Commissioning",
    ],

    details: {
      heroImage: processPipingImg,
      heroTitle: "Process Piping",
      heroDescription:
        "High-quality process piping services designed to deliver safe, efficient, and reliable fluid transportation systems within industrial facilities.",

      processTitle: "Process Piping Execution",
      processDescription:
        "A disciplined construction sequence ensuring fabrication accuracy, installation quality, and operational reliability.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Engineering Review",
          description:
            "P&ID verification, isometric review, material take-off, and construction planning.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Fabrication",
          description:
            "Shop fabrication, spool preparation, welding, and dimensional verification according to approved procedures.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Inspection",
          description:
            "NDT examinations, pressure testing, flushing, cleaning, and quality inspections.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Commissioning",
          description:
            "System startup support, leak testing, performance verification, and final handover.",
        },
      ],

      operationalRanges: {
        title: "Operational Capabilities",
        description:
          "Complete process piping solutions supporting oil, gas, petrochemical, and industrial process facilities.",

        sideNotes: [
          "Refineries",
          "Gas Processing Plants",
          "Industrial Facilities",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Capacity",
          "Custom Engineered",
        ],

        tableRows: [
          ['Pipe Size', '½"–36"', 'Up to 48"'],
          ["Materials", "Carbon Steel", "Stainless & Alloy Steel"],
          ["Pressure", "ANSI 150–600", "Higher Ratings"],
          ["Applications", "Process Systems", "Critical Process Units"],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Process Piping",
          title: "Refinery Process Piping",
          description:
            "Fabrication and installation of refinery process piping systems.",
          image: processPipingImg,
        },
        {
          id: 2,
          category: "Process Piping",
          title: "Gas Processing Plant",
          description:
            "Construction of process piping networks supporting gas treatment operations.",
          image: processPipingImg,
        },
        {
          id: 3,
          category: "Process Piping",
          title: "Production Facility Upgrade",
          description:
            "Expansion and modification of process piping systems during plant upgrades.",
          image: processPipingImg,
        },
      ],
    },
  },

    {
    id: 4,
    slug: "hot-tapping",
    title: "Hot Tapping",
    description:
      "Specialized hot tapping and line intervention services enabling safe pipeline modifications, branch connections, and maintenance activities without interrupting production.",
    image: hotTappingImg,
    path: "/services/hot-tapping",
    reverse: true,

    features: [
      "Live Pipeline Tie-ins",
      "Under-pressure Drilling",
      "Zero Shutdown Intervention",
    ],

    details: {
      heroImage: hotTappingImg,
      heroTitle: "Hot Tapping Services",
      heroDescription:
        "Safe and controlled hot tapping solutions for creating new pipeline connections, installing branches, and performing modifications while the system remains operational and under pressure.",

      processTitle: "The Hot Tapping Process",
      processDescription:
        "A carefully controlled engineering procedure designed to safely access live pipelines without stopping production or compromising system integrity.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Technical Assessment",
          description:
            "Pipeline operating conditions, wall thickness, material specifications, pressure, temperature, and intervention location are reviewed before execution.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Fitting Installation",
          description:
            "A split tee, branch fitting, or full-encirclement fitting is installed and welded onto the existing live pipeline.",
        },
        {
          id: 3,
          icon: Flame,
          title: "Live Line Cutting",
          description:
            "The hot tapping machine performs a controlled cut through the pipeline wall while maintaining normal system pressure and flow.",
        },
        {
          id: 4,
          icon: ShieldCheck,
          title: "Completion & Verification",
          description:
            "The pipe coupon is recovered, the valve is closed, the tapping machine is removed, and the completed connection is inspected and verified.",
        },
      ],

      operationalRanges: {
        title: "Operational Ranges",
        description:
          "Our hot tapping capabilities support a wide range of pipe sizes, operating pressures, temperatures, materials, and pipeline products.",

        sideNotes: [
          "Crude Oil Pipelines",
          "Natural Gas Systems",
          "Water & Process Lines",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Capacity",
          "Custom Engineered",
        ],

        tableRows: [
          ["Pipe Sizes", '1/2" to 42"', 'Up to 60"'],
          ["Pressure Rating", "Up to 1,480 psi", "Up to 2,220 psi"],
          ["Temperature Range", "-20°C to +300°C", "-50°C to +400°C"],
          [
            "Pipe Materials",
            "Carbon & Stainless Steel",
            "Alloy, Cast Iron & Specialized Materials",
          ],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Hot Tapping",
          title: "Live Export Pipeline Connection",
          description:
            "Executed a hot tapping connection on an operational crude oil export pipeline without interrupting production.",
          image: hotTappingImg,
        },
        {
          id: 2,
          category: "Hot Tapping",
          title: "Under-pressure Branch Installation",
          description:
            "Installed a new pipeline branch connection while maintaining continuous flow and normal operating pressure.",
          image: hotTappingImg,
        },
        {
          id: 3,
          category: "Hot Tapping",
          title: "Live Process Line Modification",
          description:
            "Completed process line modifications within an operating facility using controlled hot tapping procedures.",
          image: hotTappingImg,
        },
      ],
    },
  },

  {
    id: 5,
    slug: "pipeline-integrity",
    title: "Pipeline Integrity",
    description:
      "Comprehensive pipeline integrity solutions covering inspection, condition assessment, corrosion monitoring, repair, rehabilitation, and life-extension programs.",
    image: integrityImg,
    path: "/services/pipeline-integrity",
    reverse: false,

    features: [
      "Integrity Assessment",
      "Corrosion Monitoring",
      "Repair & Rehabilitation",
    ],

    details: {
      heroImage: integrityImg,
      heroTitle: "Pipeline Integrity Services",
      heroDescription:
        "Protecting critical pipeline infrastructure through inspection, assessment, corrosion control, defect evaluation, repair planning, and long-term integrity management.",

      processTitle: "Pipeline Integrity Management",
      processDescription:
        "A systematic integrity management process designed to identify threats, evaluate pipeline condition, reduce operational risks, and extend asset service life.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Data Collection",
          description:
            "Pipeline design records, operational history, inspection reports, corrosion data, and previous maintenance information are collected and reviewed.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Inspection & Assessment",
          description:
            "Visual inspection, ultrasonic testing, non-destructive examination, coating surveys, and defect assessments are performed.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Integrity Evaluation",
          description:
            "Detected anomalies are evaluated according to approved engineering standards to determine their severity and remaining strength.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Repair & Monitoring",
          description:
            "Repair solutions are implemented and ongoing monitoring programs are established to maintain pipeline safety and reliability.",
        },
      ],

      operationalRanges: {
        title: "Integrity Capabilities",
        description:
          "Integrated integrity services for gathering lines, flowlines, transmission pipelines, process piping, and associated pipeline facilities.",

        sideNotes: [
          "Inspection & Assessment",
          "Corrosion Management",
          "Pipeline Life Extension",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Service",
          "Advanced Capability",
        ],

        tableRows: [
          [
            "Inspection",
            "Visual & Ultrasonic Testing",
            "Advanced NDT Assessment",
          ],
          [
            "Corrosion Survey",
            "External Condition Survey",
            "ECDA & Specialized Surveys",
          ],
          [
            "Repair Methods",
            "Clamps & Composite Repairs",
            "Engineered Section Replacement",
          ],
          [
            "Applications",
            "Onshore Pipelines",
            "Critical High-pressure Systems",
          ],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Pipeline Integrity",
          title: "Transmission Pipeline Integrity Assessment",
          description:
            "Completed a detailed condition assessment and integrity evaluation of an operational transmission pipeline.",
          image: integrityImg,
        },
        {
          id: 2,
          category: "Pipeline Integrity",
          title: "Corrosion Monitoring Program",
          description:
            "Implemented corrosion monitoring and inspection activities for an aging crude oil pipeline network.",
          image: integrityImg,
        },
        {
          id: 3,
          category: "Pipeline Rehabilitation",
          title: "Pipeline Defect Repair",
          description:
            "Repaired identified pipeline defects using engineered clamps, composite reinforcement, and controlled section replacement.",
          image: integrityImg,
        },
      ],
    },
  },

    {
    id: 6,
    slug: "storage-tanks",
    title: "Storage Tanks",
    description:
      "Complete engineering, fabrication, erection, inspection, repair, and maintenance services for atmospheric and pressurized storage tanks used across oil, gas, water, and industrial facilities.",
    image: storageTankImg,
    path: "/services/storage-tanks",
    reverse: true,

    features: [
      "Tank Construction",
      "Tank Rehabilitation",
      "Inspection & Maintenance",
    ],

    details: {
      heroImage: storageTankImg,
      heroTitle: "Storage Tank Services",
      heroDescription:
        "Integrated storage tank solutions covering design support, fabrication, erection, structural repair, inspection, testing, coating, and long-term maintenance for critical industrial assets.",

      processTitle: "The Storage Tank Execution Process",
      processDescription:
        "A controlled engineering and construction workflow designed to ensure structural integrity, operational safety, product containment, and extended service life.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Engineering & Assessment",
          description:
            "Tank requirements, site conditions, foundation status, design criteria, capacity, stored product, and applicable standards are reviewed before execution.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Fabrication & Erection",
          description:
            "Tank bottom plates, shell courses, roof structures, nozzles, stairways, platforms, and accessories are fabricated and assembled according to approved drawings.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Inspection & Testing",
          description:
            "Weld inspections, dimensional checks, vacuum box testing, non-destructive examination, hydrostatic testing, and settlement monitoring are performed.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Coating & Commissioning",
          description:
            "Surface preparation, internal lining, external coating, final inspection, system verification, and operational handover are completed.",
        },
      ],

      operationalRanges: {
        title: "Storage Tank Capabilities",
        description:
          "Construction and maintenance services for storage tanks of various capacities, materials, configurations, and industrial applications.",

        sideNotes: [
          "Crude Oil Storage",
          "Water Storage Systems",
          "Industrial Process Tanks",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Capacity",
          "Custom Engineered",
        ],

        tableRows: [
          ["Tank Capacity", "100 to 50,000 m³", "Up to 150,000 m³"],
          ["Tank Standard", "API 650", "API 620 & Custom Design"],
          [
            "Tank Type",
            "Fixed Roof & Open Top",
            "Floating Roof & Pressurized",
          ],
          [
            "Materials",
            "Carbon Steel",
            "Stainless Steel & Specialized Alloys",
          ],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Storage Tanks",
          title: "Crude Oil Storage Tank Construction",
          description:
            "Constructed large-capacity crude oil storage tanks including foundations, shell erection, roofing, piping connections, testing, and commissioning.",
          image: storageTankImg,
        },
        {
          id: 2,
          category: "Storage Tanks",
          title: "Tank Rehabilitation & Bottom Replacement",
          description:
            "Completed tank rehabilitation works including bottom plate replacement, shell repairs, structural reinforcement, and coating renewal.",
          image: storageTankImg,
        },
        {
          id: 3,
          category: "Storage Tank Maintenance",
          title: "Operational Tank Inspection Program",
          description:
            "Performed inspection, thickness measurement, weld examination, settlement evaluation, and maintenance planning for operational storage tanks.",
          image: storageTankImg,
        },
      ],
    },
  },

    {
    id: 7,
    slug: "mechanical-works",
    title: "Mechanical Works",
    description:
      "Comprehensive mechanical construction, installation, maintenance, alignment, and commissioning services for rotating equipment, static equipment, piping systems, and industrial facilities.",
    image: mechanicalImg,
    path: "/services/mechanical-works",
    reverse: false,

    features: [
      "Equipment Installation",
      "Mechanical Maintenance",
      "Alignment & Commissioning",
    ],

    details: {
      heroImage: mechanicalImg,
      heroTitle: "Mechanical Works",
      heroDescription:
        "Integrated mechanical services covering equipment installation, structural assembly, maintenance, repair, alignment, testing, and commissioning for oil, gas, petrochemical, power, and industrial facilities.",

      processTitle: "The Mechanical Works Process",
      processDescription:
        "A controlled execution methodology that ensures safe installation, accurate alignment, mechanical integrity, and reliable equipment performance.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Site Assessment",
          description:
            "Project drawings, equipment specifications, foundations, access requirements, lifting plans, and installation conditions are reviewed before execution.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Installation & Assembly",
          description:
            "Mechanical equipment, skids, vessels, pumps, compressors, exchangers, pipe supports, and structural components are positioned and assembled.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Alignment & Inspection",
          description:
            "Equipment levels, shaft alignment, flange alignment, bolt torque, clearances, dimensions, and installation quality are inspected and verified.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Testing & Commissioning",
          description:
            "Functional testing, lubrication checks, rotation verification, startup assistance, performance monitoring, and final handover are completed.",
        },
      ],

      operationalRanges: {
        title: "Mechanical Work Capabilities",
        description:
          "Mechanical installation and maintenance services for a wide range of static, rotating, packaged, and process equipment.",

        sideNotes: [
          "Rotating Equipment",
          "Static Equipment",
          "Industrial Maintenance",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Capability",
          "Custom Engineered",
        ],

        tableRows: [
          [
            "Equipment Types",
            "Pumps, Motors & Compressors",
            "Turbines & Packaged Units",
          ],
          [
            "Static Equipment",
            "Vessels & Heat Exchangers",
            "Columns & Specialized Units",
          ],
          [
            "Equipment Weight",
            "Up to 50 Tons",
            "Up to 300 Tons",
          ],
          [
            "Alignment Method",
            "Dial & Laser Alignment",
            "High-precision Alignment",
          ],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Mechanical Works",
          title: "Pump Station Mechanical Installation",
          description:
            "Installed and commissioned high-capacity pumps, motors, associated piping, valves, and mechanical support systems.",
          image: mechanicalImg,
        },
        {
          id: 2,
          category: "Mechanical Works",
          title: "Compressor Package Installation",
          description:
            "Completed positioning, assembly, precision alignment, piping connections, testing, and startup support for compressor packages.",
          image: mechanicalImg,
        },
        {
          id: 3,
          category: "Mechanical Maintenance",
          title: "Industrial Equipment Overhaul",
          description:
            "Performed inspection, dismantling, repair, replacement, reassembly, alignment, and functional testing of critical mechanical equipment.",
          image: mechanicalImg,
        },
      ],
    },
  },

    {
    id: 8,
    slug: "cathodic-protection",
    title: "Cathodic Protection",
    description:
      "Engineering, installation, testing, and maintenance of cathodic protection systems designed to prevent corrosion and extend the operational life of buried and submerged metallic assets.",
    image: cpImg,
    path: "/services/cathodic-protection",
    reverse: true,

    features: [
      "CP System Design",
      "Installation & Testing",
      "Monitoring & Maintenance",
    ],

    details: {
      heroImage: cpImg,
      heroTitle: "Cathodic Protection Services",
      heroDescription:
        "Complete cathodic protection solutions for pipelines, storage tanks, wellheads, offshore structures, and industrial facilities to minimize corrosion risks and maximize asset reliability.",

      processTitle: "Cathodic Protection Execution Process",
      processDescription:
        "A systematic engineering approach that evaluates corrosion risks, designs effective protection systems, verifies performance, and provides continuous monitoring throughout the asset lifecycle.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Corrosion Assessment",
          description:
            "Site surveys, soil resistivity measurements, coating condition evaluation, and corrosion risk assessments are conducted to determine the most suitable protection strategy.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "System Installation",
          description:
            "Installation of sacrificial anodes or impressed current systems, transformer rectifiers, junction boxes, cables, and associated monitoring equipment.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Testing & Commissioning",
          description:
            "Pipe-to-soil potential measurements, continuity testing, current output verification, commissioning, and compliance checks according to international standards.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Monitoring & Maintenance",
          description:
            "Routine inspections, performance monitoring, system adjustments, preventive maintenance, and reporting ensure long-term corrosion protection.",
        },
      ],

      operationalRanges: {
        title: "Cathodic Protection Capabilities",
        description:
          "Cathodic protection services covering buried pipelines, storage tanks, marine structures, and industrial facilities across a wide range of operating environments.",

        sideNotes: [
          "Buried Pipelines",
          "Storage Tanks",
          "Industrial Facilities",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Service",
          "Advanced Capability",
        ],

        tableRows: [
          [
            "Protection Method",
            "Sacrificial Anode",
            "Impressed Current (ICCP)",
          ],
          [
            "Structures",
            "Pipelines & Tanks",
            "Marine & Offshore Assets",
          ],
          [
            "Testing",
            "Potential Surveys",
            "Complete CP Audits",
          ],
          [
            "Monitoring",
            "Periodic Inspection",
            "Continuous Monitoring Systems",
          ],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Cathodic Protection",
          title: "Pipeline Cathodic Protection System",
          description:
            "Designed, installed, and commissioned an impressed current cathodic protection system for a crude oil transmission pipeline.",
          image: cpImg,
        },
        {
          id: 2,
          category: "Cathodic Protection",
          title: "Tank Farm Corrosion Protection",
          description:
            "Installed sacrificial anode systems for aboveground and underground storage tank facilities.",
          image: cpImg,
        },
        {
          id: 3,
          category: "Corrosion Control",
          title: "Pipeline CP Monitoring Program",
          description:
            "Implemented routine inspection, monitoring, and performance optimization of cathodic protection systems across multiple pipeline assets.",
          image: cpImg,
        },
      ],
    },
  },

    {
    id: 9,
    slug: "civil-works",
    title: "Civil Works",
    description:
      "Comprehensive civil construction services covering site development, foundations, concrete works, roads, drainage systems, buildings, and infrastructure for oil, gas, and industrial projects.",
    image: civilImg,
    path: "/services/civil-works",
    reverse: false,

    features: [
      "Site Development",
      "Concrete & Foundations",
      "Industrial Infrastructure",
    ],

    details: {
      heroImage: civilImg,
      heroTitle: "Civil Works",
      heroDescription:
        "Integrated civil engineering and construction solutions supporting oilfields, process facilities, tank farms, pipeline corridors, substations, and industrial infrastructure developments.",

      processTitle: "The Civil Works Execution Process",
      processDescription:
        "A structured construction workflow that ensures accurate site preparation, strong foundations, reliable infrastructure, and full compliance with project specifications.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Survey & Site Preparation",
          description:
            "Topographic surveys, soil assessment, site clearing, grading, excavation, compaction, and construction layout are completed before structural works begin.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Foundation Construction",
          description:
            "Construction of reinforced concrete foundations, equipment bases, pipe supports, structural footings, and underground concrete structures.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Infrastructure Works",
          description:
            "Roads, drainage networks, culverts, trenches, paving, fencing, utility corridors, and associated site infrastructure are installed.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Inspection & Handover",
          description:
            "Concrete testing, compaction verification, dimensional inspection, finishing works, documentation, and final project handover are completed.",
        },
      ],

      operationalRanges: {
        title: "Civil Construction Capabilities",
        description:
          "Civil works capabilities for greenfield developments, brownfield modifications, pipeline facilities, industrial plants, and energy infrastructure.",

        sideNotes: [
          "Industrial Foundations",
          "Roads & Drainage",
          "Buildings & Infrastructure",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Capability",
          "Custom Engineered",
        ],

        tableRows: [
          [
            "Earthworks",
            "Excavation & Backfilling",
            "Large-scale Site Development",
          ],
          [
            "Concrete Works",
            "Foundations & Slabs",
            "Heavy Equipment Foundations",
          ],
          [
            "Infrastructure",
            "Roads & Drainage",
            "Industrial Utility Networks",
          ],
          [
            "Structures",
            "Service Buildings",
            "Control Rooms & Specialized Facilities",
          ],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Civil Works",
          title: "Oilfield Site Development",
          description:
            "Completed earthworks, grading, drainage, road construction, fencing, and civil infrastructure for a new oilfield facility.",
          image: civilImg,
        },
        {
          id: 2,
          category: "Civil Works",
          title: "Equipment Foundation Construction",
          description:
            "Constructed reinforced concrete foundations and structural bases for pumps, vessels, compressors, and packaged equipment.",
          image: civilImg,
        },
        {
          id: 3,
          category: "Civil Infrastructure",
          title: "Industrial Road & Drainage Network",
          description:
            "Delivered internal roads, culverts, stormwater drainage, paving, and associated infrastructure for an operational industrial site.",
          image: civilImg,
        },
      ],
    },
  },

    {
    id: 10,
    slug: "electrical-instrumentation",
    title: "Electrical & Instrumentation",
    description:
      "Complete electrical and instrumentation solutions including power distribution, control systems, field instrumentation, cable installation, testing, commissioning, and maintenance for industrial facilities.",
    image: eiImg,
    path: "/services/electrical-instrumentation",
    reverse: true,

    features: [
      "Electrical Installation",
      "Instrumentation Systems",
      "Testing & Commissioning",
    ],

    details: {
      heroImage: eiImg,
      heroTitle: "Electrical & Instrumentation",
      heroDescription:
        "Integrated electrical and instrumentation services supporting oil & gas facilities, refineries, power plants, tank farms, and industrial complexes through reliable installation, calibration, testing, and commissioning.",

      processTitle: "Electrical & Instrumentation Execution Process",
      processDescription:
        "Our multidisciplinary approach ensures every electrical and instrumentation system is installed, calibrated, tested, and commissioned safely while meeting international engineering standards.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Engineering Review",
          description:
            "Construction drawings, cable schedules, instrument indexes, loop diagrams, panel layouts, and system architecture are reviewed before execution.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Installation",
          description:
            "Installation of power cables, cable trays, junction boxes, control panels, field instruments, lighting systems, earthing networks, and associated electrical equipment.",
        },
        {
          id: 3,
          icon: ShieldCheck,
          title: "Calibration & Testing",
          description:
            "Loop checking, continuity testing, insulation resistance testing, instrument calibration, functional verification, and quality inspections are performed.",
        },
        {
          id: 4,
          icon: Flame,
          title: "Commissioning",
          description:
            "System energization, control logic verification, startup support, performance testing, and final commissioning are completed before operational handover.",
        },
      ],

      operationalRanges: {
        title: "Electrical & Instrumentation Capabilities",
        description:
          "Complete electrical and instrumentation services supporting process plants, pipelines, tank farms, pumping stations, substations, and industrial facilities.",

        sideNotes: [
          "Power Distribution",
          "Control Systems",
          "Industrial Automation",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Capability",
          "Advanced Capability",
        ],

        tableRows: [
          [
            "Electrical Systems",
            "LV & MV Installation",
            "Complete Power Distribution",
          ],
          [
            "Instrumentation",
            "Field Instruments",
            "Integrated Process Control Systems",
          ],
          [
            "Testing",
            "Loop & Functional Tests",
            "SAT & Commissioning",
          ],
          [
            "Applications",
            "Industrial Facilities",
            "Oil, Gas & Petrochemical Plants",
          ],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Electrical & Instrumentation",
          title: "Process Plant Electrical Installation",
          description:
            "Installed power distribution systems, cable networks, MCC panels, lighting, and grounding systems for a major process facility.",
          image: eiImg,
        },
        {
          id: 2,
          category: "Instrumentation",
          title: "Field Instrumentation & Control",
          description:
            "Installed and calibrated pressure, temperature, flow, and level instruments integrated with plant control systems.",
          image: eiImg,
        },
        {
          id: 3,
          category: "Commissioning",
          title: "Control System Startup",
          description:
            "Completed loop checking, calibration, functional testing, and commissioning support for a newly constructed industrial plant.",
          image: eiImg,
        },
      ],
    },
  },

    {
    id: 11,
    slug: "auger-boring-hdd-crossing",
    title: "Auger Boring & HDD Crossing",
    description:
      "Specialized trenchless crossing solutions using auger boring and horizontal directional drilling for the safe installation of pipelines and utilities beneath roads, railways, rivers, and sensitive areas.",
    image: hddImg,
    path: "/services/auger-boring-hdd-crossing",
    reverse: false,

    features: [
      "Auger Boring",
      "Horizontal Directional Drilling",
      "Road & Utility Crossings",
    ],

    details: {
      heroImage: hddImg,
      heroTitle: "Auger Boring & HDD Crossing",
      heroDescription:
        "Reliable trenchless installation services for pipelines, conduits, and utility systems beneath roads, railways, waterways, and existing infrastructure with minimal surface disruption.",

      processTitle: "The Trenchless Crossing Process",
      processDescription:
        "A carefully planned execution methodology combining engineering surveys, accurate drilling, controlled installation, and final verification to deliver safe and precise crossings.",

      process: [
        {
          id: 1,
          icon: Compass,
          title: "Survey & Crossing Design",
          description:
            "Topographic surveys, utility detection, geotechnical assessment, bore profile design, entry and exit point planning, and crossing risk evaluation are completed before execution.",
        },
        {
          id: 2,
          icon: Wrench,
          title: "Pilot Bore & Excavation",
          description:
            "For HDD works, a guided pilot bore is drilled along the approved profile, while auger boring projects begin with the preparation of launching and receiving pits.",
        },
        {
          id: 3,
          icon: Flame,
          title: "Bore Enlargement & Installation",
          description:
            "The bore is enlarged through controlled reaming, after which the carrier pipe, casing, or utility conduit is installed through the completed crossing path.",
        },
        {
          id: 4,
          icon: ShieldCheck,
          title: "Testing & Reinstatement",
          description:
            "Alignment, depth, weld quality, coating condition, pressure integrity, and installation records are verified before pit backfilling and final site reinstatement.",
        },
      ],

      operationalRanges: {
        title: "Crossing Capabilities",
        description:
          "Trenchless crossing solutions for pipelines and utilities across roads, railways, canals, rivers, congested corridors, and environmentally sensitive locations.",

        sideNotes: [
          "Road & Railway Crossings",
          "River & Canal Crossings",
          "Utility Corridor Installation",
        ],

        tableHeaders: [
          "Parameter",
          "Standard Capability",
          "Custom Engineered",
        ],

        tableRows: [
          [
            "Crossing Method",
            "Auger Boring",
            "Horizontal Directional Drilling",
          ],
          [
            "Pipe Diameter",
            '6" to 36"',
            'Up to 48" and Above',
          ],
          [
            "Crossing Length",
            "Up to 150 m",
            "Long-distance Engineered Crossings",
          ],
          [
            "Applications",
            "Roads & Railways",
            "Rivers, Canals & Sensitive Areas",
          ],
        ],
      },

      relatedProjects: [
        {
          id: 1,
          category: "Auger Boring",
          title: "Highway Pipeline Crossing",
          description:
            "Installed a steel pipeline casing beneath a major highway using controlled auger boring without interrupting traffic.",
          image: hddImg,
        },
        {
          id: 2,
          category: "Horizontal Directional Drilling",
          title: "River Crossing Installation",
          description:
            "Completed a long-distance HDD crossing beneath a river for the installation of a critical oil transmission pipeline.",
          image: hddImg,
        },
        {
          id: 3,
          category: "Trenchless Crossing",
          title: "Railway Utility Crossing",
          description:
            "Executed a trenchless utility crossing beneath an operational railway while maintaining infrastructure safety and service continuity.",
          image: hddImg,
        },
      ],
    },
  },
];