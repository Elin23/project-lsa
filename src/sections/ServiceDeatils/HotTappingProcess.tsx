import TitleComponent from "../../components/shared/TitleComponent";
import Slider from "../../components/shared/Slider";

import { DirectionCard } from "../About/StrategicDirectionsSection/StratigicDirectionsCard";

import type { Service } from "../../Types/service";

import { getLucideIcon } from "../../utils/getLucideIcon";

type HotTappingProcessProps = {
  service: Service;
};

export default function HotTappingProcess({
  service,
}: HotTappingProcessProps) {
  const { title, description, steps } =
    service.deliveryProcessSection;

  if (!steps.length) {
    return null;
  }

  return (
    <div className="mt-24">
      <TitleComponent
        title={title}
        description={description}
      />

      {/* Mobile */}
      <div className="mt-8 md:hidden">
        <Slider
          items={steps}
          renderItem={(item) => (
            <DirectionCard
              icon={getLucideIcon(item.icon)}
              title={item.title}
              description={item.description}
            />
          )}
        />
      </div>

      {/* Desktop */}
      <div className="mt-20 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {steps.map((item, index) => (
          <DirectionCard
            key={`${item.title}-${index}`}
            icon={getLucideIcon(item.icon)}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}