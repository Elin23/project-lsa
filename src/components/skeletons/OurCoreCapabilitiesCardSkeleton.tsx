import Skeleton from "../ui/skeleton/Skeleton";

export default function OurCoreCapabilitiesCardSkeleton() {
    return (
        <article
            className="
        h-full
        overflow-hidden
        rounded-2xl
        border border-[#E8EDF5]
        bg-white
        p-7
      "
        >
            <div className="mb-6 flex justify-end">
                <Skeleton className="h-12 w-16" />
            </div>

            <Skeleton className="mb-4 h-7 w-3/5" />

            <Skeleton className="mb-3 h-4 w-full" />
            <Skeleton className="mb-3 h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
        </article>
    );
}