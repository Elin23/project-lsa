import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Expand, FileCheck2, X } from "lucide-react";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import type { ProjectCertificate } from "../../data/projectsData";

interface ProjectCertificatesProps {
  certificates: ProjectCertificate[];
}

interface PreviewCertificate {
  image: string;
  alt: string;
  title: string;
}

const ProjectCertificates = ({
  certificates,
}: ProjectCertificatesProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [previewCertificate, setPreviewCertificate] =
    useState<PreviewCertificate | null>(null);

  const accordionButtonId = useId();
  const accordionContentId = useId();

  useEffect(() => {
    if (!previewCertificate) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewCertificate]);

  if (certificates.length === 0) {
    return null;
  }

  const openPreview = (
    certificate: ProjectCertificate,
    index: number,
  ) => {
    const title =
      certificate.title || `Project Certificate ${index + 1}`;

    setPreviewCertificate({
      image: certificate.image,
      alt: certificate.alt || title,
      title,
    });
  };

  return (
    <>
      <section aria-labelledby="project-certificates-title">
        <div
          id="project-certificates-title"
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <TitleComponent
            title="Project Certificates"
            description="Official certificates and documentation related to this project."
          />
        </div>

        <div className="mx-auto max-w-6xl border-y border-slate-200">
          <button
            id={accordionButtonId}
            type="button"
            onClick={() => setIsOpen((currentState) => !currentState)}
            aria-expanded={isOpen}
            aria-controls={accordionContentId}
            className="
              group
              flex
              w-full
              items-center
              justify-between
              gap-4
              py-5
              text-left
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-01
              focus-visible:ring-offset-4
            "
          >
            <span className="flex items-center gap-3">
              <FileCheck2
                size={22}
                className="shrink-0 text-blue-01"
                strokeWidth={1.8}
              />

              <span>
                <span className="block font-bold text-blue-01 sm:text-lg">
                  View Project Certificates
                </span>

                <span className="mt-1 block text-sm text-slate-500">
                  {certificates.length}{" "}
                  {certificates.length === 1
                    ? "certificate"
                    : "certificates"}
                </span>
              </span>
            </span>

            <ChevronDown
              size={22}
              className={`
                shrink-0
                text-blue-01
                transition-transform
                duration-300
                ${isOpen ? "rotate-180" : "rotate-0"}
              `}
            />
          </button>

          <div
            id={accordionContentId}
            role="region"
            aria-labelledby={accordionButtonId}
            className={`
              grid
              transition-[grid-template-rows,opacity]
              duration-500
              ease-in-out
              ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="overflow-hidden">
              <div className="border-t border-slate-200 py-6">
                <div
                  className="
                    flex
                    gap-6
                    overflow-x-auto
                    pb-3
                    [scrollbar-width:thin]
                    lg:grid
                    lg:grid-flow-col
                    lg:auto-cols-fr
                    lg:overflow-visible
                    lg:pb-0
                  "
                >
                  {certificates.map((certificate, index) => {
                    const certificateTitle =
                      certificate.title ||
                      `Project Certificate ${index + 1}`;

                    const certificateAlt =
                      certificate.alt || certificateTitle;

                    return (
                      <div
                        key={certificate.id}
                        className="
                          min-w-[72%]
                          sm:min-w-[42%]
                          lg:min-w-0
                        "
                      >
                        <h3 className="mb-3 line-clamp-1 text-center text-sm font-semibold text-blue-01 sm:text-base">
                          {certificateTitle}
                        </h3>

                        <button
                          type="button"
                          onClick={() =>
                            openPreview(certificate, index)
                          }
                          aria-label={`View ${certificateTitle} in fullscreen`}
                          className="
                            group/image
                            relative
                            flex
                            h-52
                            w-full
                            cursor-zoom-in
                            items-center
                            justify-center
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-blue-01
                            focus-visible:ring-offset-4
                            sm:h-56
                            lg:h-52
                          "
                        >
                          <img
                            src={certificate.image}
                            alt={certificateAlt}
                            loading="lazy"
                            className="
                              block
                              h-full
                              w-full
                              object-contain
                              transition-transform
                              duration-300
                              group-hover/image:scale-[1.02]
                            "
                          />

                          <span
                            className="
                              absolute
                              right-2
                              top-2
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              bg-black/65
                              text-white
                              opacity-0
                              backdrop-blur-sm
                              transition-opacity
                              duration-300
                              group-hover/image:opacity-100
                              group-focus-visible/image:opacity-100
                            "
                          >
                            <Expand size={17} strokeWidth={1.8} />
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {previewCertificate &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${previewCertificate.title} preview`}
            onClick={() => setPreviewCertificate(null)}
            className="
              fixed
              inset-0
              z-[99999]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
              backdrop-blur-sm
              md:p-8
            "
          >
            <button
              type="button"
              onClick={() => setPreviewCertificate(null)}
              aria-label="Close certificate preview"
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
                transition-colors
                hover:bg-red-01
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                md:right-7
                md:top-7
              "
            >
              <X size={23} />
            </button>

            <div
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-[94vh] max-w-[96vw] flex-col items-center"
            >
              <img
                src={previewCertificate.image}
                alt={previewCertificate.alt}
                className="
                  block
                  max-h-[87vh]
                  max-w-[96vw]
                  object-contain
                  md:max-w-[92vw]
                "
              />

              <p className="mt-4 text-center text-sm font-medium text-white sm:text-base">
                {previewCertificate.title}
              </p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ProjectCertificates;