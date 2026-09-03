import { Eye, Flag, TrendingUp } from "lucide-react";
import type { DirectionCardData } from "../sections/About/StrategicDirectionsSection/StratigicDirectionsCard";

export const directionsData: DirectionCardData[] = [
  {
    title: "Our Mission",
    description:
      "To deliver superior EPC, pipeline, and infrastructure services that consistently exceed client expectations. We achieve this through innovation, safety, sustainability, and rapid mobilization, ensuring reliable performance on Iraq’s most complex oil & gas projects.",
    icon: Flag,
  },
  {
    title: "Our Vision",
    description:
      "To be recognized as Iraq’s leading EPC contractor and a trusted partner for SOC and global oil majors, known for our technical strength, integrity, and pivotal role in modernizing industrial infrastructure across the Middle East.",
    icon: Eye,
    isActive: true,
  },
  {
    title: "Our Plan",
    description:
      "We continuously invest in advanced technologies, expanding our fully owned heavy equipment fleet, and cultivating top‑tier engineering talent. This strategy empowers LSA to tackle cross‑country pipelines, refinery upgrades, civil infrastructure, and specialized services with unmatched scale and precision.",
    icon: TrendingUp,
  },
];