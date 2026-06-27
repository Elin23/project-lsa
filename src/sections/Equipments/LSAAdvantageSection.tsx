import { BadgeCheck, ClipboardCheck, Truck, type LucideIcon } from "lucide-react";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import LSAAdvantageCard from "../../components/common/LSAAdvantageCard";

export interface LSAAdvantageItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const advantageData: LSAAdvantageItem[] = [
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
    <section className="pb-16 md:pb-20 lg:pb-24 xl:pb-28">
      <TitleComponent
        title="The LSA Advantage"
        description=""
      />

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {advantageData.map((item) => (
          <LSAAdvantageCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}