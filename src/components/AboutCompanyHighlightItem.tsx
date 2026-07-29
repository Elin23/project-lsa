import type { AboutCompanyHighlight } from "../data/aboutCompanyData";

interface AboutCompanyHighlightItemProps {
  item: AboutCompanyHighlight;
  index: number;
}

export default function AboutCompanyHighlightItem({
  item,
  index,
}: AboutCompanyHighlightItemProps) {
  const Icon = item.icon;

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="
        group flex items-start gap-4
        border-t border-blue-01/10 pt-5
      "
    >
      <div
        className="
          flex h-11 w-11 shrink-0 items-center justify-center
          rounded-xl border border-blue-01/10
          bg-blue-01/8 text-blue-01
          transition-all duration-300 ease-out
          group-hover:-translate-y-1
          group-hover:border-blue-01/20
          group-hover:bg-blue-01
          group-hover:text-white
        "
      >
        <Icon size={20} strokeWidth={2.1} />
      </div>

      <div>
        <h3 className="text-base font-bold text-blue-02">
          {item.title}
        </h3>

        <p className="mt-1.5 text-sm leading-6 text-muted-blue">
          {item.description}
        </p>
      </div>
    </article>
  );
}