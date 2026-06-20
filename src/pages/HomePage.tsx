import CTASection from "../components/shared/CTA/Cta"
import Testimonials from "../sections/Home/Testimonials"
import TrustedCompanies from "../sections/Home/TrustedCompanies"

const HomePage = () => {
  return (
    <div className="space-y-12">
      <TrustedCompanies />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default HomePage