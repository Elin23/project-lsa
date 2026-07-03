import React from "react";

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
      <h2 className="text-center xl:text-start text-[24px] md:text-[30px] 2xl:text-[36px] font-bold leading-tight text-blue-01">
        {title}
      </h2>

      <p className="mt-6 text-center xl:text-start text-sm md:text-base 2xl:text-lg leading-8 text-muted-blue">
        {description}
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {sideNotes.map((note) => (
          <div
            key={note}
            className="rounded-xl border border-[#CFDAF1] bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-01 hover:shadow-lg"
          >
            <p className="text-base md:text-lg font-semibold text-blue-01 transition-colors duration-300 hover:text-red-01">
              {note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperationalRangesContent;