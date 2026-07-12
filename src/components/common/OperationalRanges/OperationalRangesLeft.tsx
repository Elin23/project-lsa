import React from "react";
import { Check } from "lucide-react";

interface OperationalRangesContentProps {
  title: string;
  description: string;
  sideNotes: string[];
}

const OperationalRangesContent: React.FC<OperationalRangesContentProps> = ({
  title,
  description,
  sideNotes,
}) => {
  return (
    <div className="flex w-full flex-col lg:w-[31.53%] 2xl:w-[31.32%]">
      <div className="text-center lg:text-start">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-red-01 lg:mx-0" />

        <h2 className="text-[24px] font-bold leading-tight text-blue-01 md:text-[30px] 2xl:text-[36px]">
          {title}
        </h2>

        <p className="mt-5 text-sm leading-7 text-muted-blue md:text-base md:leading-8 2xl:text-lg">
          {description}
        </p>
      </div>

      <div className="mt-7 flex flex-col gap-3.5 md:mt-8">
        {sideNotes.map((note) => (
          <div
            key={note}
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              border
              border-[#DCE5F3]
              bg-white
              px-5
              py-4
              shadow-[0_4px_16px_rgba(0,35,111,0.035)]
              transition-[border-color,box-shadow,background-color]
              duration-300
              ease-out
              hover:border-blue-01/25
              hover:bg-[#FCFDFF]
              hover:shadow-[0_10px_26px_rgba(0,35,111,0.07)]
              md:px-6
              md:py-5
            "
          >
            <span
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-0
                top-0
                w-[3px]
                bg-blue-01
                opacity-35
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            <div className="relative flex items-start gap-3">
              <span
                className="
                  mt-0.5
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-01/8
                  text-blue-01
                  transition-[background-color,color]
                  duration-300
                  group-hover:bg-blue-01
                  group-hover:text-white
                "
              >
                <Check size={15} strokeWidth={2.5} />
              </span>

              <p
                className="
                  text-sm
                  font-semibold
                  leading-6
                  text-blue-01
                  transition-colors
                  duration-300
                  group-hover:text-blue-02
                  md:text-base
                  2xl:text-lg
                "
              >
                {note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperationalRangesContent;