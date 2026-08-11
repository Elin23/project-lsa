export default function FleetCardSkeleton() {
  return (
    <div className="h-full">
      <article
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-slate-200/80
          bg-white
          shadow-[0_5px_18px_rgba(31,63,147,0.05)]
        "
      >
        {/* Image */}
        <div className="relative h-36 shrink-0 overflow-hidden bg-slate-200 sm:h-38">
          <div className="h-full w-full animate-pulse bg-slate-200" />

          <div className="absolute right-2.5 top-2.5 h-6 w-28 animate-pulse rounded-full bg-white/75" />

          <div className="absolute bottom-2.5 left-2.5 h-6 w-20 animate-pulse rounded-md bg-white/70" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          <div>
            <div className="h-3 w-24 animate-pulse rounded bg-slate-100" />

            <div className="mt-2 h-5 w-3/4 animate-pulse rounded bg-slate-200" />
          </div>

          <div className="mt-3 grid grid-cols-2 divide-x divide-slate-200 border-y border-slate-100 py-2.5">
            <div className="space-y-2 pr-3">
              <div className="h-2.5 w-14 animate-pulse rounded bg-slate-100" />

              <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
            </div>

            <div className="space-y-2 pl-3">
              <div className="h-2.5 w-14 animate-pulse rounded bg-slate-100" />

              <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
            </div>
          </div>

          <div className="mt-3 h-9 w-full animate-pulse rounded-lg bg-slate-100" />
        </div>
      </article>
    </div>
  );
}