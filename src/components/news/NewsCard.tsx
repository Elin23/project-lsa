import { GoArrowRight } from "react-icons/go";
import { Images } from "lucide-react";

import type { NewsItem } from "../../Types/news";

interface NewsCardProps {
  news: NewsItem;
  variant?: "featured" | "compact";
  onOpen: (news: NewsItem) => void;
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

export default function NewsCard({
  news,
  variant = "compact",
  onOpen,
}: NewsCardProps) {
  const primaryImage = news.image;

  if (!primaryImage?.url) {
    return null;
  }

  if (variant === "featured") {
    return (
      <article
        className="
          group
          flex
          h-full
          min-w-0
          flex-col
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-[0_6px_24px_rgba(31,63,147,0.07)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_15px_38px_rgba(31,63,147,0.12)]
        "
      >
        {/* Image */}
        <button
          type="button"
          onClick={() => onOpen(news)}
          aria-label={`Read ${news.title}`}
          className="
            group/image
            relative
            block
            h-44
            w-full
            shrink-0
            overflow-hidden
            text-left
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-01
            focus-visible:ring-inset

            min-[350px]:h-48
            sm:h-56
            md:h-64
            lg:h-72
            xl:h-72
            2xl:h-76
          "
        >
          <img
            src={primaryImage.url}
            alt={primaryImage.alt || news.title}
            loading="lazy"
            decoding="async"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover/image:scale-[1.035]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-blue-01/20
              via-transparent
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover/image:opacity-100
            "
          />

          <span
            className="
              absolute
              left-3
              top-3
              rounded-lg
              bg-blue-01
              px-2.5
              py-1
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.08em]
              text-white
              shadow-sm

              sm:left-4
              sm:top-4
              sm:px-3
              sm:py-1.5
              sm:text-[10px]
            "
          >
            {news.category}
          </span>

          <span
            className="
              absolute
              bottom-3
              right-3
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-white/95
              px-2.5
              py-1
              text-[10px]
              font-bold
              text-blue-01
              shadow-sm
              backdrop-blur-sm

              sm:bottom-4
              sm:right-4
              sm:px-3
              sm:py-1.5
              sm:text-[11px]
            "
          >
            <Images
              aria-hidden="true"
              size={13}
            />

            1
          </span>
        </button>

        {/* Content */}
        <div
          className="
            flex
            min-h-0
            flex-1
            flex-col
            p-4
            sm:p-5
            md:p-6
          "
        >
          <time
            dateTime={news.publishedAt}
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-red-01

              sm:text-[11px]
            "
          >
            {formatDate(
              news.publishedAt,
            )}
          </time>

          <h3
            className="
              mt-2
              line-clamp-2
              text-lg
              font-extrabold
              leading-6
              text-blue-01

              min-[350px]:text-xl
              min-[350px]:leading-7

              md:text-[22px]
              md:leading-8
            "
          >
            {news.title}
          </h3>

          <p
            className="
              mt-2
              line-clamp-2
              text-sm
              leading-6
              text-muted-blue
            "
          >
            {
              news.shortDescription
            }
          </p>

          <button
            type="button"
            onClick={() =>
              onOpen(news)
            }
            className="
              group/button
              mt-auto
              inline-flex
              w-fit
              items-center
              gap-2
              pt-4
              text-xs
              font-extrabold
              text-blue-01
              transition-colors
              duration-300
              hover:text-red-01
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-01
              focus-visible:ring-offset-4

              sm:text-sm
            "
          >
            Read More

            <GoArrowRight
              aria-hidden="true"
              className="
                text-lg
                transition-transform
                duration-300
                group-hover/button:translate-x-1
              "
            />
          </button>
        </div>
      </article>
    );
  }

  return (
    <article
      className="
        group
        flex
        h-full
        min-h-0
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-[0_6px_24px_rgba(31,63,147,0.07)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_14px_34px_rgba(31,63,147,0.11)]

        xl:grid
        xl:grid-cols-[42%_minmax(0,58%)]
      "
    >
      {/* Image */}
      <button
        type="button"
        onClick={() =>
          onOpen(news)
        }
        aria-label={`Read ${news.title}`}
        className="
          group/image
          relative
          h-36
          w-full
          shrink-0
          overflow-hidden
          text-left
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-01
          focus-visible:ring-inset

          min-[350px]:h-40
          sm:h-44
          md:h-48
          lg:h-52

          xl:h-full
          xl:min-h-0
        "
      >
        <img
          src={primaryImage.url}
          alt={
            primaryImage.alt ||
            news.title
          }
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover/image:scale-[1.045]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-blue-01/15
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover/image:opacity-100
          "
        />

        <span
          className="
            absolute
            left-2.5
            top-2.5
            rounded-md
            bg-blue-01
            px-2.5
            py-1
            text-[9px]
            font-extrabold
            uppercase
            tracking-[0.07em]
            text-white

            sm:left-3
            sm:top-3
          "
        >
          {news.category}
        </span>
      </button>

      {/* Content */}
      <div
        className="
          flex
          min-h-0
          min-w-0
          flex-1
          flex-col
          p-4

          sm:p-5

          xl:p-4

          2xl:p-5
        "
      >
        <time
          dateTime={
            news.publishedAt
          }
          className="
            shrink-0
            text-[10px]
            font-extrabold
            uppercase
            tracking-[0.08em]
            text-red-01
          "
        >
          {formatDate(
            news.publishedAt,
          )}
        </time>

        <h3
          className="
            mt-2
            line-clamp-2
            overflow-hidden
            text-base
            font-extrabold
            leading-6
            text-blue-01

            sm:text-[17px]
            sm:leading-6.5

            md:text-lg
            md:leading-7

            xl:text-base
            xl:leading-6

            2xl:text-[17px]
            2xl:leading-6.5
          "
        >
          {news.title}
        </h3>

        <p
          className="
            mt-1.5
            line-clamp-2
            overflow-hidden
            text-xs
            leading-5
            text-muted-blue

            min-[350px]:text-sm

            xl:text-xs

            2xl:text-sm
          "
        >
          {
            news.shortDescription
          }
        </p>

        <button
          type="button"
          onClick={() =>
            onOpen(news)
          }
          className="
            group/button
            mt-auto
            inline-flex
            w-fit
            shrink-0
            items-center
            gap-1.5
            pt-3
            text-xs
            font-extrabold
            text-blue-01
            transition-colors
            duration-300
            hover:text-red-01
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-01
            focus-visible:ring-offset-3
          "
        >
          Read More

          <GoArrowRight
            aria-hidden="true"
            className="
              text-base
              transition-transform
              duration-300
              group-hover/button:translate-x-1
            "
          />
        </button>
      </div>
    </article>
  );
}