import CTASection from "../components/shared/CTA/Cta"
import FAQSection from "../sections/FAQSection"
import HeroSection from "../sections/HeroSection"
import CounterSection from "../sections/Home/CounterSection"
import Testimonials from "../sections/Home/Testimonials"
import TrustedCompanies from "../sections/Home/TrustedCompanies"
import heroImage from "../assets/imgs/homeHero.webp";
import OurCoreCapabilities from "../sections/Home/OurCoreCapabilities"
import FeaturedProjects from "../sections/Home/FeaturedProjects"
import AboutUsHomeSection from "../sections/Home/AboutUsHomeSection"

const HomePage = () => {
  return (
    <div >
      <HeroSection
        image={heroImage}
        title="Building Iraq's Energy Backbone"
        description="Delivering world-class EPC services, civil engineering, and specialized pipeline solutions to power the future of the region's oil and gas sector."
        buttons={[
          {
            text: "Get In Touch",
            to: "/contact",
            variant: "primary",
          },
          {
            text: "Explore Our Projects",
            to: "/projects",
            variant: "outline",
          },
        ]}
      />
      <CounterSection />
      <div className="space-y-12">
        <TrustedCompanies />
        <AboutUsHomeSection />
        <OurCoreCapabilities />
        <FeaturedProjects/>
        <FAQSection />
        <Testimonials />
        <CTASection />
      </div>


    </div>
  )
}

export default HomePage