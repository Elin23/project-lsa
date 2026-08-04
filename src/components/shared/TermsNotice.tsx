import { Building2 } from "lucide-react";

export default function TermsNotice() {
  return (
    <aside
      aria-labelledby="terms-notice-heading"
      className="rounded-2xl border border-blue-01/10 bg-blue-01/[0.035] p-5 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-01 text-white"
        >
          <Building2 size={20} />
        </span>

        <div>
          <h2 id="terms-notice-heading" className="font-bold text-blue-01">
            These terms apply to the public LSA website
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-blue">
            Project agreements, employment contracts, tenders, purchase orders,
            and formal commercial arrangements may be governed by separate
            written terms.
          </p>
        </div>
      </div>
    </aside>
  );
}