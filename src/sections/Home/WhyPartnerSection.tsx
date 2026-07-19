import type { LucideIcon } from "lucide-react";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";

interface PartnerItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface WhyPartnerSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  items: PartnerItem[];
}

const WhyPartnerSection = ({
  title,
  description,
  image,
  imageAlt = "Why partner with us",
  items,
}: WhyPartnerSectionProps) => {
  return (
    <section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center xl:gap-14 2xl:gap-20">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-out"
          data-aos-offset="80"
          data-aos-once="true"
        >
          <TitleComponent
            title={title}
            description={description}
            className="items-start text-start"
          />

          <div className="space-y-6">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    flex
                    items-start
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-muted-blue/30
                      bg-white
                      text-red-01
                      transition-[background-color,border-color,color]
                      duration-300
                      ease-out
                      group-hover:border-blue-01/20
                      group-hover:bg-blue-01
                      group-hover:text-white
                    "
                  >
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  <div>
                    <h3 className="mb-1 text-lg font-bold text-blue-01">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-muted-blue">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="700"
          data-aos-easing="ease-out"
          data-aos-delay="100"
          data-aos-offset="80"
          data-aos-once="true"
          className="w-full lg:flex lg:justify-end"
        >
          <img
            src={image}
            alt={imageAlt}
            className="
              h-70
              w-full
              rounded-xl
              object-cover
              shadow-xl
              md:h-105
              lg:h-auto
              lg:max-w-140
            "
          />
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;