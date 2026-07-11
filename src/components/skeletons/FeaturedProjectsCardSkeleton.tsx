import Skeleton from "../../components/ui/skeleton/Skeleton";

export default function FeaturedProjectsCardSkeleton() {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-black">
            {/* Image */}
            <Skeleton className="h-[270px] w-full rounded-none" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08162d]/95 via-[#08162d]/20 to-transparent" />

            {/* Category */}
            <div className="absolute left-6 top-6">
                <Skeleton className="h-8 w-28 rounded-full bg-white/10" />
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-end justify-between gap-5">
                    <div className="w-full">
                        <Skeleton className="mb-4 h-6 w-3/4 bg-white/10" />
                        <Skeleton className="h-[2px] w-12 bg-white/10" />
                    </div>
                </div>
            </div>
        </div>
    );
}