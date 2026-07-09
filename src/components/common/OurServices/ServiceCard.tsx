import { CheckCircle, ChevronRight } from "lucide-react";
import ButtonComponent from "../../shared/ButtonComponent";

export interface ServiceCardProps {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    reverse?: boolean;
}

export default function ServiceCard({
    slug,
    title,
    description,
    image,
    features,
    reverse = false,
}: ServiceCardProps) {
    return (
        <div
            className="
        grid
        gap-6
        rounded-xl
        bg-white
        p-6
        shadow-md
        ring-1
        ring-gray-100
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        md:grid-cols-2
      "
        >
            <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
                <img
                    src={image}
                    alt={title}
                    className="w-full rounded-lg object-cover md:h-75"
                />
            </div>

            <div
                className={`flex flex-col justify-center ${reverse ? "md:order-1" : "md:order-2"
                    }`}
            >
                <h3 className="text-xl font-bold text-blue-01 md:text-[22px] 2xl:text-[24px]">
                    {title}
                </h3>

                <p className="mt-4 text-muted-blue md:text-base md:leading-6 2xl:text-base 2xl:leading-6.5">
                    {description}
                </p>

                <ul className="mt-5 space-y-3">
                    {features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-center gap-2 text-muted-blue md:text-base md:leading-6 2xl:text-base 2xl:leading-6.5"
                        >
                            <CheckCircle
                                size={15}
                                className="shrink-0 text-red-600"
                            />

                            {feature}
                        </li>
                    ))}
                </ul>

                <ButtonComponent
                    to={`/services/${slug}`}
                    className="mt-6 w-fit"
                    bg="bg-[#1f3f93]"
                    hoverBg="hover:bg-red-600"
                    icon={<ChevronRight size={16} />}
                    iconPosition="right"
                >
                    Learn More
                </ButtonComponent>
            </div>
        </div>
    );
}