import { useState } from "react";
import { Download, RefreshCw, X } from "lucide-react";

import TeamSection from "../sections/About/TeamSection/TeamSection";
import HeroSection from "../sections/HeroSection";
import aboutHero from "../assets/Images/About/Hero/aboutHero2.webp";
import AboutCompanySection from "../sections/About/AboutCompanySection/AboutCompanySection";
import StrategicDirectionsSection from "../sections/About/StrategicDirectionsSection/StrategicDirectionsSection";
import OurJourney from "../sections/About/OurJourney/OurJourney";
import CertificationsStandards from "../sections/About/CertificationsStandards/CertificationsStandards";

import { useDownloadCompanyProfile } from "../hooks/mutations/useDownloadCompanyProfile";

const aboutHeroSlides = [
  {
    id: 1,
    type: "image" as const,
    src: aboutHero,
    poster: aboutHero,
    position: "center",
  },
];

const AboutPage = () => {
  const [downloadError, setDownloadError] = useState("");

  const { mutateAsync: downloadProfile, isPending } =
    useDownloadCompanyProfile();

  const handleDownload = async () => {
    setDownloadError("");

    try {
      const blob = await downloadProfile();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "LSA-Company-Profile.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      setDownloadError(
        error instanceof Error
          ? error.message
          : "Unable to download the company profile right now.",
      );
    }
  };

  return (
    <>
      <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
        <HeroSection
          slides={aboutHeroSlides}
          title="A Legacy of Industrial Reliability"
          description={`Laloat Shatt Al-Arab Company (LSA) is a leading EPC contractor in Iraq, specializing in large-scale mechanical, electrical, and civil engineering projects for the oil and gas sector. We combine technical precision with a commitment to sustainable development.

Our approach is rooted in rigorous planning and execution. We leverage advanced technologies and a highly skilled workforce to deliver complex infrastructure projects on time and within budget, ensuring the highest standards of safety and quality.`}
          buttons={[
            {
              text: isPending
                ? "Preparing Profile..."
                : "Download Company Profile",
              onClick: handleDownload,
              icon: isPending ? (
                <RefreshCw size={17} className="animate-spin" />
              ) : (
                <Download size={17} />
              ),
              iconPosition: "left",
              variant: "primary",
            },
          ]}
        />

        <AboutCompanySection />
        <StrategicDirectionsSection />
        <OurJourney />
        <CertificationsStandards />
        <TeamSection />
      </div>

      {downloadError && (
        <div
          role="alert"
          className="fixed bottom-5 right-5 z-100 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-red-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.16)] sm:w-full"
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="text-sm font-bold text-blue-01">
                Company Profile
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-blue">
                {downloadError}
              </p>

              <button
                type="button"
                onClick={() => {
                  void handleDownload();
                }}
                disabled={isPending}
                className="mt-3 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-blue-01 transition hover:text-red-01 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <RefreshCw
                  size={14}
                  className={isPending ? "animate-spin" : ""}
                />
                {isPending ? "Trying again..." : "Try Again"}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setDownloadError("")}
              aria-label="Close notification"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;