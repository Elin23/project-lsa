import HeroSection from "../sections/HeroSection"
import OurServices from "../sections/Services/OurServices"
import CTASection from "../components/shared/CTA/Cta"
import ServicesHero from "../assets/Images/Services/Hero/servicesHero.webp"
import AdvantagesSection from "../sections/Advantages/AdvantagesSection";

const ServicesHeroSlides = [
  {
    id: 1,
    type: "image" as const,
    src: ServicesHero,
    poster: ServicesHero,
    position: "center",
  },
];
const EngineeringServicesPage = () => {
    return (
        <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
            <HeroSection
                slides={ServicesHeroSlides}
                title="Engineering Services"
                description="Comprehensive EPC solutions for Iraq’s oil & gas sector. At Loaloat Shatt Al‑Arab (LSA), we deliver large‑scale mechanical, electrical, civil infrastructure, and pipeline projects with precision, scale, and uncompromising quality.

From pipeline construction and refinery upgrades to power systems and industrial facilities, our engineering services are trusted by SOC and global oil majors to meet the highest standards of safety, reliability, and performance."
            />
            <AdvantagesSection />
            <OurServices />
            <CTASection />
        </div>
    )
}

export default EngineeringServicesPage