import {
  useRef,
  useState,
} from "react";

import TitleComponent from "../../../components/shared/TitleComponent";

import NewsCard from "../../../components/news/NewsCard";
import NewsDetailsDialog from "../../../components/news/NewsDetailsDialog";

import { newsData } from "../../../data/newsData";

import type { NewsItem } from "../../../Types/news";

import Pagination from "../../../components/navigation/Pagination";

const NEWS_PER_PAGE = 3;

export default function NewsSection() {
  const contentRef =
    useRef<HTMLDivElement>(
      null,
    );

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const [
    selectedNews,
    setSelectedNews,
  ] =
    useState<NewsItem | null>(
      null,
    );

  const totalPages = Math.max(
    1,
    Math.ceil(
      newsData.length /
        NEWS_PER_PAGE,
    ),
  );

  const safeCurrentPage =
    Math.min(
      currentPage,
      totalPages,
    );

  const startIndex =
    (safeCurrentPage - 1) *
    NEWS_PER_PAGE;

  const visibleNews =
    newsData.slice(
      startIndex,
      startIndex +
        NEWS_PER_PAGE,
    );

  const featuredNews =
    visibleNews[0];

  const secondaryNews =
    visibleNews.slice(1);

  const handlePageChange = (
    page: number,
  ) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === safeCurrentPage
    ) {
      return;
    }

    setCurrentPage(page);

    requestAnimationFrame(
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
            block: "nearest",
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

        {newsData.length >
          0 && (
          <div
            ref={contentRef}
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
            {/* News Layout */}
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

                lg:grid-cols-12
                lg:items-stretch
                lg:gap-5

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

                    lg:col-span-8
                    lg:h-full
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

                    lg:col-span-4
                    lg:h-full
                    lg:min-h-0
                    lg:grid-cols-1
                    lg:grid-rows-[repeat(2,minmax(0,1fr))]
                    lg:gap-4
                  "
                >
                  {secondaryNews.map(
                    (
                      news,
                      index,
                    ) => (
                      <div
                        key={
                          news.id
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

                          lg:h-full
                          lg:min-h-0
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
                  mt-5
                  border-t
                  border-blue-01/8
                  px-1
                  pt-5

                  sm:mt-6
                  sm:pt-6
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