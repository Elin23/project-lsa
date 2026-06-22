interface FeaturedProjectsCardProps {
    image: string;
    category: string;
    title: string;
}

export default function FeaturedProjectsCard({
    image,
    category,
    title,
}: FeaturedProjectsCardProps) {
    return (
        <div className="w-full md:w-[48.21%] xl:w-[31.53%] 2xl:w-[32.01%] relative rounded-2xl overflow-hidden">
            <img className="rounded-2xl w-full object-cover" src={image} alt={title} />

            <div className="absolute inset-0  bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-9 2xl:bottom-13 left-6 2xl:left-8 z-10">
                <span className="text-[#C8102E] text-xs font-bold uppercase">
                    {category}
                </span>

                <h4 className="text-white text-lg 2xl:text-2xl font-semibold 2xl:pe-42.5">
                    {title}
                </h4>
            </div>
        </div>
    );
}