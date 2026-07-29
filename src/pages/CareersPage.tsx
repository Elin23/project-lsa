import HeroSection from "../sections/HeroSection";
import LifeAtLsa from "../sections/Careers/LifeAtLsa";
import CurrentOpportunities from "../sections/Careers/CurrentOpportunities";
import ApplicationProcess from "../sections/Careers/ApplicationProcess";
import CareersHero from "../assets/Images/Careers/Hero/careersHero.png"

const CareersHeroSlides = [
  {
    id: 1,
    type: "image" as const,
    src: CareersHero,
    poster: CareersHero,
    position: "center",
  },
];
const CareersPage = () => {
  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
      <HeroSection
        slides={CareersHeroSlides}
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
  );
};

export default CareersPage;