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
      className={`
        group relative overflow-hidden rounded-xl border p-5 md:p-7 2xl:p-9 shadow-md
        transition-all duration-300 ease-out 
        hover:-translate-y-2 hover:shadow-2xl
        ${
          isActive
            ? "border-blue-01 bg-blue-01 text-white shadow-xl"
            : "border-transparent bg-white text-muted-blue hover:border-blue-01/20"
        }
      `}
    >
      <div
        className={`
          absolute left-0 top-0 w-full origin-left transition-transform duration-300
          ${
            isActive
              ? "scale-x-100 bg-white"
              : "scale-x-0 bg-blue-01 group-hover:scale-x-100"
          }
        `}
      />

      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-125" />

      <div className="relative mb-4 flex items-center gap-4 2xl:mb-5">
        <div
          className={`
            flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
            transition-all duration-300 group-hover:scale-110
            ${isActive ? "bg-white text-blue-01" : "bg-blue-01 text-white"}
          `}
        >
          <Icon size={20} />
        </div>

        <h3
          className={`
            text-xl font-bold md:text-[22px] 2xl:text-[24px] transition-colors duration-300 
            ${isActive ? "text-white" : "text-blue-01"}
          `}
        >
          {title}
        </h3>
      </div>

      <p
        className={`
          relative text-sm leading-6 md:text-base
          ${isActive ? "text-white/80" : "text-muted-blue"}
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
                flex items-start gap-3 text-sm leading-6 md:text-base
                ${isActive ? "text-white/90" : "text-muted-blue"}
              `}
            >
              <CheckCircle
                size={18}
                className={`mt-1 shrink-0 ${
                  isActive ? "text-white" : "text-blue-01"
                }`}
              />

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};