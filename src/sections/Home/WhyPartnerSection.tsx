import TitleComponent from "../../components/common/TitleComponent/TitleComponent";

interface PartnerItem {
    title: string;
    description: string;
    icon: string;
}

interface WhyPartnerSectionProps {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    items: PartnerItem[];
}

const WhyPartnerSection = ({
    title,
    description,
    image,
    imageAlt = "Why partner with us",
    items,
}: WhyPartnerSectionProps) => {
    return (
        <section className="py-16">
            <div className=" grid gap-1 lg:grid-cols-2 lg:items-center">
                <div>
                    <div className="mb-8">
                        <TitleComponent
                            title={title}
                            description={description}
                        />
                    </div>

                    <div className="space-y-6">
                        {items.map((item) => (
                            <div key={item.title} className="flex items-start gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-white">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="h-7 w-7 object-contain"
                                    />
                                </div>

                                <div>
                                    <h3 className="mb-1 text-lg font-bold text-[#183b91]">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-6 text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:flex lg:justify-end">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="
              h-[280px]
              w-full
              rounded-xl
              object-cover
              shadow-xl
              md:h-[420px]
              lg:h-auto
              lg:max-w-[560px]
            "
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyPartnerSection;