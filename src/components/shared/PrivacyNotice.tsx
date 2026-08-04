import { ShieldCheck } from "lucide-react";

export default function PrivacyNotice() {
  return (
    <aside
      aria-labelledby="privacy-notice-heading"
      className="rounded-2xl border border-blue-01/10 bg-blue-01/[0.035] p-5 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-01 text-white"
        >
          <ShieldCheck size={20} />
        </span>

        <div>
          <h2 id="privacy-notice-heading" className="font-bold text-blue-01">
            Your privacy and trust are important to LSA
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-blue">
            This page provides general information about our website privacy
            practices. Specific contractual, employment, or project-related
            data may be subject to additional terms and requirements.
          </p>
        </div>
      </div>
    </aside>
  );
}