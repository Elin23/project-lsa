import Skeleton from "../ui/skeleton/Skeleton";

export default function GalleryCardSkeleton() {
    return (
        <div
            className="
        overflow-hidden
        rounded-2xl
        bg-white
      "
        >
            <Skeleton
                className="
          h-65
          w-full
          rounded-2xl
          bg-slate-100
        "
            />
        </div>
    );
}