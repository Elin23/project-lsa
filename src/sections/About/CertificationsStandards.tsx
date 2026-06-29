import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import Slider from "../../components/shared/Slider";
import { DirectionCard } from "../../components/StratigicDirectionsCard";
import {
  certificationStats,
  certificationsData,
} from "../../data/certificationsData";

const CertificationsStandards = () => {
  return (
    <section>
      <TitleComponent
        title="Certifications & Standards"
        description=" Our commitment to international standards ensures the highest levels
            of quality, safety, and environmental responsibility across all
            operations."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {certificationStats.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl bg-white px-6 py-6 text-center shadow-[0_8px_30px_rgba(31,63,147,0.08)] transition duration-300 hover:-translate-y-1"
          >
            <h3 className={`text-4xl md:text-[40px] font-bold ${stat.color}`}>
              {stat.value}
            </h3>

            <p className="mt-2 text-sm font-semibold uppercase tracking-[1.5px] text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden mt-8 md:grid gap-4 md:grid-cols-2">
        {certificationsData.map((item, index) => (
          <DirectionCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}{" "}
      </div>

      {/* Mobile Slider */}
      <div className="mt-8 md:hidden">
        <Slider
          items={certificationsData}
          renderItem={(item) => (
            <DirectionCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          )}
        />
      </div>
    </section>
  );
};

export default CertificationsStandards;
