import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import { DirectionCard } from "../../components/StratigicDirectionsCard";
import { lifeAtLsaData } from "../../data/lifeAtLsaData";

const LifeAtLsa = () => {
  return (
    <section>
<TitleComponent
  title="Life at Loaloat Shatt Al-Arab"
  description="At LSA, we believe that exceptional projects are built bEmpowering our people to shape the future of energy."
/>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {lifeAtLsaData.map((item) => (
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