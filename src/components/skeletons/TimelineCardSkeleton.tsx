import Skeleton from "../ui/skeleton/Skeleton";

interface TimelineCardSkeletonProps {
    side: "left" | "right";
}

export default function TimelineCardSkeleton({
    side,
}: TimelineCardSkeletonProps) {
    const isLeft = side === "left";

    return (
        <div
            className={`relative flex items-center md:min-h-37.5 ${isLeft ? "md:justify-start" : "md:justify-end"
                }`}
        >
            <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-100/70 md:left-1/2" />

            <div className="ml-10 w-full p-5 md:ml-0 md:w-[46%] md:p-7 bg-white">
                <div className="mb-3 flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-md bg-blue-100/70" />

                    <Skeleton className="h-4 w-20 rounded-md bg-blue-100/70" />
                </div>

                <Skeleton className="h-7 w-3/4 rounded-md bg-blue-100/50" />

                <div className="mt-3 space-y-2">
                    <Skeleton className="h-4 w-full rounded-md bg-slate-100" />
                    <Skeleton className="h-4 w-5/6 rounded-md bg-slate-100" />
                </div>

                <Skeleton className="mt-4 h-7 w-24 rounded-full bg-blue-100/60" />
            </div>
        </div>
    );
}