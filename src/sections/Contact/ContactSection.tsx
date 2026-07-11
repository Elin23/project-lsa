import ContactFormCard from "../../components/ContactFormCard";
import ContactInfo from "../../components/ContactInfo";


export default function ContactSection() {
  return (
    <section>
      <div className="py-16 lg:py-18 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactFormCard />
        <ContactInfo />
      </div>
    </section>
  );
}