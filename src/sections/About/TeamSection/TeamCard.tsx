import type { TeamMember } from "../../../Types/team";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({
  member,
}: TeamCardProps) {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration="800"
      className="h-full"
    >
      <div
        className="
          group
          flex
          h-full
          flex-col
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
        <div className="relative h-64 overflow-hidden lg:h-72">
          <img
            src={member.image.url}
            alt={member.fullName}
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
              bg-linear-to-t
              from-black/20
              via-transparent
              to-transparent
            "
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span
            className="
              inline-flex
              w-fit
              rounded-full
              bg-blue-01/10
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
            {member.fullName}
          </h3>

          <p className="mt-1 text-sm font-medium text-muted-blue">
            {member.position}
          </p>

          <div className="mt-auto pt-5">
            <div
              className="
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
      </div>
    </article>
  );
}