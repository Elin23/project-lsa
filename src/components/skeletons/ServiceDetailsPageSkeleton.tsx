import DirectionCardSkeleton from "./DirectionCardSkeleton";
import RelatedProjectCardSkeleton from "./RelatedProjectCardSkeleton";

export default function ServiceDetailsPageSkeleton() {
  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
      {/* Hero */}
      <div className="relative left-1/2 min-h-svh w-screen -translate-x-1/2 overflow-hidden bg-slate-200">
        <div className="absolute inset-0 animate-pulse bg-slate-300" />

        <div className="relative z-10 flex min-h-svh items-center justify-center px-5">
          <div className="w-full max-w-3xl space-y-5">
            <div className="mx-auto h-4 w-24 animate-pulse rounded-full bg-white/60" />

            <div className="mx-auto h-10 w-[85%] animate-pulse rounded-xl bg-white/70 sm:h-12" />

            <div className="mx-auto h-10 w-[65%] animate-pulse rounded-xl bg-white/70 sm:h-12" />

            <div className="mx-auto mt-6 h-4 w-[90%] animate-pulse rounded bg-white/50" />

            <div className="mx-auto h-4 w-[75%] animate-pulse rounded bg-white/50" />
          </div>
        </div>
      </div>

      {/* Delivery Process */}
      <section>
        <SectionTitleSkeleton />

        {/* Mobile */}
        <div className="mt-8 md:hidden">
          <DirectionCardSkeleton />
        </div>

        {/* Tablet / Desktop */}
        <div className="mt-20 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <DirectionCardSkeleton key={index} />
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="flex w-full flex-col gap-8 lg:flex-row lg:items-start xl:gap-10 2xl:gap-12">
        <div className="w-full lg:w-[31.53%] 2xl:w-[31.32%]">
          <div className="mx-auto h-1 w-12 animate-pulse rounded-full bg-slate-200 lg:mx-0" />

          <div className="mt-5 h-8 w-3/4 animate-pulse rounded-lg bg-slate-200" />

          <div className="mt-5 space-y-3">
            <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
          </div>

          <div className="mt-8 space-y-3.5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-16 w-full animate-pulse rounded-xl bg-slate-100"
              />
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:w-[67.11%] 2xl:w-[65.66%]">
          <div className="h-18 animate-pulse bg-slate-300" />

          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-5 border-t border-slate-100 p-5 md:p-6"
            >
              <div className="h-5 animate-pulse rounded bg-slate-200" />
              <div className="h-5 animate-pulse rounded bg-slate-100" />
              <div className="h-5 animate-pulse rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </section>

      {/* Related Projects */}
      <section className="pb-16 md:pb-20 lg:pb-24 xl:pb-28">
        <SectionTitleSkeleton />

        <div className="mt-8 md:hidden">
          <RelatedProjectCardSkeleton />
        </div>

        <div className="mt-8 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <RelatedProjectCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionTitleSkeleton() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center">
      <div className="h-8 w-64 animate-pulse rounded-lg bg-slate-200" />

      <div className="mt-4 h-4 w-full animate-pulse rounded bg-slate-100" />

      <div className="mt-2 h-4 w-4/5 animate-pulse rounded bg-slate-100" />
    </div>
  );
}