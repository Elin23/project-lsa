import { Eye, Flag, TrendingUp } from "lucide-react";

import type { DirectionCardData } from "../sections/About/StrategicDirectionsSection/StratigicDirectionsCard";

export const directionsData: DirectionCardData[] = [
  {
    title: "Our Mission",
    description:
      "To deliver superior EPC, pipeline, and infrastructure services that exceed client expectations through innovation, safety, sustainability, and rapid mobilization across Iraq’s most complex oil & gas projects.",
    icon: Flag,
  },
  {
    title: "Our Vision",
    description:
      "To be recognized as Iraq’s leading EPC contractor and trusted partner for SOC and global oil majors, known for technical strength, integrity, and modernizing industrial infrastructure across the Middle East.",
    icon: Eye,
    isActive: true,
  },
  {
    title: "Our Plan",
    description:
      "We invest in advanced technologies, expand our heavy equipment fleet, and develop top-tier engineering talent to deliver pipelines, refinery upgrades, civil infrastructure, and specialized services with scale and precision.",
    icon: TrendingUp,
  },
];