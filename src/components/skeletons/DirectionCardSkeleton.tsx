import Skeleton from "../ui/skeleton/Skeleton";

export default function DirectionCardSkeleton() {
    return (
        <div className="relative overflow-hidden rounded-xl bg-white p-5 md:p-6 2xl:p-7">

            {/* Header */}
            <div className="relative mb-4 flex items-center gap-4 2xl:mb-5">
                <Skeleton className="h-11 w-11 rounded-lg bg-blue-100/70" />

                <Skeleton className="h-7 w-44 rounded-md bg-blue-100/60" />
            </div>

            {/* Description */}
            <div className="space-y-2">
                <Skeleton className="h-4 w-full rounded-md bg-slate-100" />
                <Skeleton className="h-4 w-11/12 rounded-md bg-slate-100" />
                <Skeleton className="h-4 w-9/12 rounded-md bg-slate-100" />
            </div>

            {/* Features */}
            <div className="mt-5 space-y-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <Skeleton className="mt-1 h-4.5 w-4.5 rounded-full bg-blue-100/70" />

                        <Skeleton className="h-4 flex-1 rounded-md bg-slate-100" />
                    </div>
                ))}
            </div>
        </div>
    );
}