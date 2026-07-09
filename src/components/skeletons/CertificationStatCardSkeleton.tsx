import Skeleton from "../ui/skeleton/Skeleton";

export default function CertificationStatCardSkeleton() {
    return (
        <div className="rounded-xl bg-white px-6 py-6 text-center">
            <div className="flex flex-col items-center">
                <Skeleton className="h-10 w-24 rounded-md bg-blue-100/70" />

                <Skeleton className="mt-4 h-4 w-28 rounded-md bg-slate-100" />
            </div>
        </div>
    );
}