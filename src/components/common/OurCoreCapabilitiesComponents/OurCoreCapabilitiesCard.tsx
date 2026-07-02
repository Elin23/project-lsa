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
        <div className="w-full md:w-[48.21%] xl:w-[31.53%] 2xl:w-[32.01%] rounded-xl border border-muted-blue/30 p-5 md:p-7 2xl:p-9 bg-white relative space-y-2 md:space-y-3  ">
            <span className=" hidden sm:block absolute top-8 right-8 text-[40px] md:text-5xl 2xl:text-6xl text-white-gray-03 font-bold leading-none">
                {id}
            </span>

            <div className="flex justify-center md:justify-start">
                <h4 className="text-center md:text-left text-blue-01 text-xl md:text-[22px] 2xl:text-[24px] font-bold md:pr-20">
                    {title}
                </h4>
            </div>

            <p className="text-center md:text-left  text-muted-blue text-sm leading-6.5 md:text-base md:leading-7 2xl:text-lg 2xl:leading-7.5 ">
                {description}
            </p>
        </div>
    );
}