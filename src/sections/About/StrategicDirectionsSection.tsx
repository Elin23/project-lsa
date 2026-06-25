import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import { DirectionCard } from "../../components/StratigicDirectionsCard";
import { directionsData } from "../../data/stratigicData";


const StrategicDirectionsSection = () => {
    return (
        <section>
            <div className="">
                <div className="mb-12">
                    <TitleComponent
                        title="Strategic Directions"
                        description="Guiding principles that drive our engineering solutions and corporate growth."
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {directionsData.map((item) => (
                        <DirectionCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicDirectionsSection;