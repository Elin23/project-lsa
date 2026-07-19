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
          relative
          h-full
          aspect-4/5
          overflow-hidden
          rounded-2xl
          bg-slate-900
          shadow-md
          transition-all
          duration-500
          ease-out
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[center_20%]
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-[#0F2E7A]/95
            via-[#0F2E7A]/30
            to-transparent
            opacity-90
            transition-opacity
            duration-500
            md:opacity-60
            md:group-hover:opacity-95
          "
        />

        <div
          className="
            absolute
            bottom-5
            left-0
            right-0
            translate-y-0
            px-5
            text-white
            transition-all
            duration-500
            ease-out
            md:translate-y-8
            md:group-hover:translate-y-0
          "
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/20
              bg-white/15
              px-3
              py-1
              text-[11px]
              font-semibold
              backdrop-blur-md
            "
          >
            {member.experience}
          </span>

          <h3 className="mt-3 text-lg font-bold leading-tight">
            {member.name}
          </h3>

          <p className="mt-1 text-sm text-white/80">
            {member.role}
          </p>

          <div
            className="
              mt-4
              h-0.5
              w-12
              rounded-full
              bg-white/70
              transition-all
              duration-500
              md:w-0
              md:group-hover:w-16
            "
          />
        </div>
      </div>
    </article>
  );
}