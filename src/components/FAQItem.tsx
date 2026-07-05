import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-[#E8EDF5]
        bg-white
        p-2
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#D8E7F7]
        hover:shadow-[0_12px_35px_rgba(31,101,180,0.08)]
      "
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-4 py-[15px] text-left"
      >
        <span
          className="
            text-[13px]
            md:text-base
            2xl:text-lg
            font-semibold
            leading-5
            text-[#1F3F93]
            transition-colors
            duration-300
            group-hover:text-blue-01
          "
        >
          {question}
        </span>

        <span
          className={`
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            text-xl
            font-medium
            text-[#1F3F93]
            transition-all
            duration-300
            ${
              isOpen
                ? "rotate-45 text-blue-01"
                : "group-hover:scale-110"
            }
          `}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-5 text-[12px] md:text-[12px] 2xl:text-[14px] leading-6 text-muted-blue">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;