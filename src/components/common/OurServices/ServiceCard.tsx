import { CheckCircle, ChevronRight } from "lucide-react";

import ButtonComponent from "../../shared/ButtonComponent";

export interface ServiceCardProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  reverse?: boolean;
  animationDelay?: number;
}

export default function ServiceCard({
  slug,
  title,
  description,
  image,
  features,
  reverse = false,
  animationDelay = 0,
}: ServiceCardProps) {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={animationDelay}
      data-aos-easing="ease-out-cubic"
      data-aos-offset="60"
      data-aos-once="true"
      className="
        group
        grid
        gap-6
        overflow-hidden
        rounded-xl
        bg-white
        p-6
        shadow-md
        ring-1
        ring-gray-100
        transition-[box-shadow,ring-color]
        duration-300
        ease-out
        hover:shadow-xl
        md:grid-cols-2
      "
    >
      <div
        className={`
          relative
          overflow-hidden
          rounded-lg
          ${reverse ? "md:order-2" : "md:order-1"}
        `}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="
            h-full
            min-h-60
            w-full
            rounded-lg
            object-cover
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.035]
            md:h-75
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-lg
            bg-linear-to-t
            from-blue-01/10
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />
      </div>

      <div
        className={`
          flex
          flex-col
          justify-center
          ${reverse ? "md:order-1" : "md:order-2"}
        `}
      >
        <h3 className="text-xl font-bold text-blue-01 md:text-[22px] 2xl:text-[24px]">
          {title}
        </h3>

        <p className="mt-4 text-muted-blue md:text-base md:leading-6 2xl:text-base 2xl:leading-6.5">
          {description}
        </p>

        <ul className="mt-5 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="
                flex
                items-center
                gap-2
                text-muted-blue
                md:text-base
                md:leading-6
                2xl:text-base
                2xl:leading-6.5
              "
            >
              <CheckCircle
                size={15}
                strokeWidth={2.2}
                className="shrink-0 text-red-600"
              />

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <ButtonComponent
          to={`/services/${slug}`}
          className="mt-6 w-fit"
          bg="bg-[#1f3f93]"
          hoverBg="hover:bg-red-600"
          icon={<ChevronRight size={16} />}
          iconPosition="right"
        >
          Learn More
        </ButtonComponent>
      </div>
    </article>
  );
}