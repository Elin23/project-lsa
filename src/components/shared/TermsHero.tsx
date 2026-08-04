import { ArrowLeft, FileText, Scale } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsHero() {
  return (
    <section
      aria-labelledby="terms-page-title"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#071a35] pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(49,86,160,0.42),transparent_38%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 h-96 w-96 rounded-full border border-white/10"
      />

      <div
        aria-hidden="true"
        className="absolute -top-20 -right-12 h-72 w-72 rounded-full border border-white/10"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-red-600/70 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors duration-300 hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <ArrowLeft
            aria-hidden="true"
            size={17}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          Back to Home
        </Link>

        <div className="mt-10 max-w-4xl">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-red-600" />

            <span className="text-xs font-bold uppercase tracking-[0.24em] text-red-400">
              Legal Information
            </span>
          </div>

          <h1
            id="terms-page-title"
            className="mt-5 text-4xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
          >
            Terms &amp; Conditions
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            These terms govern your access to and use of the LSA website,
            including its content, forms, resources, and digital services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-md">
              <FileText aria-hidden="true" size={15} className="text-red-400" />
              <span>Last updated: July 28, 2026</span>
            </div>

            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-md">
              <Scale aria-hidden="true" size={15} className="text-red-400" />
              <span>Please read before using the website</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}