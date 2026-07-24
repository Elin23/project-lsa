import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import TimelineCard from "../../components/common/OurJourney/TimelineCard";
import TimelineCardSkeleton from "../../components/skeletons/TimelineCardSkeleton";
import { timelineData } from "../../data/timelineData";

interface PreviewImage {
  src: string;
  alt: string;
}

const OurJourney = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [previewImage, setPreviewImage] = useState<PreviewImage | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!previewImage) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [previewImage]);

  const openPreview = (src: string, alt: string) => {
    setPreviewImage({
      src,
      alt,
    });
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <>
      <section id="our-journey">
        <div>
          <TitleComponent
            title="Our Journey"
            description="Tracing our evolution through milestone achievements and continuous commitment to engineering excellence."
          />

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-indigo-100 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-8">
              {loading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <TimelineCardSkeleton
                      key={index}
                      side={index % 2 === 0 ? "left" : "right"}
                    />
                  ))
                : timelineData.map((item, index) => (
                    <TimelineCard
                      key={`${item.year}-${index}`}
                      year={item.year}
                      title={item.title}
                      description={item.description}
                      badge={item.badge}
                      dotColor={item.dotColor}
                      side={item.side}
                      icon={item.icon}
                      image={item.image}
                      imageAlt={item.imageAlt || item.title}
                      delay={index * 80}
                      onImageClick={() => {
                        if (!item.image) return;

                        openPreview(
                          item.image,
                          item.imageAlt || item.title,
                        );
                      }}
                    />
                  ))}
            </div>
          </div>
        </div>
      </section>

      {previewImage &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${previewImage.alt} image preview`}
            onClick={closePreview}
            className="
              fixed
              inset-0
              z-[99999]
              flex
              items-center
              justify-center
              bg-black/80
              p-4
              backdrop-blur-sm
              md:p-8
            "
          >
            <button
              type="button"
              onClick={closePreview}
              aria-label="Close image preview"
              className="
                fixed
                right-4
                top-4
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-black/60
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:rotate-90
                hover:bg-red-01
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                md:right-7
                md:top-7
              "
            >
              <X size={23} strokeWidth={2} />
            </button>

            <img
              src={previewImage.src}
              alt={previewImage.alt}
              onClick={(event) => event.stopPropagation()}
              className="
                block
                max-h-[90vh]
                max-w-[94vw]
                object-contain
                shadow-2xl
                md:max-h-[92vh]
                md:max-w-[90vw]
              "
            />
          </div>,
          document.body,
        )}
    </>
  );
};

export default OurJourney;