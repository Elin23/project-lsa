import AdvantagesSection from "../sections/AdvantagesSection"
import HeroSection from "../sections/HeroSection"
import engineeringHero from "../assets/imgs/servicesHero.webp"

const EngineeringServicesPage = () => {
  return (
    <div>
      <HeroSection
        image={engineeringHero}
        title="Engineering Services"
        description="Comprehensive EPC solutions designed for the oil and gas sector. From large-scale mechanical and electrical engineering to civil infrastructure and pipeline projects, we deliver precision, scale, and uncompromising quality in every project."
      />
      <AdvantagesSection />
    </div>
  )
}

export default EngineeringServicesPage