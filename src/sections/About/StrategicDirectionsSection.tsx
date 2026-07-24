import { useEffect, useState } from "react";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import { DirectionCard } from "../../components/StratigicDirectionsCard";
import DirectionCardSkeleton from "../../components/skeletons/DirectionCardSkeleton";
import { directionsData } from "../../data/stratigicData";

const StrategicDirectionsSection = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="strategic-directions" >
            <div>
                <div className="mb-12">
                    <TitleComponent
                        title="Strategic Directions"
                        description="Guiding principles that drive our engineering solutions and corporate growth."
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {loading
                        ? Array.from({ length: directionsData.length }).map((_, index) => (
                            <DirectionCardSkeleton key={index} />
                        ))
                        : directionsData.map((item) => (
                            <DirectionCard key={item.title} {...item} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicDirectionsSection;