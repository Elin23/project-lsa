import { Link } from "react-router-dom";

interface FeaturedProjectsCardProps {
  image: string;
  category: string;
  title: string;
  path: string;
}

export default function FeaturedProjectsCard({
  image,
  category,
  title,
  path,
}: FeaturedProjectsCardProps) {
  return (
    <Link
      to={path}
      data-aos="flip-left"
      className="group relative block overflow-hidden rounded-xl bg-black"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-67.5 w-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#08162d]/95 via-[#08162d]/20 to-transparent" />

      {/* Category */}
<div className="absolute right-4 top-3">
  <span
    className="
      inline-flex
      items-center
      rounded-full
      border
      border-white/70
      bg-white/95
      px-2.5
      py-1
      text-[8px]
      font-semibold
      uppercase
      tracking-[0.04em]
      text-slate-600
      shadow-sm
    "
  >
    {category}
  </span>
</div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7">
        <div className="flex items-end justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold leading-snug text-white md:text-[22px] 2xl:text-[24px]">
              {title}
            </h3>

            <div className="mt-5 h-0.5 w-12 bg-red-01 transition-all duration-500 group-hover:w-28" />
          </div>
        </div>
      </div>
    </Link>
  );
}