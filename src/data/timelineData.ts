import {
  Building2,
  PersonStanding,
  Users,
  Award,
  Wrench,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  dotColor: string;
  side: "left" | "right";
}

export const timelineData: TimelineItem[] = [
  {
    year: "2013 - 2014",
    title: "Foundation & First Steps",
    description:
      "Established LSA with a core focus on specialized engineering services, successfully completing initial civil and mechanical projects.",
    badge: "10+ Initial Projects",
    icon: Building2,
    dotColor: "bg-indigo-500",
    side: "left",
  },
  {
    year: "2016",
    title: "Key Pipeline Infrastructure",
    description:
      "Achieved a major breakthrough by delivering critical pipeline infrastructure for the regional oil and gas sector.",
    badge: "50km Pipe Laid",
    icon: PersonStanding,
    dotColor: "bg-red-600",
    side: "right",
  },
  {
    year: "2016–2019",
    title: "Major Expansion",
    description:
      "Underwent rapid organizational growth, substantially expanding our specialized workforce and heavy equipment fleet.",
    badge: "100+ Team Size",
    icon: Users,
    dotColor: "bg-indigo-500",
    side: "left",
  },
  {
    year: "2018",
    title: "ISO Certification",
    description:
      "Attained comprehensive international ISO certifications, underscoring our commitment to rigorous quality management.",
    badge: "ISO 9001",
    icon: Award,
    dotColor: "bg-red-600",
    side: "right",
  },
  {
    year: "2019–2020",
    title: "Advanced Hot Tapping",
    description:
      "Pioneered advanced hot tapping techniques, enabling critical maintenance and connections without halting production.",
    badge: "20+ Operations",
    icon: Wrench,
    dotColor: "bg-indigo-500",
    side: "left",
  },
  {
    year: "2020 - 2022",
    title: "Civil Engineering Triumphs",
    description:
      "Successfully delivered a series of massive civil engineering frameworks, bolstering regional industrial capacity.",
    badge: "5 Mega Projects",
    icon: Settings,
    dotColor: "bg-red-600",
    side: "right",
  },
  {
    year: "2023–2024",
    title: "Sustainable EPC Leadership",
    description:
      "Solidified our position as an industry leader by integrating sustainable practices across comprehensive EPC contracts.",
    badge: "500+ Total Projects",
    icon: Wrench,
    dotColor: "bg-indigo-500",
    side: "left",
  },
];