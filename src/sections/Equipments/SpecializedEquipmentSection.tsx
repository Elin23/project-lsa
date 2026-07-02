import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  Bolt,
  Construction,
  Gauge,
  Settings2,
  SlidersHorizontal,
} from "lucide-react";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import {
  AdvantageCard,
  type AdvantageItem,
} from "../../components/AdvantageCard";
import Pagination from "../../components/shared/Pagination";
import { DirectionCard } from "../../components/StratigicDirectionsCard";

const equipmentData: AdvantageItem[] = [
  {
    title: "Pipeline Construction",
    description:
      "Equipped for major pipeline spreads including heavy-duty Side Booms, Tier-1 Excavators, and D7 Dozers.",
    icon: Activity,
    features: ["Side Booms (CAT 583/594)", "Heavy Duty Excavators"],
  },
  {
    title: "Lifting & Heavy Support",
    description:
      "Precision lifting capacity with a fleet of mobile cranes up to 50 tons and high-capacity HIAB trucks.",
    icon: Construction,
    features: ["50T Mobile Cranes", "Telescopic & Boom Trucks"],
  },
  {
    title: "Road & Asphalt",
    description:
      "Full infrastructure suite including asphalt pavers, milling machines, and high-vibration rollers.",
    icon: Settings2,
    features: ["Asphalt Pavers", "Cold Milling Machines"],
  },
  {
    title: "Welding & Fabrication",
    description:
      "Large-scale fabrication support with over 86 heavy-duty multi-process welding machines and testing kits.",
    icon: Bolt,
    features: ["86 Welding Units", "X-Ray Testing Support"],
  },
  {
    title: "Power & Utilities",
    description:
      "Mobile power solutions including high-capacity diesel generators and site utility lighting towers.",
    icon: Gauge,
    features: ["100KVA - 500KVA Gensets", "Site Lighting Towers"],
  },
  {
    title: "Specialized Services",
    description:
      "Expert equipment for hot tapping, line stopping, and thrust boring operations under pressure.",
    icon: SlidersHorizontal,
    features: ["Hot Tapping Machines", "Thrust Boring Rigs"],
  },
];

export default function SpecializedEquipmentSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(equipmentData.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return equipmentData.slice(start, start + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  return (
    <section>
      <TitleComponent
        title="Specialized Equipment Capabilities"
        description="Providing heavy-duty solutions for the most demanding engineering environments in the region."
      />

      <div
        key={currentPage}
        className="
          mt-12 grid gap-6
          animate-[fadeSlide_0.45s_ease-out]
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {currentItems.map((item, index) => (
<DirectionCard
  title={item.title}
  description={item.description}
  icon={item.icon}
  features={item.features}
/>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </section>
  );
}