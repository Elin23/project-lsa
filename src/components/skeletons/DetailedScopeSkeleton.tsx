import Skeleton from "../ui/skeleton/Skeleton";

export default function DetailedScopeSkeleton() {
    return (
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
            {/* Left Skeleton */}
            <div
                className="
          h-max
          w-full
          rounded-2xl
          bg-white
          p-8
          lg:w-[31.75%]
          2xl:w-[32.14%]
        "
            >
                <Skeleton className="h-8 w-52 rounded-md bg-slate-100" />

                <div className="mt-8 divide-y divide-slate-100">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="py-4">
                            <Skeleton className="h-3 w-24 rounded-md bg-slate-100" />

                            <Skeleton className="mt-3 h-6 w-40 rounded-md bg-slate-50" />
                        </div>
                    ))}
                </div>
            </div>


            {/* Right Skeleton */}
            <div
                className="
          w-full
          rounded-2xl
          bg-white
          p-8
          lg:w-[68.42%]
          2xl:w-[66.10%]
        "
            >
                <Skeleton className="h-12 w-3/4 rounded-md bg-slate-100" />

                <div className="mt-5 space-y-3">
                    <Skeleton className="h-5 w-full rounded-md bg-slate-50" />
                    <Skeleton className="h-5 w-11/12 rounded-md bg-slate-50" />

                    <div className="flex flex-col justify-between gap-6 sm:flex-row">
                        {Array.from({ length: 2 }).map((_, index) => (
                            <div
                                key={index}
                                className="
                  w-full
                  rounded-xl
                  bg-[#F9F9FF]
                  p-6
                "
                            >
                                <Skeleton className="h-6 w-40 rounded-md bg-slate-100" />

                                <Skeleton className="mt-4 h-4 w-full rounded-md bg-slate-50" />
                                <Skeleton className="mt-2 h-4 w-5/6 rounded-md bg-slate-50" />
                            </div>
                        ))}
                    </div>

                    <Skeleton className="mt-5 h-5 w-full rounded-md bg-slate-50" />
                </div>
            </div>
        </div>
    );
}