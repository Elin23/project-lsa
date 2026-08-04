import {
  LockKeyhole,
  Scale,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

interface SummaryItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const summaryItems: readonly SummaryItem[] = [
  {
    title: "Secure Processing",
    description:
      "Reasonable security measures protect submitted information.",
    icon: LockKeyhole,
  },
  {
    title: "No Data Selling",
    description: "We do not sell or trade personal information.",
    icon: UserCheck,
  },
  {
    title: "Privacy Rights",
    description:
      "You may request access, correction, or deletion where applicable.",
    icon: Scale,
  },
];

export default function PrivacySummary() {
  return (
    <section
      aria-label="Privacy policy summary"
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