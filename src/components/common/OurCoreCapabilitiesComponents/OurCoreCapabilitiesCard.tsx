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
        <div className="w-full md:w-[48.21%] xl:w-[31.53%] 2xl:w-[32.01%] rounded-xl border border-[#F3F4F6] p-8 bg-white relative ">
            <span className=" hidden sm:block absolute top-8 right-8 text-[40px] md:text-5xl 2xl:text-6xl text-white-gray-03 font-bold leading-none">
                {id}
            </span>

            <div className="flex justify-center md:justify-start">
                <h4 className="text-center md:text-left text-blue-01 text-xl 2xl:text-2xl font-bold md:pr-20">
                    {title}
                </h4>
            </div>

            <p className=" md:w-[80%] text-center mt-2.5 md:mt-3 2xl:mt-4 md:text-left text-muted-blue text-sm md:text-base 2xl:text-lg font-normal leading-6 ">
                {description}
            </p>
        </div>
    );
}