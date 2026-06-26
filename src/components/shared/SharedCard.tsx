import type { LucideIcon } from "lucide-react";

interface SharedCardProps {
  icon?: string;
  icon2?: LucideIcon;
  title: string;
  description: string;
}

export default function SharedCard({
  icon,
  icon2: Icon,
  title,
  description,
}: SharedCardProps) {
  return (
    <div className="rounded-xl border border-[#C5C5D333] p-7 shadow-[0px_4px_20px_0px_#1E3A8A14] 2xl:p-8">
      <div className="flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-blue-01">
          {icon && <img src={icon} alt={title} className="h-7 w-7" />}

          {Icon && <Icon className="h-7 w-7 text-white" strokeWidth={2} />}
        </div>

        <h4 className="text-2xl font-bold text-blue-01">
          {title}
        </h4>
      </div>

      <p className="mt-4 text-lg font-normal text-muted-blue">
        {description}
      </p>
    </div>
  );
}