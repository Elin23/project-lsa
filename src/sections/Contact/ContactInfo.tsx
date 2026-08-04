import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

interface ContactLine {
  text: string;
  href?: `tel:${string}` | `mailto:${string}`;
}

interface ContactInfoItem {
  title: string;
  lines: readonly ContactLine[];
  icon: LucideIcon;
}

const contactInfo: readonly ContactInfoItem[] = [
  {
    title: "Address",
    lines: [
      { text: "Burjysia Industrial Zone" },
      { text: "Basra, Iraq" },
    ],
    icon: MapPin,
  },
  {
    title: "Phone",
    lines: [
      {
        text: "+964 781 218 0251 / +964 780 307 9440",
        href: "tel:+9647812180251",
      },
      {
        text: "+964 771 760 4634 / +964 770 478 0616",
        href: "tel:+9647717604634",
      },
    ],
    icon: Phone,
  },
  {
    title: "Email",
    lines: [
      {
        text: "info@lsa-iraq.com",
        href: "mailto:info@lsa-iraq.com",
      },
    ],
    icon: Mail,
  },
  {
    title: "Working Hours",
    lines: [
      { text: "Sunday - Thursday: 8:00 AM - 5:00 PM" },
      { text: "Emergency Response: 24/7" },
    ],
    icon: Clock,
  },
];

export default function ContactInfo() {
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
        Basra Headquarters
      </h2>

      <p className="mt-3 max-w-130 text-sm leading-6 text-muted-blue md:text-base">
        Our engineering teams are strategically located to rapidly deploy across
        Iraq&apos;s major oil and gas infrastructure.
      </p>

      <address className="not-italic">
        <ul className="mt-9 space-y-7">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="group flex gap-4 transition-transform duration-300 ease-out hover:translate-x-1"
              >
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-01/10 text-blue-01 transition-[background-color,color] duration-300 ease-out group-hover:bg-blue-01 group-hover:text-white"
                >
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#1E2746] transition-colors duration-300 group-hover:text-blue-01">
                    {item.title}
                  </h3>

                  <div className="mt-1 text-sm leading-5 text-muted-blue">
                    {item.lines.map((line) =>
                      line.href ? (
                        <a
                          key={line.text}
                          href={line.href}
                          className="block transition-colors hover:text-blue-01 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-01"
                        >
                          {line.text}
                        </a>
                      ) : (
                        <span key={line.text} className="block">
                          {line.text}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </address>
    </section>
  );
}