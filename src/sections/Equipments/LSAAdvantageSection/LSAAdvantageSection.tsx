import {
  // HardHat,
  // MapPinned,
  // Wrench,
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
  title: "Owned & Controlled Fleet",
  description:
    "We own 100% of our pipeline and EPC equipment fleet, avoiding rental delays and maintaining strict quality control across every project.",
  icon: ClipboardCheck,
},
{
  title: "Nationwide Operations Hub",
  description:
    "Our Basra operations hub enables fast deployment across Iraq’s major oil fields, reducing downtime and providing reliable support for EPC and pipeline projects nationwide.",
  icon: Truck,
},
{
  title: "Proven EPC & Pipeline Expertise",
  description:
    "Our fleet has supported major EPCC and pipeline projects for global oil companies, delivering reliable performance across Iraq’s energy sector.",
  icon: BadgeCheck,
},
//   {
//   title: "Owned & Controlled Fleet",
//   description:
//     "We own and manage our pipeline and EPC fleet, ensuring fast availability, consistent quality, and reduced reliance on third parties.",
//   icon: Wrench,
// },
// {
//   title: "Nationwide Operations Hub",
//   description:
//     "Our Basra hub enables rapid deployment across Iraq’s major oil fields, reducing mobilization time and supporting projects nationwide.",
//   icon: MapPinned,
// },
// {
//   title: "Proven EPC & Pipeline Expertise",
//   description:
//     "Our fleet supports major EPCC and pipeline projects for leading energy companies, delivering reliable performance across Iraq.",
//   icon: HardHat,
// },
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
description="Delivering reliable, fast, and high-performance EPC solutions across Iraq’s oil & gas sector."

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