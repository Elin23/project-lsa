export default function JobCardSkeleton() {

    return (
        <div
            className="
        rounded-2xl
        bg-white
        p-5 md:p-7 2xl:p-9
      "
        >

            <div
                className="
          flex flex-col gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
            >

                <div className="w-full">

                    {/* Title + Status */}

                    <div className="mb-3 flex items-center gap-3">

                        <div
                            className="
                h-7 w-56
                rounded-md
                bg-blue-01/10
                animate-pulse
              "
                        />


                        <div
                            className="
                h-6 w-16
                rounded-full
                bg-blue-01/5
                animate-pulse
              "
                        />

                    </div>




                    {/* Description */}

                    <div className="mb-5 space-y-2">

                        <div
                            className="
                h-4 w-full max-w-2xl
                rounded-md
                bg-blue-01/5
                animate-pulse
              "
                        />

                        <div
                            className="
                h-4 w-5/6
                rounded-md
                bg-blue-01/5
                animate-pulse
              "
                        />

                    </div>




                    {/* Meta */}

                    <div className="flex flex-wrap gap-4">

                        <div
                            className="
                h-4 w-28
                rounded-md
                bg-blue-01/5
                animate-pulse
              "
                        />


                        <div
                            className="
                h-4 w-24
                rounded-md
                bg-blue-01/5
                animate-pulse
              "
                        />


                        <div
                            className="
                h-4 w-32
                rounded-md
                bg-blue-01/5
                animate-pulse
              "
                        />

                    </div>

                </div>




                {/* Button */}

                <div
                    className="
            h-12 w-36
            rounded-xl
            bg-blue-01/10
            animate-pulse
          "
                />

            </div>

        </div>
    );
}