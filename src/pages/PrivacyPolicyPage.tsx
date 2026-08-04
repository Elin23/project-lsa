import { useEffect, useState } from "react";

import PrivacyContactCard from "../components/shared/PrivacyContactCard";
import PrivacyNotice from "../components/shared/PrivacyNotice";
import PrivacyPolicyCard from "../components/shared/PrivacyPolicyCard";
import PrivacyPolicyHero from "../components/shared/PrivacyPolicyHero";
import PrivacyPolicySidebar from "../components/shared/PrivacyPolicySidebar";
import PrivacySummary from "../components/shared/PrivacySummary";
import {
  privacyNavigationItems,
  privacyPolicySections,
} from "../data/privacyPolicyData";

const DEFAULT_SECTION_ID = privacyNavigationItems[0]?.id ?? "";
const HEADER_OFFSET = 120;

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] =
    useState<string>(DEFAULT_SECTION_ID);

  useEffect(() => {
    const sectionElements = privacyNavigationItems
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

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      HEADER_OFFSET;

    setActiveSection(sectionId);

    window.scrollTo({
      top: Math.max(sectionTop, 0),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <main className="bg-[#f7f9fc]">
      <PrivacyPolicyHero />
      <PrivacySummary />

      <section
        aria-label="Privacy policy content"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="grid items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-16">
          <PrivacyPolicySidebar
            activeSection={activeSection}
            items={privacyNavigationItems}
            onNavigate={scrollToSection}
          />

          <div className="space-y-6">
            <PrivacyNotice />

            {privacyPolicySections.map((section) => (
              <PrivacyPolicyCard key={section.id} section={section} />
            ))}

            <PrivacyContactCard />

            <p className="px-2 text-center text-xs leading-6 text-slate-400">
              This privacy policy template should be reviewed and approved by
              the company&apos;s legal adviser before publication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}