import type { LSAAdvantageItem } from "../../sections/Equipments/LSAAdvantageSection";

interface LSAAdvantageCardProps {
  item: LSAAdvantageItem;
}

export default function LSAAdvantageCard({ item }: LSAAdvantageCardProps) {
  const Icon = item.icon;

  return (
    <article
      className="
        group flex flex-col items-center text-center
        transition-all duration-300 ease-out
        hover:-translate-y-1
      "
    >
      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-full bg-blue-01/10 text-blue-01
          transition-all duration-300 ease-out
          group-hover:bg-blue-01 group-hover:text-white
          group-hover:shadow-[0_12px_30px_rgba(30,60,153,0.22)]
        "
      >
        <Icon size={24} strokeWidth={2.3} />
      </div>

      <h3
        className="
          mt-6  text-xl font-bold md:text-[22px] 2xl:text-[24px] text-blue-01
          transition-colors duration-300
          group-hover:text-blue-01
        "
      >
        {item.title}
      </h3>

      <p className="mt-3 max-w-[300px] text-sm leading-6 md:text-base  text-muted-blue">
        {item.description}
      </p>
    </article>
  );
}