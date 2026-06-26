import HeroSection from "../sections/HeroSection"
import careersHero from "../assets/imgs/careersHero.webp"
import LifeAtLsa from "../sections/Careers/LifeAtLsa"
import CurrentOpportunities from "../sections/Careers/CurrentOpportunities"
import ApplicationProcess from "../sections/Careers/ApplicationProcess"

const CareersPage = () => {
  return (
    <div className="space-y-20">
            <HeroSection
                image={careersHero}
                title="Build Your Future with L.S.A"
                description="Be part of the engineering excellence that powers a nation. We are looking for visionaries to help us execute Iraq's most complex EPC projects."
                        buttons={[
          {
            text: "Get In Touch",
            to: "/contact",
            variant: "primary",
          },
          {
            text: "View Openings",
            to: "/projects",
            variant: "outline",
          },
        ]}
            />
            <LifeAtLsa />
            <CurrentOpportunities />
            <ApplicationProcess />

    </div>
  )
}

export default CareersPage