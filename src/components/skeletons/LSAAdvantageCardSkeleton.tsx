export default function LSAAdvantageCardSkeleton() {
    return (
        <article
            className="
        flex flex-col items-center text-center
      "
        >
            {/* Icon */}
            <div
                className="
          h-14 w-14 rounded-full
          bg-blue-01/10
          animate-pulse
        "
            />

            {/* Title */}
            <div
                className="
          mt-6
          h-6
          w-40
          rounded-md
          bg-blue-01/10
          animate-pulse
        "
            />

            {/* Description */}
            <div className="mt-3 flex w-full max-w-75 flex-col justify-center items-center gap-2">
                <div
                    className="
            h-4
            w-full
            rounded-md
            bg-blue-01/5
            animate-pulse
          "
                />

                <div
                    className="
            h-4
            w-5/6
            rounded-md
            bg-blue-01/5
            animate-pulse
          "
                />

                <div
                    className="
            h-4
            w-4/6
            rounded-md
            bg-blue-01/5
            animate-pulse
          "
                />
            </div>
        </article>
    );
}