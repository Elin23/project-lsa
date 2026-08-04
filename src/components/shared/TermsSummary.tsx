import {
  Copyright,
  FileCheck2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface TermsSummaryItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const summaryItems: readonly TermsSummaryItem[] = [
  {
    title: "Terms of Use",
    description: "Use of the website is subject to these conditions.",
    icon: FileCheck2,
  },
  {
    title: "Protected Content",
    description: "Website content and branding remain legally protected.",
    icon: Copyright,
  },
  {
    title: "Responsible Access",
    description: "Users must not misuse or disrupt the website.",
    icon: ShieldCheck,
  },
];

export default function TermsSummary() {
  return (
    <section
      aria-label="Terms and conditions summary"
      className="relative z-20 -mt-10"
    >
      <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,35,70,0.10)] sm:grid-cols-3">
        {summaryItems.map((item, index) => {
          const Icon = item.icon;
          const hasDivider = index < summaryItems.length - 1;

          return (
            <article
              key={item.title}
              className={`flex items-start gap-4 p-6 lg:p-7 ${
                hasDivider
                  ? "border-b border-slate-200 sm:border-r sm:border-b-0"
                  : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-01/8 text-blue-01"
              >
                <Icon size={21} />
              </span>

              <div>
                <h2 className="font-bold text-blue-01">{item.title}</h2>

                <p className="mt-1 text-sm leading-6 text-muted-blue">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}