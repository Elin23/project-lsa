import { GoArrowRight } from "react-icons/go";

interface RelatedProjectCardProps {
    category: string;
    title: string;
    description: string;
    image: string;
}

export default function RelatedProjectCard({
    category,
    title,
    description,
    image,
}: RelatedProjectCardProps) {
    return (
        <div className=" w-full  rounded-xl bg-white shadow-[0px_4px_20px_0px_#00236F0D]">
            <div className="w-full relative">
                <span className="absolute top-4 left-4 py-1 px-3 bg-[#F9F9FFE5] lg:text-xs 2xl:text-sm font-bold text-red-01 rounded-2xl">
                    {category}
                </span>

                <img
                    className="w-full rounded-xl object-cover"
                    src={image}
                    alt={title}
                />
            </div>

            <div className=" text-center sm:text-start p-8 space-y-3 md:space-y-2.5 2xl:space-y-3">
                <h4 className="text-[#111C2C] text-lg lg:text-xl 2xl:text-2xl font-bold">
                    {title}
                </h4>

                <p className="text-[#444651] text-sm lg:text-base 2xl:text-lg font-normal">
                    {description}
                </p>

                <button className=" mx-auto sm:mx-0 text-[#00236F] text-sm 2xl:text-base font-semibold flex items-center gap-2">
                    View Details
                    <GoArrowRight />
                </button>
            </div>
        </div>
    );
}