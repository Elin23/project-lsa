import {
  useRef,
  useState,
} from "react";

import type { NewsItem } from "../../../Types/news";

import TitleComponent from "../../../components/shared/TitleComponent";
import NewsCard from "../../../components/news/NewsCard";
import NewsDetailsDialog from "../../../components/news/NewsDetailsDialog";
import SectionState from "../../../components/feedback/SectionState";
import Pagination from "../../../components/navigation/Pagination";

import { useNews } from "../../../hooks/queries/useNews";

const ITEMS_PER_PAGE = 3;

export default function NewsSection() {
  const contentRef =
    useRef<HTMLDivElement>(
      null,
    );

  const [
    selectedNews,
    setSelectedNews,
  ] =
    useState<NewsItem | null>(
      null,
    );

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const {
    data: newsItems = [],
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useNews();

  const totalPages =
    Math.ceil(
      newsItems.length /
        ITEMS_PER_PAGE,
    );

  const safeCurrentPage =
    totalPages > 0
      ? Math.min(
          currentPage,
          totalPages,
        )
      : 1;

  const startIndex =
    (safeCurrentPage - 1) *
    ITEMS_PER_PAGE;

  const currentNewsItems =
    newsItems.slice(
      startIndex,
      startIndex +
        ITEMS_PER_PAGE,
    );

  const featuredNews =
    currentNewsItems[0];

  const secondaryNews =
    currentNewsItems.slice(
      1,
      3,
    );

  const handlePageChange = (
    page: number,
  ) => {
    if (
      page < 1 ||
      page > totalPages ||
      page ===
        safeCurrentPage
    ) {
      return;
    }

    setCurrentPage(page);

    window.requestAnimationFrame(
      () => {
        const prefersReducedMotion =
          window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;

        contentRef.current?.scrollIntoView(
          {
            behavior:
              prefersReducedMotion
                ? "auto"
                : "smooth",
            block: "start",
          },
        );
      },
    );
  };

  return (
    <>
      <section id="latest-news">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <TitleComponent
            title="Latest News"
            description="Discover our latest projects, achievements, and company updates as we continue delivering engineering excellence across the region."
          />
        </div>

        {isLoading ? (
          <div
            ref={
              contentRef
            }
            className="
              rounded-3xl
              bg-[#F7F8FD]
              p-3
              sm:p-4
              md:p-5
              lg:p-6
              xl:p-7
            "
          >
            <div
              className="
                grid
                min-w-0
                grid-cols-1
                gap-4
                md:gap-5

                xl:grid-cols-12
                xl:items-stretch
                xl:gap-6
              "
            >
              {/* Featured Skeleton */}
              <div
                className="
                  min-w-0
                  xl:col-span-8
                "
              >
                <div
                  className="
                    h-105
                    animate-pulse
                    rounded-2xl
                    bg-slate-200

                    sm:h-115
                    md:h-120
                    lg:h-125
                    xl:h-full
                    xl:min-h-125
                  "
                />
              </div>

              {/* Secondary Skeletons */}
              <div
                className="
                  grid
                  min-w-0
                  grid-cols-1
                  gap-4

                  sm:grid-cols-2

                  md:gap-5

                  xl:col-span-4
                  xl:grid-cols-1
                  xl:grid-rows-2
                  xl:gap-4
                "
              >
                <div
                  className="
                    h-72
                    animate-pulse
                    rounded-2xl
                    bg-slate-200

                    sm:h-80
                    md:h-88
                    lg:h-96

                    xl:h-auto
                    xl:min-h-0
                  "
                />

                <div
                  className="
                    h-72
                    animate-pulse
                    rounded-2xl
                    bg-slate-200

                    sm:h-80
                    md:h-88
                    lg:h-96

                    xl:h-auto
                    xl:min-h-0
                  "
                />
              </div>
            </div>
          </div>
        ) : isError ? (
          <SectionState
            variant="error"
            title="Unable to load latest news"
            message="We couldn't load the latest news right now. Please try again in a moment."
            onRetry={() => {
              void refetch();
            }}
            isRetrying={
              isFetching
            }
          />
        ) : newsItems.length ===
          0 ? (
          <SectionState
            variant="empty"
            title="No news available"
            message="There are no published news articles available right now."
          />
        ) : (
          <>
            <div
              ref={
                contentRef
              }
              className="
                rounded-3xl
                bg-[#F7F8FD]
                p-3
                sm:p-4
                md:p-5
                lg:p-6
                xl:p-7
              "
            >
              <div
                key={
                  safeCurrentPage
                }
                className="
                  grid
                  min-w-0
                  grid-cols-1
                  gap-4

                  md:gap-5

                  xl:grid-cols-12
                  xl:items-stretch
                  xl:gap-6
                "
              >
                {/* Featured News */}
                {featuredNews && (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="550"
                    className="
                      min-w-0
                      xl:col-span-8
                      xl:h-full
                    "
                  >
                    <NewsCard
                      news={
                        featuredNews
                      }
                      variant="featured"
                      onOpen={
                        setSelectedNews
                      }
                    />
                  </div>
                )}

                {/* Secondary News */}
                {secondaryNews.length >
                  0 && (
                  <div
                    className="
                      grid
                      min-w-0
                      grid-cols-1
                      gap-4

                      sm:grid-cols-2

                      md:gap-5

                      xl:col-span-4
                      xl:h-full
                      xl:min-h-0
                      xl:grid-cols-1
                      xl:grid-rows-2
                      xl:gap-4
                    "
                  >
                    {secondaryNews.map(
                      (
                        news,
                        index,
                      ) => (
                        <div
                          key={
                            news._id
                          }
                          data-aos="fade-up"
                          data-aos-delay={
                            70 +
                            index *
                              60
                          }
                          data-aos-duration="550"
                          className="
                            min-w-0
                            xl:h-full
                            xl:min-h-0
                          "
                        >
                          <NewsCard
                            news={
                              news
                            }
                            variant="compact"
                            onOpen={
                              setSelectedNews
                            }
                          />
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages >
                1 && (
                <div
                  className="
                    mt-6
                    border-t
                    border-slate-200/80
                    pt-6
                    md:mt-7
                    md:pt-7
                  "
                >
                  <Pagination
                    currentPage={
                      safeCurrentPage
                    }
                    totalPages={
                      totalPages
                    }
                    onPageChange={
                      handlePageChange
                    }
                  />
                </div>
              )}
            </div>
          </>
        )}
      </section>

      <NewsDetailsDialog
        news={selectedNews}
        onClose={() =>
          setSelectedNews(
            null,
          )
        }
      />
    </>
  );
}