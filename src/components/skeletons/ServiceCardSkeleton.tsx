import Skeleton from "../ui/skeleton/Skeleton";

interface ServiceCardSkeletonProps {
    reverse?: boolean;
}

export default function ServiceCardSkeleton({
    reverse = false,
}: ServiceCardSkeletonProps) {
    return (
        <div
            className="
        grid
        gap-6
        rounded-xl
        bg-white
        p-6
        md:grid-cols-2
      "
        >
            {/* Image */}
            <div className={reverse ? "md:order-2" : "md:order-1"}>
                <Skeleton className="h-75 w-full rounded-lg bg-slate-100" />
            </div>

            {/* Content */}
            <div
                className={`flex flex-col justify-center ${reverse ? "md:order-1" : "md:order-2"
                    }`}
            >
                {/* Title */}
                <Skeleton className="h-8 w-2/3 rounded-md bg-blue-100/70" />

                {/* Description */}
                <div className="mt-4 space-y-3">
                    <Skeleton className="h-4 w-full rounded-md bg-slate-100" />
                    <Skeleton className="h-4 w-11/12 rounded-md bg-slate-100" />
                    <Skeleton className="h-4 w-9/12 rounded-md bg-slate-100" />
                </div>

                {/* Features */}
                <div className="mt-5 space-y-3">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Skeleton className="h-3.75 w-3.75 rounded-full bg-red-100" />
                            <Skeleton className="h-4 flex-1 rounded-md bg-slate-100" />
                        </div>
                    ))}
                </div>

                {/* Button */}
                <Skeleton className="mt-6 h-11 w-36 rounded-lg bg-blue-100/70" />
            </div>
        </div>
    );
}