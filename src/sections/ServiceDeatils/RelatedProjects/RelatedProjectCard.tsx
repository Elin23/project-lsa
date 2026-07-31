import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface RelatedProjectCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  path: string;
}

export default function RelatedProjectCard({
  category,
  title,
  description,
  image,
  path,
}: RelatedProjectCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="650"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
      className="h-full cursor-pointer"
    >
      <article
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-[#E8EDF5]
          bg-white
          shadow-[0_8px_30px_rgba(31,63,147,0.08)]
          transition-[border-color,box-shadow]
          duration-500
          ease-out
          hover:border-blue-01/15
          hover:shadow-[0_18px_45px_rgba(31,63,147,0.14)]
        "
      >
        {/* Image */}
        <div className="relative h-52.5 shrink-0 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#08162d]/90 via-[#08162d]/25 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              {category}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <h4 className="text-xl font-bold leading-snug text-white lg:text-[22px] 2xl:text-[24px]">
              {title}
            </h4>

            <div className="mt-3 h-0.5 w-12 rounded-full bg-red-01 transition-[width] duration-500 group-hover:w-20" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <p className="line-clamp-3 text-sm leading-6 text-muted-blue lg:text-base 2xl:text-lg">
            {description}
          </p>

          <div className="mt-auto pt-5">
            <div className="mb-4 h-px w-full bg-[#E8EDF5]" />

            <Link
              to={path}
              className="
                group/link
                inline-flex
                cursor-pointer
                items-center
                gap-2
                font-semibold
                text-red-01
              "
            >
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-red-01 after:transition-[width] after:duration-300 group-hover/link:after:w-full">
                View Details
              </span>

              <GoArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}