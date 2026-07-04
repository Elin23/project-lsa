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
        <div>
            <TitleComponent title={title} description={description} className="text-start items-start" />

          <div className="space-y-6">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 transition-all duration-300"
                >
                  <div
                    className="
                      flex h-14 w-14 shrink-0 items-center justify-center
                      rounded-2xl border border-muted-blue/30 bg-white
                      text-red-01 transition-all duration-300
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

        <div className="w-full lg:flex lg:justify-end">
          <img
            src={image}
            alt={imageAlt}
            className="
              h-[280px] w-full rounded-xl object-cover shadow-xl
              md:h-[420px]
              lg:h-auto lg:max-w-[560px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;