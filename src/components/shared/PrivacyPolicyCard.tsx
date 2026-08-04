import type { PrivacyPolicySection } from "../../data/privacyPolicyData";

interface PrivacyPolicyCardProps {
  section: PrivacyPolicySection;
}

export default function PrivacyPolicyCard({
  section,
}: PrivacyPolicyCardProps) {
  const Icon = section.icon;
  const headingId = `${section.id}-heading`;

  return (
    <article
      id={section.id}
      aria-labelledby={headingId}
      className="scroll-mt-32 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,35,70,0.055)]"
    >
      <div className="border-b border-slate-200 px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
        <div className="flex items-start gap-4 sm:gap-5">
          <div aria-hidden="true" className="relative shrink-0">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-01 text-white shadow-lg shadow-blue-01/15">
              <Icon size={22} />
            </span>

            <span className="absolute -right-2 -bottom-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-red-600 px-1 text-[8px] font-extrabold text-white">
              {section.number}
            </span>
          </div>

          <div>
            <h2
              id={headingId}
              className="text-xl font-extrabold tracking-[-0.02em] text-blue-01 sm:text-2xl"
            >
              {section.title}
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-blue sm:text-[15px]">
              {section.description}
            </p>
          </div>
        </div>
      </div>

      <div className="policy-content space-y-4 px-5 py-6 text-sm leading-7 text-slate-600 sm:px-7 sm:py-7 sm:text-[15px] lg:px-8">
        {section.content}
      </div>
    </article>
  );
}