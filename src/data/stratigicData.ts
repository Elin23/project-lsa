import { Eye, Flag, TrendingUp } from "lucide-react";
import type { DirectionCardData } from "../components/StratigicDirectionsCard";

export const directionsData: DirectionCardData[] = [
  {
    title: "Our Mission",
    description:
      "To deliver superior engineering, procurement, and construction services that exceed client expectations through innovation, safety, and sustainable practices in every project we undertake.",
    icon: Flag,
  },
  {
    title: "Our Vision",
    description:
      "To be the premier EPC contractor in the Middle East, recognized for our technical prowess, unwavering integrity, and pivotal role in modernizing industrial infrastructure across the region.",
    icon: Eye,
    isActive: true,
  },
  {
    title: "Our Plan",
    description:
      "Investing continuously in advanced technologies, expanding our heavy equipment fleet, and cultivating top-tier engineering talent to tackle increasingly complex industrial challenges.",
    icon: TrendingUp,
  },
];