import img1 from "../assets/Images/fleet/fleet.webp";
import img2 from "../assets/Images/fleet/fleet-1.webp";
import img3 from "../assets/Images/fleet/fleet-2.webp";
import img4 from "../assets/Images/fleet/fleet-3.webp";
import img5 from "../assets/Images/fleet/fleet-4.webp";
import img6 from "../assets/Images/fleet/fleet-5.webp";

// الصور الجديدة
import img7 from "../assets/Images/fleet/fleet-1.webp";
import img8 from "../assets/Images/fleet/fleet-2.webp";
import img9 from "../assets/Images/fleet/fleet-3.webp";
import img10 from "../assets/Images/fleet/fleet-4.webp";

export type FleetCategory =
  | "pipeline"
  | "lifting"
  | "welding"
  | "logistics"
  | "hot-tapping"
  | "trust-boring"
  | "civil"
  | "inspection";

export interface FleetItem {
  id: number;
  image: string;
  title: string;
  quantity: string;
  available: string;
  capacityLabel?: string;
  capacity: string;
  location: string;
  description: string;
  categories: FleetCategory[];
}

export const fleetTabs: {
  label: string;
  value: "all" | FleetCategory;
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Pipeline",
    value: "pipeline",
  },
  {
    label: "Lifting",
    value: "lifting",
  },
  {
    label: "Welding",
    value: "welding",
  },
  {
    label: "Logistics",
    value: "logistics",
  },
  {
    label: "Hot Tapping",
    value: "hot-tapping",
  },
  {
    label: "Trust Boring",
    value: "trust-boring",
  },
  {
    label: "Civil Equipment",
    value: "civil",
  },
  {
    label: "Inspection Tools",
    value: "inspection",
  },
];

export const fleetData: FleetItem[] = [
  {
    id: 1,
    image: img1,
    title: "CAT 583 Side Boom",
    quantity: "08",
    available: "05",
    capacityLabel: "Capacity",
    capacity: "72,000 KG",
    location: "Basra Yard",
    categories: ["pipeline", "lifting"],
    description:
      "The CAT 583 Side Boom is engineered for demanding pipeline construction and heavy lifting operations. It provides exceptional stability, precise load control, and reliable performance in challenging field environments. This unit is suitable for pipe laying, lifting support, equipment positioning, and infrastructure projects that require dependable heavy-duty performance with safe field mobilization.",
  },
  {
    id: 2,
    image: img2,
    title: "50T Mobile Crane",
    quantity: "04",
    available: "03",
    capacityLabel: "Capacity",
    capacity: "50 Tons",
    location: "Basra Yard",
    categories: ["lifting", "logistics"],
    description:
      "Our 50-ton mobile crane is designed for efficient lifting operations across construction, industrial, and maintenance projects. It supports equipment installation, steel structure handling, loading operations, and site support tasks. With fast mobilization capability and reliable lifting performance, it is suitable for projects requiring safe and flexible crane support.",
  },
  {
    id: 3,
    image: img3,
    title: "Multi-Process Welders",
    quantity: "86",
    available: "64",
    capacityLabel: "Specs",
    capacity: "500A Diesel",
    location: "Central Yard",
    categories: ["welding", "pipeline"],
    description:
      "Heavy-duty diesel welding units built for continuous field operations and remote project environments. These welders are suitable for pipeline welding, structural steel fabrication, repair works, and construction site welding requirements. They provide reliable power output, strong performance, and dependable operation for demanding industrial welding activities.",
  },
  {
    id: 4,
    image: img4,
    title: "Hydraulic Rough Terrain Crane",
    quantity: "06",
    available: "04",
    capacityLabel: "Capacity",
    capacity: "35 Tons",
    location: "Basra Yard",
    categories: ["lifting"],
    description:
      "A hydraulic rough terrain crane designed for off-road construction and field lifting operations. Its maneuverability allows it to perform safely on uneven ground and demanding site conditions. This equipment is suitable for construction support, material handling, equipment placement, and lifting tasks where stable performance and field readiness are required.",
  },
  {
    id: 5,
    image: img5,
    title: "Logistics Transport Truck",
    quantity: "12",
    available: "09",
    capacityLabel: "Capacity",
    capacity: "40 Tons",
    location: "Basra Yard",
    categories: ["logistics", "pipeline"],
    description:
      "Heavy logistics transport trucks prepared for moving construction materials, pipes, steel structures, equipment, and project cargo. These trucks support short and long-distance transportation requirements with dependable operational efficiency. They are suitable for site-to-site movement, yard mobilization, and logistics support for large-scale engineering projects.",
  },
  {
    id: 6,
    image: img6,
    title: "Truck Mounted Crane",
    quantity: "10",
    available: "07",
    capacityLabel: "Capacity",
    capacity: "18 Tons",
    location: "Central Yard",
    categories: ["lifting", "logistics"],
    description:
      "A versatile truck-mounted crane combining transportation and lifting capability in one practical unit. It is suitable for maintenance works, material handling, light-to-medium lifting tasks, and rapid site mobilization. This equipment is ideal for projects that require flexible movement between different work locations with reliable lifting support.",
  },

  // Hot Tapping
  {
    id: 7,
    image: img7,
    title: "Hot Tapping Machine Set",
    quantity: "03",
    available: "03",
    capacityLabel: "Size Range",
    capacity: '½" – 42"',
    location: "LSA Yard",
    categories: ["hot-tapping", "pipeline"],
    description:
      "A complete range of hot tapping machines designed to create branch connections on live and pressurized pipelines without interrupting production. The available set includes TDW T-101, TDW T-760, and TDW TM 1200 MO-XL machines, covering pipeline sizes from half an inch up to 42 inches for manual, pneumatic, and hydraulic operations.",
  },

  // Trust Boring
  {
    id: 8,
    image: img8,
    title: "Trust Boring Machine",
    quantity: "03",
    available: "03",
    capacityLabel: "Size Range",
    capacity: '6" – 48"',
    location: "LSA Yard",
    categories: ["trust-boring", "pipeline", "civil"],
    description:
      "Trust boring machines equipped with a complete set of accessories for trenchless road-crossing operations. These machines support the installation of pipeline casing beneath roads and other obstacles while reducing surface disruption and maintaining safe and efficient construction activities.",
  },

  // Civil
  {
    id: 9,
    image: img9,
    title: "Hydraulic Excavator",
    quantity: "06",
    available: "06",
    capacityLabel: "Application",
    capacity: "Heavy Civil Works",
    location: "LSA Yard",
    categories: ["civil", "pipeline"],
    description:
      "Hydraulic excavators prepared for pipeline trench excavation, civil construction, site preparation, backfilling, foundation works, and material handling. These units are ready for field mobilization and support demanding oil and gas infrastructure projects in various ground conditions.",
  },

  // Inspection Tools
  {
    id: 10,
    image: img10,
    title: "Multi-Gas Detection Tools",
    quantity: "50",
    available: "50",
    capacityLabel: "Equipment",
    capacity: "H₂S & Multi-Gas",
    location: "LSA Yard",
    categories: ["inspection"],
    description:
      "A collection of inspection and gas-detection instruments used to monitor hazardous atmospheres and support safe field operations. The equipment includes area gas monitors, portable multi-gas detectors, and personal H₂S detectors suitable for pipelines, confined spaces, construction sites, and oil and gas facilities.",
  },
];