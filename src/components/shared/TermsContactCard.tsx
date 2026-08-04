import { ChevronRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsContactCard() {
  return (
    <article
      id="contact"
      aria-labelledby="terms-contact-heading"
      className="overflow-hidden rounded-2xl bg-[#081c38] text-white shadow-[0_22px_65px_rgba(8,28,56,0.18)]"
    >
      <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="absolute top-8 right-8 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl"
        />

        <div className="relative z-10">
          <div
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white"
          >
            <Mail size={22} />
          </div>

          <h2
            id="terms-contact-heading"
            className="mt-6 text-2xl font-extrabold sm:text-3xl"
          >
            Questions About These Terms
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-[15px]">
            For questions regarding these Terms and Conditions or the use of the
            LSA website, please contact our team.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:info@lsa-iraq.com"
              className="group inline-flex w-fit items-center justify-center gap-2.5 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white transition-[background-color,color] duration-300 hover:bg-white hover:text-blue-01 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Mail aria-hidden="true" size={17} />
              info@lsa-iraq.com
              <ChevronRight
                aria-hidden="true"
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.07] px-5 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-[background-color,border-color] duration-300 hover:border-white/35 hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact Page
              <ChevronRight
                aria-hidden="true"
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}