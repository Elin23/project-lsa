import StrategicDirectionsSection from "../sections/About/StrategicDirectionsSection"
import TeamSection from "../sections/About/TeamSection"
import HeroSection from "../sections/HeroSection"
import aboutHero from "../assets/imgs/aboutHero.webp"

const AboutPage = () => {
  return (
    <div>
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
      <TeamSection />
    </div>
  )
}

export default AboutPage