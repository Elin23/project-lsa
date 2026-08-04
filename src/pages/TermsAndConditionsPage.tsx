import { useEffect, useState } from "react";

import TermsContactCard from "../components/shared/TermsContactCard";
import TermsHero from "../components/shared/TermsHero";
import TermsNotice from "../components/shared/TermsNotice";
import TermsSectionCard from "../components/shared/TermsSectionCard";
import TermsSidebar from "../components/shared/TermsSidebar";
import TermsSummary from "../components/shared/TermsSummary";
import {
  termsNavigationItems,
  termsSections,
} from "../data/termsAndConditionsData";

const DEFAULT_SECTION_ID = termsNavigationItems[0]?.id ?? "";
const HEADER_OFFSET = 120;

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] =
    useState<string>(DEFAULT_SECTION_ID);

  useEffect(() => {
    const sectionElements = termsNavigationItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              firstEntry.boundingClientRect.top -
              secondEntry.boundingClientRect.top,
          )[0];

        const visibleSectionId = visibleEntry?.target.id;

        if (!visibleSectionId) {
          return;
        }

        setActiveSection((currentSection) =>
          currentSection === visibleSectionId
            ? currentSection
            : visibleSectionId,
        );
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -65% 0px`,
        threshold: 0,
      },
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      HEADER_OFFSET;

    setActiveSection(sectionId);

    window.scrollTo({
      top: Math.max(sectionPosition, 0),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <main className="bg-[#f7f9fc]">
      <TermsHero />
      <TermsSummary />

      <section
        aria-label="Terms and conditions content"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="grid items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-16">
          <TermsSidebar
            activeSection={activeSection}
            items={termsNavigationItems}
            onNavigate={scrollToSection}
          />

          <div className="space-y-6">
            <TermsNotice />

            {termsSections.map((section) => (
              <TermsSectionCard key={section.id} section={section} />
            ))}

            <TermsContactCard />

            <p className="px-2 text-center text-xs leading-6 text-slate-400">
              These Terms and Conditions should be reviewed and approved by the
              company&apos;s legal adviser before publication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}