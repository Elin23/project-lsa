import type { LucideIcon } from "lucide-react";

import TitleComponent from "../../components/shared/TitleComponent";

export interface PartnerItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhyPartnerSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  items?: PartnerItem[];
}

/**
 * WhyPartnerSection Component
 * Renders a structured section outlining partnership advantages with image and icon list.
 * Built defensively for production to prevent runtime crashes and ensure full keyboard/a11y compatibility.
 */
const WhyPartnerSection = ({
  title,
  description,
  image,
  imageAlt = "Why partner with us",
  items = [],
}: WhyPartnerSectionProps) => {
  return (
    <section id="why-partner" aria-labelledby="why-partner-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center xl:gap-14 2xl:gap-20">
        {/* Left Column: Title Header & Advantage Items */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-out"
          data-aos-offset="80"
          data-aos-once="true"
        >
          <div id="why-partner-title">
            <TitleComponent
              title={title}
              description={description}
              className="items-center text-center lg:items-start lg:text-start"
            />
          </div>

          <div className="space-y-6">
            {items.map(({ title: itemTitle, description: itemDescription, icon: Icon }, index) => (
              <article
                key={`${itemTitle}-${index}`}
                className="group flex items-start gap-4"
              >
                {/* Decorative Icon Container */}
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-muted-blue/30 bg-white text-red-01 transition-[background-color,border-color,color] duration-300 ease-out group-hover:border-blue-01/20 group-hover:bg-blue-01 group-hover:text-white"
                  aria-hidden="true"
                >
                  {Icon && (
                    <Icon
                      size={22}
                      strokeWidth={2.2}
                      aria-hidden="true"
                      focusable="false"
                    />
                  )}
                </div>

                {/* Article Content */}
                <div>
                  <h3 className="mb-1 text-lg font-bold text-blue-01">
                    {itemTitle}
                  </h3>

                  <p className="text-sm leading-6 text-muted-blue">
                    {itemDescription}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Visual Asset */}
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
            loading="lazy"
            decoding="async"
            className="h-70 w-full rounded-xl object-cover shadow-xl md:h-105 lg:h-auto lg:max-w-140"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;