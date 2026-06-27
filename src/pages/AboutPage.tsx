import StrategicDirectionsSection from "../sections/About/StrategicDirectionsSection"
import TeamSection from "../sections/About/TeamSection"
import HeroSection from "../sections/HeroSection"
import aboutHero from "../assets/imgs/aboutHero.webp"
import CertificationsStandards from "../sections/About/CertificationsStandards"
import OurJourney from "../sections/About/OurJourney"

const AboutPage = () => {
  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
      <HeroSection
        image={aboutHero}
        title="A Legacy of Industrial Reliability"
        description="Laloat Shatt Al-Arab Company (LSA) is a leading EPC contractor in Iraq, specializing in large-scale mechanical, electrical, and civil engineering projects for the oil and gas sector. We combine technical precision with a commitment to sustainable development.

Our approach is rooted in rigorous planning and execution. We leverage advanced technologies and a highly skilled workforce to deliver complex infrastructure projects on time and within budget, ensuring the highest standards of safety and quality."
        buttons={[
          {
            text: "Download CV",
            href: "/company-profile.pdf",
            variant: "primary",
          },
        ]}
      />
      <StrategicDirectionsSection />
      <OurJourney />
       <CertificationsStandards />
      <TeamSection />
    </div>
  )
}

export default AboutPage