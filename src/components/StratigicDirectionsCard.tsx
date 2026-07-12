import { CheckCircle, type LucideIcon } from "lucide-react";

export interface DirectionCardData {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  isActive?: boolean;
}

export interface DirectionCardProps extends DirectionCardData {}

export const DirectionCard = ({
  title,
  description,
  icon: Icon,
  features = [],
  isActive = false,
}: DirectionCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-easing="ease-out"
      data-aos-offset="50"
      data-aos-once="true"
      className="h-full"
    >
      <div
        className={`
          group
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-xl
          border
          p-5
          shadow-md
          transition-[border-color,box-shadow,background-color]
          duration-300
          ease-out
          md:p-6
          2xl:p-7
          ${
            isActive
              ? "border-blue-01 bg-blue-01 text-white shadow-xl"
              : "border-transparent bg-white text-muted-blue hover:border-blue-01/20 hover:shadow-xl"
          }
        `}
      >
        <div
          className={`
            absolute
            left-0
            top-0
            h-0.75
            w-full
            origin-left
            transition-transform
            duration-300
            ease-out
            ${
              isActive
                ? "scale-x-100 bg-white"
                : "scale-x-0 bg-blue-01 group-hover:scale-x-100"
            }
          `}
        />

        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            ease-out
            ${
              isActive
                ? "bg-white/0"
                : "bg-linear-to-br from-blue-01/3 to-transparent group-hover:opacity-100"
            }
          `}
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-28
            w-28
            rounded-full
            bg-white/5
            opacity-80
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        <div className="relative mb-4 flex items-center gap-3.5 2xl:mb-5">
          <div
            className={`
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-lg
              transition-[background-color,color,box-shadow]
              duration-300
              ease-out
              ${
                isActive
                  ? "bg-white text-blue-01"
                  : "bg-blue-01 text-white group-hover:shadow-[0_8px_20px_rgba(31,101,180,0.18)]"
              }
            `}
          >
            <Icon size={20} />
          </div>

          <h3
            className={`
              text-xl
              font-bold
              transition-colors
              duration-300
              md:text-[22px]
              2xl:text-[22px]
              ${isActive ? "text-white" : "text-blue-01"}
            `}
          >
            {title}
          </h3>
        </div>

        <p
          className={`
            relative
            text-sm
            leading-5
            transition-colors
            duration-300
            md:text-base
            md:leading-6
            2xl:leading-6.5
            ${
              isActive
                ? "text-white/80 group-hover:text-white/90"
                : "text-muted-blue"
            }
          `}
        >
          {description}
        </p>

        {features.length > 0 && (
          <ul className="relative mt-5 space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className={`
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-6
                  md:text-base
                  ${isActive ? "text-white/90" : "text-muted-blue"}
                `}
              >
                <CheckCircle
                  size={18}
                  className={`
                    mt-1
                    shrink-0
                    ${isActive ? "text-white" : "text-blue-01"}
                  `}
                />

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};