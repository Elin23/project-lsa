import Skeleton from "../ui/skeleton/Skeleton";

export default function TeamCardSkeleton() {
    return (
        <article className="relative aspect-4/5 overflow-hidden rounded-2xl bg-white">
            {/* Image */}
            <Skeleton className="h-full w-full rounded-none bg-slate-100" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white " />

            {/* Content */}
            <div className="absolute bottom-5 left-0 right-0 px-5">
                <Skeleton className="h-6 w-24 rounded-full bg-blue-100/70" />

                <Skeleton className="mt-4 h-6 w-3/4 rounded-md bg-blue-100/70" />

                <Skeleton className="mt-3 h-4 w-1/2 rounded-md bg-slate-100" />

                <Skeleton className="mt-5 h-0.5 w-12 rounded-full bg-white/60" />
            </div>
        </article>
    );
}