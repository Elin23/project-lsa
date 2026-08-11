import TitleComponent from "../../components/shared/TitleComponent";
import Slider from "../../components/shared/Slider";

import DirectionCardSkeleton from "../../components/skeletons/DirectionCardSkeleton";

import { DirectionCard } from "../About/StrategicDirectionsSection/StratigicDirectionsCard";

import type { Service } from "../../Types/service";

import { getLucideIcon } from "../../utils/getLucideIcon";

type HotTappingProcessProps = {
  service: Service;
  loading?: boolean;
};

export default function HotTappingProcess({
  service,
  loading = false,
}: HotTappingProcessProps) {
  const {
    title,
    description,
    steps,
  } = service.deliveryProcessSection;

  if (!loading && steps.length === 0) {
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
        {loading ? (
          <Slider
            items={[1]}
            renderItem={() => (
              <DirectionCardSkeleton />
            )}
          />
        ) : (
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
        )}
      </div>

      {/* Tablet and Desktop */}
      <div className="mt-20 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <DirectionCardSkeleton
                key={index}
              />
            ))
          : steps.map((item, index) => (
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