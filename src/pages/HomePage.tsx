import CTASection from "../components/shared/CTA/Cta"
import TrustedCompanies from "../sections/Home/TrustedCompanies"

const HomePage = () => {
  return (
    <div className="space-y-12">
      <TrustedCompanies />
      <CTASection />
    </div>
  )
}

export default HomePage