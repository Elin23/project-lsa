import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import Slider from "../../components/shared/Slider";
import { DirectionCard } from "../../components/StratigicDirectionsCard";
import { servicesData2 } from "../../data/servicesData2";

type HotTappingProcessProps = {
  service: (typeof servicesData2)[number];
};

export default function HotTappingProcess({ service }: HotTappingProcessProps) {
  const {
    processTitle,
    processDescription,
    process: processData,
  } = service.details;

  return (
    <div className="mt-24">
      <TitleComponent title={processTitle} description={processDescription} />

      <div className="mt-8 md:hidden">
        <Slider
          items={processData}
          renderItem={(item) => (
            <DirectionCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          )}
        />
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-20">
        {processData.map((item) => (
          <DirectionCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}