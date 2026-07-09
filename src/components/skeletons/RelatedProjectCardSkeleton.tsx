import Skeleton from "../ui/skeleton/Skeleton";

export default function RelatedProjectCardSkeleton() {
    return (
        <div
            className="
        overflow-hidden
        rounded-xl
        bg-white
      "
        >
            {/* Image */}
            <div className="relative h-52.5 overflow-hidden">
                <Skeleton className="h-full w-full rounded-none bg-slate-100" />

                {/* Category */}
                <div className="absolute left-5 top-5">
                    <Skeleton className="h-7 w-28 rounded-full bg-white/60" />
                </div>

                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                    <Skeleton className="h-7 w-3/4 rounded-md bg-white/50" />

                    <Skeleton className="mt-4 h-0.5 w-12 rounded-full bg-red-100" />
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <Skeleton className="h-4 w-full rounded-md bg-slate-100" />
                <Skeleton className="mt-3 h-4 w-11/12 rounded-md bg-slate-100" />
                <Skeleton className="mt-3 h-4 w-9/12 rounded-md bg-slate-100" />

                {/* Button */}
                <Skeleton className="mt-6 h-5 w-28 rounded-md bg-red-100" />
            </div>
        </div>
    );
}