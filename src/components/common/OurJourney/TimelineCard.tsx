interface TimelineCardProps {
    year: string;
    title: string;
    description: string;
    badge: string;
    dotColor: string;
    side: "left" | "right";
    icon: React.ElementType;
}

export default function TimelineCard({
    year,
    title,
    description,
    badge,
    dotColor,
    side,
    icon: Icon,
}: TimelineCardProps) {
    const isLeft = side === "left";

    return (
        <div

            data-aos={isLeft ? "flip-left" : "flip-right"}
              data-aos-duration="8000"

            className={`relative flex items-center md:min-h-37.5 ${isLeft ? "md:justify-start" : "md:justify-end"
                }`}
        >
            <div

                className={`absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full ${dotColor} md:left-1/2`}
            />

            <div
                className="
          ml-10
          w-full
          rounded-xl
          border
          border-transparent
          bg-white
          p-5
          shadow-md
          transition-all!
          duration-300
          ease-out
          hover:-translate-y-2
          hover:border-blue-01/20
          hover:shadow-2xl
          md:ml-0
          md:w-[46%]
          md:p-7
        "
            >
                <div className="mb-3 flex items-center gap-2">
                    <Icon size={20} className="text-[#1f3f93]" />

                    <span className="text-[12px] font-bold text-blue-02 md:text-sm 2xl:text-base">
                        {year}
                    </span>
                </div>

                <h3 className="text-blue-01 text-xl font-bold md:text-[22px] 2xl:text-[24px]">
                    {title}
                </h3>

                <p className="mt-3 text-sm leading-5 text-muted-blue md:text-base md:leading-6 2xl:text-base 2xl:leading-6.5">
                    {description}
                </p>

                <span className="mt-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-03">
                    {badge}
                </span>
            </div>
        </div>
    );
}