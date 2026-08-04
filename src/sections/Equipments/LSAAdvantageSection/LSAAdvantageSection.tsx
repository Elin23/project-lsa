import {
  BadgeCheck,
  ClipboardCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

import TitleComponent from "../../../components/shared/TitleComponent";
import LSAAdvantageCard from "./LSAAdvantageCard";

export interface LSAAdvantageItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const advantageData: readonly LSAAdvantageItem[] = [
  {
    title: "Direct Ownership",
    description:
      "We own 100% of our core fleet, eliminating third-party rental delays and ensuring asset quality control.",
    icon: ClipboardCheck,
  },
  {
    title: "Basra Strategic Hub",
    description:
      "Strategically located yard for immediate deployment to Majnoon, Rumaila, and West Qurna oil fields.",
    icon: Truck,
  },
  {
    title: "Project Experience",
    description:
      "Our fleet has successfully supported multi-million dollar EPCC and Pipeline projects for global oil majors.",
    icon: BadgeCheck,
  },
];

export default function LSAAdvantageSection() {
  return (
    <section
      id="the-lsa-advantage"
      aria-labelledby="lsa-advantage-heading"
      className="pb-16 md:pb-20 lg:pb-24 xl:pb-28"
    >
      <div id="lsa-advantage-heading">
        <TitleComponent
          title="The LSA Advantage"
          description="Delivering greater reliability, faster mobilization, and exceptional project performance through our integrated capabilities and experienced team."
        />
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {advantageData.map((item) => (
          <LSAAdvantageCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}