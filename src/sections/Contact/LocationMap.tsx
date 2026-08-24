import {
  useMemo,
  useState,
} from "react";

import {
  useContactInfo,
} from "../../hooks/queries/useContactInfo";

import SectionState from "../../components/feedback/SectionState";

// ======================================================
// Convert Google Maps URL to iframe-compatible embed URL
// ======================================================

const getGoogleMapsEmbedUrl = (
  mapUrl: string,
): string | null => {
  try {
    const url =
      new URL(mapUrl);

    const query =
      url.searchParams.get(
        "query",
      ) ||
      url.searchParams.get(
        "q",
      );

    if (!query) {
      return null;
    }

    return `https://www.google.com/maps?q=${encodeURIComponent(
      query,
    )}&output=embed`;
  } catch {
    return null;
  }
};

export default function LocationMap() {
  const [
    loaded,
    setLoaded,
  ] = useState(false);

  const {
    data: contact,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useContactInfo();

  // ======================================================
  // Map URL From Backend
  // ======================================================

  const mapUrl =
    contact?.location
      ?.mapUrl?.trim() ||
    "";

  const googleMapsEmbedUrl =
    useMemo(
      () =>
        mapUrl
          ? getGoogleMapsEmbedUrl(
              mapUrl,
            )
          : null,
      [mapUrl],
    );

  // ======================================================
  // Loading
  // ======================================================

  if (isLoading) {
    return (
      <section
        className="
          relative
          left-1/2
          w-screen
          -translate-x-1/2
          overflow-hidden
        "
      >
        <div
          className="
            relative
            h-80
            w-full
            bg-[#ECEFF5]
            md:h-105
            lg:h-130
          "
        >
          <MapSkeleton />
        </div>
      </section>
    );
  }

  // ======================================================
  // Error
  // ======================================================

  if (isError) {
    return (
      <section
        className="
          relative
          left-1/2
          w-screen
          -translate-x-1/2
          px-container
        "
      >
        <SectionState
          variant="error"
          title="Unable to load location"
          message="We couldn't load our location right now. Please try again."
          onRetry={() => {
            void refetch();
          }}
          isRetrying={
            isFetching
          }
        />
      </section>
    );
  }

  // ======================================================
  // Empty
  // ======================================================

  if (
    !mapUrl ||
    !googleMapsEmbedUrl
  ) {
    return (
      <section
        className="
          relative
          left-1/2
          w-screen
          -translate-x-1/2
          px-container
        "
      >
        <SectionState
          variant="empty"
          title="Location not added yet"
          message="Our map location has not been published yet."
        />
      </section>
    );
  }

  // ======================================================
  // Success
  // ======================================================

  return (
    <section
      aria-label="Company location"
      className="
        relative
        left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
      "
    >
      <div
        className="
          relative
          h-80
          w-full
          bg-[#ECEFF5]
          md:h-105
          lg:h-130
        "
      >
        {!loaded && (
          <MapSkeleton />
        )}

        <iframe
          title={
            contact?.title ||
            "LSA Location"
          }
          src={
            googleMapsEmbedUrl
          }
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => {
            setLoaded(true);
          }}
          className={`
            absolute
            inset-0
            h-full
            w-full
            border-0
            transition-opacity
            duration-500
            ${
              loaded
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />
      </div>
    </section>
  );
}

// ======================================================
// Map Skeleton
// ======================================================

function MapSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="
        absolute
        inset-0
        z-10
        animate-pulse
        bg-[#ECEFF5]
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(35deg,transparent_48%,rgba(255,255,255,0.85)_49%,rgba(255,255,255,0.85)_51%,transparent_52%)]
          bg-size-[80px_80px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-14
          w-14
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-slate-400/50
          shadow-[0_0_0_14px_rgba(31,63,147,0.08)]
        "
      />
    </div>
  );
}