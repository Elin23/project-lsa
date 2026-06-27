import type { LucideIcon } from "lucide-react";

export interface AdvantageItem {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive?: boolean;
  features?: string[];
}

export const AdvantageCard = ({
  title,
  description,
  icon: Icon,
  isActive = false,
  features = [],
}: AdvantageItem) => {
  return (
    <article
      className={`
        group relative overflow-hidden rounded-xl border p-6 shadow-md
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl
        ${
          isActive
            ? "border-blue-01 bg-blue-01 text-white shadow-xl"
            : "border-white-gray-01 bg-white text-muted-blue hover:border-blue-01/20"
        }
      `}
    >
      <div
        className={`
          absolute left-0 top-0 h-1 w-full origin-left transition-transform duration-300
          ${
            isActive
              ? "scale-x-100 bg-white"
              : "scale-x-0 bg-blue-01 group-hover:scale-x-100"
          }
        `}
      />

      <div
        className={`
          mb-5 flex h-10 w-10 items-center justify-center rounded-lg
          transition-all duration-300 group-hover:scale-110
          ${isActive ? "bg-white text-blue-01" : "bg-blue-01/10 text-blue-01"}
        `}
      >
        <Icon size={20} strokeWidth={2.4} />
      </div>

      <h3
        className={`
          text-xl font-bold transition-colors duration-300
          ${isActive ? "text-white" : "text-blue-01"}
        `}
      >
        {title}
      </h3>

      <p
        className={`
          mt-4 text-sm leading-6
          ${isActive ? "text-white/80" : "text-muted-blue"}
        `}
      >
        {description}
      </p>

      {features.length > 0 && (
        <ul className="mt-5 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className={`
                flex items-center gap-2 text-xs font-bold
                ${isActive ? "text-white/85" : "text-blue-01"}
              `}
            >
              <span
                className={`
                  flex h-3.5 w-3.5 items-center justify-center rounded-full border text-[9px]
                  ${isActive ? "border-white/60" : "border-blue-01"}
                `}
              >
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};