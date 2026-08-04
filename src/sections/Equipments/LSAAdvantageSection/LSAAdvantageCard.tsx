import type { LSAAdvantageItem } from "./LSAAdvantageSection";

interface LSAAdvantageCardProps {
  item: LSAAdvantageItem;
}

export default function LSAAdvantageCard({ item }: LSAAdvantageCardProps) {
  const Icon = item.icon;

  return (
    <article
      data-aos="flip-left"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
      data-aos-offset="60"
      data-aos-once="true"
    >
      <div className="group flex flex-col items-center text-center transition-transform duration-300 ease-out hover:-translate-y-1">
        <div
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-01/10 text-blue-01 transition-[background-color,color,box-shadow,transform] duration-300 ease-out group-hover:scale-105 group-hover:bg-blue-01 group-hover:text-white group-hover:shadow-[0_12px_30px_rgba(30,60,153,0.22)]"
        >
          <Icon size={24} strokeWidth={2.3} />
        </div>

        <h3 className="mt-6 text-xl font-bold text-blue-01 md:text-[22px] 2xl:text-2xl">
          {item.title}
        </h3>

        <p className="mt-3 max-w-75 text-sm leading-6 text-muted-blue md:text-base">
          {item.description}
        </p>
      </div>
    </article>
  );
}