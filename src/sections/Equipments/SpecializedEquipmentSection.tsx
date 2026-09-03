import { useEffect, useMemo, useState } from "react";
import {

  Construction,
  Flame,
  Gauge,
  Route,
  Truck,
  Zap,
} from "lucide-react";

import TitleComponent from "../../components/shared/TitleComponent";
import Pagination from "../../components/navigation/Pagination";
import { DirectionCard } from "../About/StrategicDirectionsSection/StratigicDirectionsCard";
import { type AdvantageItem } from "../Advantages/AdvantageCard";
const equipmentData: AdvantageItem[] = [
   { title: "Advanced Pipeline Construction", description: "Built for large-scale pipeline spreads across Iraq, supporting cross-country lines, gathering systems, and refinery connections with speed and precision.", icon: Route, features: [ "CAT 583/594 Side Booms", "Heavy-Duty Excavators & D7 Dozers", ], },
    { title: "Heavy Lifting & Structural Support", description: "Comprehensive lifting capability for heavy modules, refinery equipment, and pipeline components in demanding site conditions.", icon: Truck, features: [ "Mobile Cranes up to 100T", "HIAB & Telescopic Boom Trucks", ], }, 
    { title: "Road & Civil Infrastructure", description: "Full civil works capability supporting refinery access roads, oilfield camps, and industrial infrastructure with durable and efficient execution.", icon: Construction, features: [ "Asphalt Pavers & Milling Machines", "Graders & High-Vibration Rollers", ], },
     { title: "Welding & Fabrication Excellence", description: "Large-scale welding and fabrication capability supporting pipelines, structures, and pressure vessels to international standards.", icon: Flame, features: [ "100+ Multi-Process Welding Units", "X-Ray & NDT Testing Kits", ], }, 
     { title: "Power & Utilities", description: "Reliable mobile power and utility solutions for continuous EPC operations in remote and high-demand project environments.", icon: Zap, features: [ "100KVA - 1000KVA Diesel Generators", "Site Lighting & Utility Systems", ], },
      { title: "Specialized Services Under Pressure", description: "In-house capability for live pipeline interventions, enabling safe modifications and maintenance without interrupting service.", icon: Gauge, features: [ "Hot Tapping & Line Stopping", "Thrust Boring & Live Interventions", ], }, ];
/**
 * SpecializedEquipmentSection Component
 * Renders equipment capabilities directly from static data with dynamic pagination.
 */
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
    <section id="specialized-equipment-capabilities">
      <TitleComponent
        title="Specialized Equipment Capabilities"
        description="At Loaloat Shatt Al-Arab (LSA), we deliver unmatched equipment strength and technical capacity to execute Iraq’s most complex EPC, pipeline, and oilfield infrastructure projects. Our fleet covers every critical discipline, ensuring nationwide reliability, rapid mobilization, and world‑class performance."
      />

      <div
        key={currentPage}
        className="mt-12 grid gap-6 animate-[fadeSlide_0.45s_ease-out] md:grid-cols-2 lg:grid-cols-3"
      >
        {currentItems.map((item) => (
          <DirectionCard
            key={item.title}
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