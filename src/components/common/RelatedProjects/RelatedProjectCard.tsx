import { GoArrowRight } from "react-icons/go";

interface RelatedProjectCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
}

export default function RelatedProjectCard({
  category,
  title,
  description,
  image,
}: RelatedProjectCardProps) {
  return (
    <div
      className="
        group overflow-hidden rounded-xl bg-white
        shadow-[0_8px_30px_rgba(31,63,147,0.08)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(31,63,147,0.14)]
      "
    >
      {/* Image */}
      <div className="relative h-[210px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08162d]/95 via-[#08162d]/35 to-transparent" />

        {/* Category */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {category}
          </span>
        </div>

        {/* Title */}
        <div className="absolute bottom-6 left-6 right-6">
          <h4 className="text-xl font-bold leading-snug text-white lg:text-[22px] 2xl:text-[24px]">
            {title}
          </h4>

          <div className="mt-4 h-[2px] w-12 bg-red-01 transition-all duration-500 group-hover:w-24" />
        </div>
      </div>

      {/* White Content */}
      <div className="p-6">
        <p className="text-sm leading-6 text-muted-blue lg:text-base 2xl:text-lg">
          {description}
        </p>

        <button className="group/link mt-6 inline-flex items-center gap-2 font-semibold text-red-01">
          <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-01 after:transition-all after:duration-300 group-hover/link:after:w-full">
            View Details
          </span>

          <GoArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </button>
      </div>
    </div>
  );
}