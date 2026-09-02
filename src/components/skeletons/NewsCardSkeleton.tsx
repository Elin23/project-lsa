interface NewsCardSkeletonProps {
  variant?: "featured" | "compact";
}

export default function NewsCardSkeleton({
  variant = "compact",
}: NewsCardSkeletonProps) {
  if (
    variant === "featured"
  ) {
    return (
      <div
        aria-hidden="true"
        className="
          h-full
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-[0_6px_24px_rgba(31,63,147,0.07)]
        "
      >
        <div
          className="
            h-52
            animate-pulse
            bg-slate-100
            sm:h-60
            lg:h-67
            xl:h-72
          "
        />

        <div className="p-5 sm:p-6">
          <div className="h-3 w-24 animate-pulse rounded bg-slate-100" />

          <div className="mt-3 h-6 w-4/5 animate-pulse rounded bg-slate-100" />

          <div className="mt-2 h-6 w-3/5 animate-pulse rounded bg-slate-100" />

          <div className="mt-4 h-3.5 w-full animate-pulse rounded bg-slate-100" />

          <div className="mt-2 h-3.5 w-4/5 animate-pulse rounded bg-slate-100" />

          <div className="mt-5 h-4 w-24 animate-pulse rounded bg-slate-100" />
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="
        grid
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-[0_6px_24px_rgba(31,63,147,0.07)]
        sm:grid-cols-[190px_minmax(0,1fr)]
        lg:grid-cols-[42%_58%]
      "
    >
      <div
        className="
          h-44
          animate-pulse
          bg-slate-100
          sm:h-full
          sm:min-h-44
        "
      />

      <div className="p-4 sm:p-5">
        <div className="h-3 w-20 animate-pulse rounded bg-slate-100" />

        <div className="mt-3 h-5 w-full animate-pulse rounded bg-slate-100" />

        <div className="mt-2 h-5 w-4/5 animate-pulse rounded bg-slate-100" />

        <div className="mt-3 h-3 w-full animate-pulse rounded bg-slate-100" />

        <div className="mt-2 h-3 w-3/4 animate-pulse rounded bg-slate-100" />

        <div className="mt-4 h-3.5 w-20 animate-pulse rounded bg-slate-100" />
      </div>
    </div>
  );
}