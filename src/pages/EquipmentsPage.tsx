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
          description="At Loaloat Shatt Al‑Arab (LSA), we maintain a multi‑million‑dollar fleet of heavy machinery, specialized tools, and support units dedicated to Iraq’s oil & gas sector. Our Basra operations hub ensures immediate mobilization for pipeline construction, EPCC, and infrastructure projects across all major oil fields—including Majnoon, Rumaila, West Qurna, Zubair, Halfaya, Badra, Nasiriyah, Ratawi, Block 9, and Siba.

With full ownership of our fleet, strict preventive maintenance programs, and nationwide reach, LSA delivers zero downtime, faster deployment, and benchmark performance for SOC projects and global oil majors operating in Iraq."
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
