import HeroSection from "../sections/HeroSection"
import LSAAdvantageSection from "../sections/Equipments/LSAAdvantageSection/LSAAdvantageSection";
import SpecializedEquipmentSection from "../sections/Equipments/SpecializedEquipmentSection";
import FleetInventory from "../sections/Equipments/FleetInventory";
import EquipmentFleetSection from "../sections/Equipments/EquipmentFleetSection";
import EquipmentsHero from "../assets/Images/Equipments/Hero/EquipmentsHero.webp"

const EquipmentsHeroSlides = [
  {
    id: 1,
    type: "image" as const,
    src: EquipmentsHero,
    poster: EquipmentsHero,
    position: "center",
  },
];

const EquipmentsPage = () => {
  return (
    <>
      <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
        <HeroSection
          slides={EquipmentsHeroSlides}
          title="Company-Owned Equipment Fleet Ready for Projects & Rental"
        
description="LSA operates a fully owned fleet of heavy machinery, specialized tools, and support units for Iraq’s oil & gas sector, enabling fast mobilization, reliable performance, and efficient delivery of pipeline, EPCC, and infrastructure projects nationwide."

        />
        <FleetInventory />
        <SpecializedEquipmentSection />
        <EquipmentFleetSection />
        <LSAAdvantageSection />
      </div>
    </>
  );
};

export default EquipmentsPage;
