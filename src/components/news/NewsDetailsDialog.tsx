import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

import { createPortal } from "react-dom";

import {
  ChevronLeft,
  ChevronRight,
  Images,
  X,
} from "lucide-react";

import type { NewsItem } from "../../Types/news";

interface NewsDetailsDialogProps {
  news: NewsItem | null;
  onClose: () => void;
}

const formatDate = (
  date: string,
) =>
  new Intl.DateTimeFormat(
    "en-US",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    },
  ).format(
    new Date(
      `${date}T00:00:00`,
    ),
  );

export default function NewsDetailsDialog({
  news,
  onClose,
}: NewsDetailsDialogProps) {
  const closeButtonRef =
    useRef<HTMLButtonElement>(
      null,
    );

  const previousActiveElementRef =
    useRef<HTMLElement | null>(
      null,
    );

  const [
    activeImageIndex,
    setActiveImageIndex,
  ] = useState(0);

  const imageCount =
    news?.images.length ?? 0;

  const hasMultipleImages =
    imageCount > 1;

  // Reset the gallery whenever another news item is opened.
  useEffect(() => {
    if (!news) {
      return;
    }

    setActiveImageIndex(0);
  }, [news]);

  useEffect(() => {
    if (!news) {
      return;
    }

    previousActiveElementRef.current =
      document.activeElement instanceof
      HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      "hidden";

    requestAnimationFrame(
      () => {
        closeButtonRef.current?.focus();
      },
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      previousActiveElementRef.current?.focus();
    };
  }, [news]);

  useEffect(() => {
    if (!news) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === "Escape"
      ) {
        onClose();
        return;
      }

      if (
        !hasMultipleImages
      ) {
        return;
      }

      if (
        event.key ===
        "ArrowLeft"
      ) {
        setActiveImageIndex(
          (current) =>
            current === 0
              ? imageCount - 1
              : current - 1,
        );
      }

      if (
        event.key ===
        "ArrowRight"
      ) {
        setActiveImageIndex(
          (current) =>
            current ===
            imageCount - 1
              ? 0
              : current + 1,
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    news,
    hasMultipleImages,
    imageCount,
    onClose,
  ]);

  if (
    !news ||
    typeof document ===
      "undefined"
  ) {
    return null;
  }

  const activeImage =
    news.images[
      activeImageIndex
    ];

  if (!activeImage) {
    return null;
  }

  const showPreviousImage =
    () => {
      setActiveImageIndex(
        (current) =>
          current === 0
            ? imageCount - 1
            : current - 1,
      );
    };

  const showNextImage =
    () => {
      setActiveImageIndex(
        (current) =>
          current ===
          imageCount - 1
            ? 0
            : current + 1,
      );
    };

  const handleBackdropClick = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    if (
      event.target ===
      event.currentTarget
    ) {
      onClose();
    }
  };

  const dialog = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="news-dialog-title"
      aria-describedby="news-dialog-description"
      onMouseDown={
        handleBackdropClick
      }
      className="
        fixed
        inset-0
        z-[9999]
        flex
        h-dvh
        w-screen
        items-center
        justify-center
        overflow-hidden
        bg-slate-950/65
        p-3
        backdrop-blur-sm
        sm:p-5
        md:p-6
      "
    >
      <div
        className="
          relative
          flex
          max-h-[calc(100dvh-24px)]
          w-full
          max-w-4xl
          flex-col
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-[0_30px_90px_rgba(15,23,42,0.35)]
          sm:max-h-[calc(100dvh-40px)]
          md:max-h-[calc(100dvh-48px)]
        "
      >
        {/* Fixed Close Button */}
        <button
          ref={
            closeButtonRef
          }
          type="button"
          onClick={onClose}
          aria-label="Close news details"
          className="
            absolute
            right-3
            top-3
            z-40
            flex
            size-10
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-white
            text-slate-600
            shadow-[0_5px_20px_rgba(15,23,42,0.18)]
            ring-1
            ring-slate-200/80
            transition-all
            duration-300
            hover:rotate-90
            hover:bg-red-01
            hover:text-white
            hover:ring-red-01
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-01
            focus-visible:ring-offset-2
            sm:right-4
            sm:top-4
            md:size-11
          "
        >
          <X
            aria-hidden="true"
            size={19}
          />
        </button>

        {/* Scrollable Content */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            p-3
            sm:p-4
            md:p-5
            lg:p-6
          "
        >
          {/* Gallery */}
          <div
            className="
              overflow-hidden
              rounded-2xl
              bg-[#F7F8FD]
            "
          >
            <div
              className="
                relative
                h-52
                overflow-hidden
                bg-slate-100
                min-[350px]:h-58
                sm:h-72
                md:h-82
                lg:h-92
              "
            >
              <img
                key={
                  activeImage.url
                }
                src={
                  activeImage.url
                }
                alt={
                  activeImage.alt
                }
                decoding="async"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-24
                  bg-gradient-to-t
                  from-slate-950/25
                  to-transparent
                "
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={
                      showPreviousImage
                    }
                    aria-label="View previous image"
                    className="
                      absolute
                      left-2.5
                      top-1/2
                      flex
                      size-9
                      -translate-y-1/2
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/50
                      bg-white/90
                      text-blue-01
                      shadow-lg
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-blue-01
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white
                      sm:left-4
                      sm:size-10
                    "
                  >
                    <ChevronLeft
                      aria-hidden="true"
                      size={18}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={
                      showNextImage
                    }
                    aria-label="View next image"
                    className="
                      absolute
                      right-2.5
                      top-1/2
                      flex
                      size-9
                      -translate-y-1/2
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/50
                      bg-white/90
                      text-blue-01
                      shadow-lg
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-blue-01
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white
                      sm:right-4
                      sm:size-10
                    "
                  >
                    <ChevronRight
                      aria-hidden="true"
                      size={18}
                    />
                  </button>

                  <div
                    className="
                      absolute
                      bottom-3
                      right-3
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-slate-950/60
                      px-3
                      py-1.5
                      text-[11px]
                      font-bold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    <Images
                      aria-hidden="true"
                      size={13}
                    />

                    <span>
                      {activeImageIndex +
                        1}
                      /
                      {
                        imageCount
                      }
                    </span>
                  </div>
                </>
              )}
            </div>

            {hasMultipleImages && (
              <div
                className="
                  flex
                  gap-2
                  overflow-x-auto
                  p-3
                  [scrollbar-width:thin]
                  sm:gap-3
                  sm:p-4
                "
              >
                {news.images.map(
                  (
                    image,
                    index,
                  ) => {
                    const isActive =
                      index ===
                      activeImageIndex;

                    return (
                      <button
                        key={`${image.url}-${index}`}
                        type="button"
                        onClick={() =>
                          setActiveImageIndex(
                            index,
                          )
                        }
                        aria-label={`View image ${index + 1} of ${imageCount}`}
                        aria-current={
                          isActive
                            ? "true"
                            : undefined
                        }
                        className={`
                          h-13
                          w-18
                          shrink-0
                          cursor-pointer
                          overflow-hidden
                          rounded-lg
                          border-2
                          transition-all
                          duration-300
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-blue-01
                          focus-visible:ring-offset-2
                          sm:h-15
                          sm:w-22
                          ${
                            isActive
                              ? `
                                border-blue-01
                                opacity-100
                              `
                              : `
                                border-transparent
                                opacity-50
                                hover:opacity-100
                              `
                          }
                        `}
                      >
                        <img
                          src={
                            image.url
                          }
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="
                            h-full
                            w-full
                            object-cover
                          "
                        />
                      </button>
                    );
                  },
                )}
              </div>
            )}
          </div>

          {/* Details */}
          <div
            className="
              px-1
              pb-1
              pt-5
              sm:px-2
              sm:pt-6
              md:px-3
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2.5
              "
            >
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-blue-01/10
                  px-3
                  py-1.5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.08em]
                  text-blue-01
                "
              >
                {
                  news.category
                }
              </span>

              <span
                aria-hidden="true"
                className="
                  hidden
                  size-1
                  rounded-full
                  bg-slate-300
                  sm:block
                "
              />

              <time
                dateTime={
                  news.publishedAt
                }
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.06em]
                  text-red-01
                "
              >
                {formatDate(
                  news.publishedAt,
                )}
              </time>
            </div>

            <h2
              id="news-dialog-title"
              className="
                mt-3
                max-w-3xl
                text-[21px]
                font-extrabold
                leading-7
                text-blue-01
                min-[350px]:text-[23px]
                min-[350px]:leading-8
                sm:text-[27px]
                sm:leading-9
                md:text-[30px]
                md:leading-10
              "
            >
              {news.title}
            </h2>

            <p
              id="news-dialog-description"
              className="
                mt-3
                max-w-3xl
                text-sm
                leading-7
                text-slate-500
                md:text-[15px]
                md:leading-7.5
              "
            >
              {news.content ??
                news.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(
    dialog,
    document.body,
  );
}