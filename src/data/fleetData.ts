export type FleetCategory = "pipeline" | "lifting" | "welding" | "logistics";

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

export const fleetTabs: { label: string; value: "all" | FleetCategory }[] = [
  { label: "All", value: "all" },
  { label: "Pipeline", value: "pipeline" },
  { label: "Lifting", value: "lifting" },
  { label: "Welding", value: "welding" },
  { label: "Logistics", value: "logistics" },
];

export const fleetData: FleetItem[] = [
  {
    id: 1,
    image: "/Images/fleet/fleet-1.png",
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
    image: "/Images/fleet/fleet-2.png",
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
    image: "/Images/fleet/fleet-3.png",
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
    image: "/Images/fleet/fleet-4.png",
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
    image: "/Images/fleet/fleet-5.png",
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
    image: "/Images/fleet/fleet-6.png",
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
];