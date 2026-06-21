import OurCoreCapabilitiesCard from "../../../components/common/OurCoreCapabilitiesComponents/OurCoreCapabilitiesCard";
import TitleComponent from "../../../components/common/TitleComponent/TitleComponent";
import { ourCoreCapabilitiesData } from "../../../data/OurCoreCapabilitiesData/OurCoreCapabilitiesData";

export default function OurCoreCapabilities() {
    return (
        <>
            <TitleComponent />

            <div className="px-container">
                <div className="flex flex-wrap gap-6 mt-16 md:mt-12 xl:mt-16 2xl:mt-20">
                    {ourCoreCapabilitiesData.map((item) => (
                        <OurCoreCapabilitiesCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}