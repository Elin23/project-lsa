import { useEffect, useState } from "react";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import TimelineCard from "../../components/common/OurJourney/TimelineCard";
import TimelineCardSkeleton from "../../components/skeletons/TimelineCardSkeleton";
import { timelineData } from "../../data/timelineData";

const OurJourney = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div>
        <TitleComponent
          title="Our Journey"
          description="Tracing our evolution through milestone achievements and continuous commitment to engineering excellence."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-indigo-100 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-8">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <TimelineCardSkeleton
                    key={index}
                    side={index % 2 === 0 ? "left" : "right"}
                  />
                ))
              : timelineData.map((item, index) => (
                  <TimelineCard
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    badge={item.badge}
                    dotColor={item.dotColor}
                    side={item.side}
                    icon={item.icon}
                    image={item.image}
                    delay={index * 80}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
