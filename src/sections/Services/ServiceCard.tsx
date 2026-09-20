import { ArrowRight, Check } from "lucide-react";

import ButtonComponent from "../../components/shared/ButtonComponent";

export interface ServiceCardProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  features: string[];
  label?: string;
  reverse?: boolean;
  animationDelay?: number;
}

export default function ServiceCard({
  id,
  slug,
  title,
  description,
  image,
  imageAlt,
  features,
  label,
  reverse = false,
  animationDelay = 0,
}: ServiceCardProps) {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={animationDelay}
      data-aos-easing="ease-out-cubic"
      data-aos-offset="60"
      data-aos-once="true"
    >
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,35,70,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-01/20 hover:shadow-[0_26px_70px_rgba(15,35,70,0.14)]">
        <div className="grid lg:min-h-97.5 lg:grid-cols-[72px_1fr_0.9fr]">
          {/* Service number */}
          <div className="relative hidden overflow-hidden border-r border-slate-200 bg-[#0b1d38] lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-7">
            <span className="text-xs font-bold tracking-[0.2em] text-white/60">
              {String(id).padStart(2, "0")}
            </span>

            <span className="-rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.32em] text-white/50">
              LSA Service
            </span>

            <span className="h-10 w-px bg-red-600" />
          </div>

          {/* Content */}
          <div
            className={`relative flex flex-col justify-center px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-9 xl:px-10 ${
              reverse ? "lg:order-3" : "lg:order-2"
            }`}
          >
            <div className="absolute left-0 top-0 h-1 w-20 bg-red-600 transition-all duration-500 group-hover:w-32 lg:hidden" />

            <div className="flex items-center justify-between gap-4 lg:hidden">
              <span className="text-xs font-bold tracking-[0.2em] text-blue-01">
                {String(id).padStart(2, "0")}
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
                LSA Service
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3 lg:mt-0">
              <span className="h-px w-8 bg-red-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">
                {label || "Industrial Solutions"}
              </span>
            </div>

            <h3 className="mt-4 max-w-xl text-2xl font-extrabold leading-tight tracking-tight text-blue-01 sm:text-[28px] xl:text-[30px]">
              {title}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6.5 text-muted-blue sm:text-[15px]">
              {description}
            </p>

            {features.length > 0 && (
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm font-medium text-slate-600"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                      <Check size={11} strokeWidth={3} />
                    </span>

                    <span className="leading-5">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex items-center gap-5 border-t border-slate-200 pt-5">
              <ButtonComponent
                to={`/services/${slug}`}
                className="group/button w-fit rounded-lg"
                bg="bg-blue-01"
                hoverBg="hover:bg-red-600"
                textColor="text-white"
                padding="px-5 py-3"
                fontSize="text-sm"
                fontWeight="font-semibold"
                icon={
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                }
                iconPosition="right"
              >
                Explore Service
              </ButtonComponent>

              <span className="hidden text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:block">
                Engineering Excellence
              </span>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative min-h-62.5 overflow-hidden sm:min-h-75 lg:min-h-full ${
              reverse ? "lg:order-2" : "lg:order-3"
            }`}
          >
            <img
              src={image}
              alt={imageAlt || title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#061427]/45 via-transparent to-transparent" />

            <div
              className={`absolute inset-y-0 hidden w-24 lg:block ${
                reverse
                  ? "right-0 bg-linear-to-l from-white/15 to-transparent"
                  : "left-0 bg-linear-to-r from-white/15 to-transparent"
              }`}
            />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <span className="rounded-full border border-white/20 bg-[#061427]/45 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Oil & Gas
              </span>

              <span className="ml-4 h-px flex-1 bg-linear-to-r from-white/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}