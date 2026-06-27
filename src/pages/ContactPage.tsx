import LocationMap from "../components/LocationMap"
import ContactSection from "../sections/Contact/ContactSection"
import FAQSection from "../sections/FAQSection"
import HeroSection from "../sections/HeroSection"
import contactHero from "../assets/imgs/contactHero.webp"

const ContactPage = () => {
  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
       <HeroSection
                image={contactHero}
                title="Contact Us"
                description="Our engineering teams are strategically located to rapidly deploy
across Iraq's major oil and gas infrastructure. Reach out today to
discuss your project requirements."
            />
      <ContactSection />
      <LocationMap googleMapsEmbedUrl="https://www.google.com/maps?q=Basra,+Iraq&output=embed"/>
      <FAQSection/>
    </div>
  )
}

export default ContactPage