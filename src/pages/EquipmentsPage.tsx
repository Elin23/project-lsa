import HeroSection from "../sections/HeroSection";
import LSAAdvantageSection from "../sections/Equipments/LSAAdvantageSection";
import SpecializedEquipmentSection from "../sections/Equipments/SpecializedEquipmentSection";
import EquipmentsHero from "../assets/imgs/EquipmentsHero.webp";
import FleetInventory from "../sections/Equipments/FleetInventory";
import EquipmentFleetSection from "../sections/Equipments/EquipmentFleetSection";
import CounterSection from "../sections/Home/CounterSection";
import { fleetCounterData } from "../data/counterData";
const EquipmentsPage = () => {
  return (
    <>
      <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
        <HeroSection
          image={EquipmentsHero}
          title="Company-Owned Equipment Fleet Ready for Projects & Rental"
          description="LSA maintains a multi-million dollar inventory of heavy machinery, specialized tools, and support units. Our Basra-based yard ensures immediate mobilization for Pipeline, EPCC, and Infrastructure projects across Iraq."
          bottomContent={<CounterSection data={fleetCounterData} />}
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
