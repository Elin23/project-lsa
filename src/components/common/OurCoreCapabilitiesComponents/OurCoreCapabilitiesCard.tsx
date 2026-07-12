interface OurCoreCapabilitiesCardProps {
  id: string;
  title: string;
  description: string;
}

export default function OurCoreCapabilitiesCard({
  id,
  title,
  description,
}: OurCoreCapabilitiesCardProps) {
  return (
    <article
      data-aos="fade"
      data-aos-duration="650"
      data-aos-easing="ease-out"
      data-aos-once="true"
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border
        border-[#E8EDF5]
        bg-white
        p-7
        shadow-[0_4px_18px_rgba(15,23,42,0.04)]
        transition-[border-color,box-shadow,background-color]
        duration-300
        ease-out
        hover:border-[#D7E4F2]
        hover:bg-[#FCFDFF]
        hover:shadow-[0_12px_28px_rgba(31,101,180,0.08)]
      "
    >
      {/* Soft Background Glow */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-44
          w-44
          rounded-full
          bg-blue-01/0
          blur-3xl
          transition-colors
          duration-500
          ease-out
          group-hover:bg-blue-01/5
        "
      />

      {/* Left Accent */}
      <span
        aria-hidden="true"
        className="
          absolute
          left-0
          top-8
          h-12
          w-[3px]
          rounded-r-full
          bg-blue-01/25
          transition-[height,background-color]
          duration-300
          ease-out
          group-hover:h-16
          group-hover:bg-blue-01
        "
      />

      {/* Number */}
      <span
        aria-hidden="true"
        className="
          absolute
          right-6
          top-6
          hidden
          select-none
          text-5xl
          font-bold
          leading-none
          text-[#EEF3F8]
          transition-colors
          duration-300
          ease-out
          group-hover:text-[#DCE8F5]
          lg:block
        "
      >
        {id}
      </span>

      {/* Title */}
      <h4
        className="
          relative
          z-10
          mb-4
          max-w-[80%]
          text-xl
          font-bold
          text-blue-01
          transition-colors
          duration-300
          ease-out
          group-hover:text-[#173F70]
          md:text-[22px]
          2xl:text-2xl
        "
      >
        {title}
      </h4>

      {/* Description */}
      <p
        className="
          relative
          z-10
          text-sm
          leading-7
          text-muted-blue
          transition-colors
          duration-300
          ease-out
          group-hover:text-[#526A82]
          md:text-base
        "
      >
        {description}
      </p>
    </article>
  );
}