import TitleComponent from "../../../components/shared/TitleComponent";
import { directionsData } from "../../../data/stratigicData";
import { DirectionCard } from "./StratigicDirectionsCard";

/**
 * StrategicDirectionsSection Component
 * Renders strategic direction cards directly from static data without artificial loading delays.
 */
const StrategicDirectionsSection = () => {
    return (
        <section id="strategic-directions">
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
        </section>
    );
};

export default StrategicDirectionsSection;