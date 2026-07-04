interface FeaturedProjectsCardProps {
  image: string;
  category: string;
  title: string;
}

export default function FeaturedProjectsCard({
  image,
  category,
  title,
}: FeaturedProjectsCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-[270px] w-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08162d]/95 via-[#08162d]/20 to-transparent" />

      {/* Category */}
      <div className="absolute left-6 top-6">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm  uppercase  text-white backdrop-blur-md">
          {category}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7">

        <div className="flex items-end justify-between gap-5">

          <div>
 
            <h3 className="text-xl md:text-[22px] 2xl:text-[24px] font-bold leading-snug text-white">
              {title}
            </h3>

            <div className="mt-5 h-[2px] w-12 bg-red-01 transition-all duration-500 group-hover:w-28" />

          </div>
        </div>

      </div>
    </div>
  );
}