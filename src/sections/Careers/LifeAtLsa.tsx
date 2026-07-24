import { useEffect, useState } from "react";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import { DirectionCard } from "../../components/StratigicDirectionsCard";
import DirectionCardSkeleton from "../../components/skeletons/DirectionCardSkeleton";

import { lifeAtLsaData } from "../../data/lifeAtLsaData";


const LifeAtLsa = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <section id="life-at-lsa">
      <TitleComponent
        title="Life at Loaloat Shatt Al-Arab"
        description="At LSA, we believe that exceptional projects are built by empowering our people to shape the future of energy."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
            <DirectionCardSkeleton key={index} />
          ))
          : lifeAtLsaData.map((item) => (
            <DirectionCard
              key={item.id}
              icon={item.icon2}
              title={item.title}
              description={item.description}
              isActive={item.isActive}
            />
          ))}
      </div>
    </section>
  );
};

export default LifeAtLsa;