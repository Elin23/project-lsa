import {
  BadgeCheck,
  Gauge,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import TitleComponent from "../components/common/TitleComponent/TitleComponent";
import { AdvantageCard } from "../components/AdvantageCard";

export interface AdvantageItem {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive?: boolean;
}

const advantagesData: AdvantageItem[] = [
  {
    title: "EPC Capability",
    description:
      "Full-spectrum engineering, procurement, and construction services managed by industry veterans.",
    icon: BadgeCheck,
  },
  {
    title: "Rapid Execution",
    description:
      "Streamlined processes and local expertise ensure timely project delivery without compromising quality.",
    icon: Gauge,
  },
  {
    title: "Safety First",
    description:
      "Rigorous adherence to international HSE standards to protect our workforce and the environment.",
    icon: ShieldCheck,
  },
  {
    title: "Certified Quality",
    description:
      "ISO certified operations guaranteeing the highest level of quality control in every structural build.",
    icon: Sparkles,
  },
];



export default function AdvantagesSection() {
  return (
    <section className="bg-[#F7F8FC] py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="mb-12">
          <TitleComponent
            title="Our Advantages"
            description="Guiding principles that drive our engineering solutions and corporate growth."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {advantagesData.map((item) => (
            <AdvantageCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}