import type { TeamMember } from "../../../sections/About/TeamSection";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration="800"
      className="h-full"
    >
      <div
        className="
      group
      overflow-hidden
      rounded-2xl
      bg-white
      shadow-md
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-xl
    "
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden lg:h-72">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="
          h-full
          w-full
          object-cover
          object-top
          transition-transform
          duration-700
          group-hover:scale-105
        "
          />

          <div
            className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/20
          via-transparent
          to-transparent
        "
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <span
            className="
          inline-flex
          rounded-full
          bg-blue-50
          px-3
          py-1
          text-xs
          font-semibold
          text-blue-01
        "
          >
            {member.experience}
          </span>

          <h3 className="mt-4 text-xl font-bold text-blue-01">
            {member.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-muted-blue">
            {member.role}
          </p>

          <div
            className="
          mt-5
          h-1
          w-12
          rounded-full
          bg-red-01
          transition-all
          duration-300
          group-hover:w-20
        "
          />
        </div>
      </div>
    </article>
  );
}