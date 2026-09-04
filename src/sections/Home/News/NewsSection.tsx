// src/sections/.../NewsSection.tsx

import { useRef, useState } from "react";

import TitleComponent from "../../../components/shared/TitleComponent";
import NewsCard from "../../../components/news/NewsCard";
import NewsDetailsDialog from "../../../components/news/NewsDetailsDialog";
import SectionState from "../../../components/feedback/SectionState";
import { useNews } from "../../../hooks/queries/useNews";
import Pagination from "../../../components/navigation/Pagination";

export default function NewsSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  const [selectedNews, setSelectedNews] = useState<
    ReturnType<typeof useNews>["data"] extends infer T
    ? T extends (infer U)[]
    ? U | null
    : null
    : null
  >(null);

  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: newsItems = [],
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useNews();

  const itemsPerPage = 3;

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentNewsItems = newsItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const featuredNews = currentNewsItems[0];
  const secondaryNews = currentNewsItems.slice(1, 3);

  return (
    <>
      <section id="latest-news">
        <div data-aos="fade-up" data-aos-duration="600">
          <TitleComponent
            title="Latest News"
            description="Discover our latest projects, achievements, and company updates as we continue delivering engineering excellence across the region."
          />
        </div>

        {isLoading ? (
          <div
            ref={contentRef}
            className="rounded-3xl bg-[#F7F8FD] sm:p-4 md:p-5 lg:p-6 xl:p-7"
          >
            <div className="grid min-w-0 grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-5 xl:gap-6">
              <div className="min-w-0 lg:col-span-8 lg:h-full">
                <div className="h-125 animate-pulse rounded-2xl bg-slate-200" />
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-4 lg:h-full lg:min-h-0 lg:grid-cols-1 lg:grid-rows-2 lg:gap-4">
                <div className="min-h-44 animate-pulse rounded-2xl bg-slate-200" />
                <div className="min-h-44 animate-pulse rounded-2xl bg-slate-200" />
              </div>
            </div>
          </div>
        ) : isError ? (
          <SectionState
            variant="error"
            title="Unable to load latest news"
            message="We couldn't load the latest news right now. Please try again in a moment."
            onRetry={() => void refetch()}
            isRetrying={isFetching}
          />
        ) : newsItems.length === 0 ? (
          <SectionState
            variant="empty"
            title="No news available"
            message="There are no published news articles available right now."
          />
        ) : (
          <>
            <div
              ref={contentRef}
              className="rounded-3xl bg-[#F7F8FD] sm:p-4 md:p-5 lg:p-6 xl:p-7"
            >
              <div className="grid min-w-0 grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-5 xl:gap-6">
                {featuredNews && (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="550"
                    className="min-w-0 lg:col-span-8 lg:h-full"
                  >
                    <NewsCard
                      news={featuredNews}
                      variant="featured"
                      onOpen={setSelectedNews}
                    />
                  </div>
                )}

                {secondaryNews.length > 0 && (
                  <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-4 lg:h-full lg:min-h-0 lg:grid-cols-1 lg:grid-rows-2 lg:gap-4">
                    {secondaryNews.map((news, index) => (
                      <div
                        key={news._id}
                        data-aos="fade-up"
                        data-aos-delay={70 + index * 60}
                        data-aos-duration="550"
                        className="min-w-0 lg:h-full lg:min-h-0"
                      >
                        <NewsCard
                          news={news}
                          variant="compact"
                          onOpen={setSelectedNews}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => {
                    setCurrentPage(page);

                    window.requestAnimationFrame(() => {
                      contentRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    });
                  }}
                />
              </div>
            )}
          </>
        )}
      </section>

      <NewsDetailsDialog
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
      />
    </>
  );
}