import CTASection from "../components/shared/CTA/Cta"
import Testimonials from "../sections/Home/Testimonials"
import TrustedCompanies from "../sections/Home/TrustedCompanies"
import OurCoreCapabilities from "../sections/Home/OurCoreCapabilities"
import FeaturedProjects from "../sections/Home/FeaturedProjects"

const HomePage = () => {
  return (
    <div className="space-y-12">
      <TrustedCompanies />
      <OurCoreCapabilities />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default HomePage