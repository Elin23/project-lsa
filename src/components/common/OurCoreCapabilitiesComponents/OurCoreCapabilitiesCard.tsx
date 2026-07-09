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
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border border-[#E8EDF5]
        bg-white
        p-7
        transition-all
        duration-500
        hover:-translate-y-1.5
        hover:border-[#D8E7F7]
        hover:bg-linear-to-br
        hover:from-white
        hover:to-[#F8FBFF]
        hover:shadow-[0_12px_35px_rgba(31,101,180,0.08)]
      "
    >
      {/* Light Sweep */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          translate-x-[-140%]
          bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.8)_50%,transparent_70%)]
          transition-transform
          duration-1000
          group-hover:translate-x-[140%]
        "
      />

      {/* Left Accent */}
      <span
        className="
          absolute
          left-0
          top-8
          h-12
          w-0.75
          origin-top
          scale-y-0
          rounded-r-full
          bg-blue-01
          transition-transform
          duration-500
          group-hover:scale-y-100
        "
      />

      {/* Number */}
      <span
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
          transition-all
          duration-500
          group-hover:translate-y-1
          group-hover:text-[#D9E8F8]
          lg:block
        "
      >
        {id}
      </span>

      {/* Title */}
      <h4
        className="
          relative
          mb-4
          max-w-[80%]
          text-xl
          font-bold
          text-blue-01
          transition-all
          duration-300
          group-hover:translate-x-1
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
          text-sm
          leading-7
          text-muted-blue
          transition-colors
          duration-300
          group-hover:text-[#5F7388]
          md:text-base
        "
      >
        {description}
      </p>
    </article>
  );
}