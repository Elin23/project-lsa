import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useContactInfo } from "../../hooks/queries/useContactInfo";

export default function ContactInfo() {
  const { data: contact, isLoading } = useContactInfo();

  if (isLoading) {
    return <div className="animate-pulse h-96 bg-gray-100 rounded-xl" />;
  }

  if (!contact) return null;

  return (
    <section
      aria-labelledby="contact-info-heading"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <h2
        id="contact-info-heading"
        className="text-[30px] font-bold leading-tight text-blue-01 md:text-[38px]"
      >
        {contact.title}
      </h2>

      <p className="mt-3 max-w-130 text-sm leading-6 text-muted-blue md:text-base">
        {contact.description}
      </p>

      <address className="not-italic">
        <ul className="mt-9 space-y-7">
          {/* Address */}
          <li className="group flex gap-4 transition-transform duration-300 ease-out hover:translate-x-1">
            <div
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-01/10 text-blue-01 transition-[background-color,color] duration-300 ease-out group-hover:bg-blue-01 group-hover:text-white"
            >
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E2746] transition-colors duration-300 group-hover:text-blue-01">
                Address
              </h3>
              <div className="mt-1 text-sm leading-5 text-muted-blue whitespace-pre-line">
                <span className="block">{contact.location.address}</span>
              </div>
            </div>
          </li>

          {/* Phone */}
          <li className="group flex gap-4 transition-transform duration-300 ease-out hover:translate-x-1">
            <div
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-01/10 text-blue-01 transition-[background-color,color] duration-300 ease-out group-hover:bg-blue-01 group-hover:text-white"
            >
              <Phone size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E2746] transition-colors duration-300 group-hover:text-blue-01">
                Phone
              </h3>
              <div className="mt-1 text-sm leading-5 text-muted-blue">
                {contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="block transition-colors hover:text-blue-01 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-01"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </li>

          {/* Email */}
          <li className="group flex gap-4 transition-transform duration-300 ease-out hover:translate-x-1">
            <div
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-01/10 text-blue-01 transition-[background-color,color] duration-300 ease-out group-hover:bg-blue-01 group-hover:text-white"
            >
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E2746] transition-colors duration-300 group-hover:text-blue-01">
                Email
              </h3>
              <div className="mt-1 text-sm leading-5 text-muted-blue">
                <a
                  href={`mailto:${contact.email}`}
                  className="block transition-colors hover:text-blue-01 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-01"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </li>

          {/* Working Hours */}
          <li className="group flex gap-4 transition-transform duration-300 ease-out hover:translate-x-1">
            <div
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-01/10 text-blue-01 transition-[background-color,color] duration-300 ease-out group-hover:bg-blue-01 group-hover:text-white"
            >
              <Clock size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E2746] transition-colors duration-300 group-hover:text-blue-01">
                Working Hours
              </h3>
              <div className="mt-1 text-sm leading-5 text-muted-blue">
                <span className="block">{contact.workingHours}</span>
                <span className="block">{contact.emergencyHours}</span>
              </div>
            </div>
          </li>
        </ul>
      </address>
    </section>
  );
}