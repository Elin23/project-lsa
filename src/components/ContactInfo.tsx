import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    title: "Address",
    value: "Burjysia Industrial Zone\nBasra, Iraq",
    icon: MapPin,
  },
  {
    title: "Phone",
    value: "+964 781 218 0251 / +964 780 307 9440\n+964 771 760 4634 / +964 770 478 0616",
    icon: Phone,
  },
  {
    title: "Email",
    value: "info@lsa-iraq.com",
    icon: Mail,
  },
  {
    title: "Working Hours",
    value: "Sunday - Thursday: 8:00 AM - 5:00 PM\nEmergency Response: 24/7",
    icon: Clock,
  },
];

export default function ContactInfo() {
  return (
    <div data-aos="fade-up" data-aos-duration="800"
    >
      <h2 className="text-[30px] font-bold leading-tight text-blue-01 md:text-[38px]">
        Basra Headquarters
      </h2>

      <p className="mt-3 max-w-130 text-sm leading-6 text-muted-blue md:text-base">
        Our engineering teams are strategically located to rapidly deploy across
        Iraq's major oil and gas infrastructure.
      </p>

      <div className="mt-9 space-y-7">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group flex gap-4 transition-transform duration-300 hover:translate-x-1"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-01/10 text-blue-01 transition-all duration-300 group-hover:bg-blue-01 group-hover:text-white">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#1E2746] transition-colors duration-300 group-hover:text-blue-01">
                  {item.title}
                </h3>

                <p className="mt-1 whitespace-pre-line text-sm leading-5 text-muted-blue">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}