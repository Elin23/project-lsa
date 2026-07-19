import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-xl
        border
        bg-white
        p-2
        transition-[border-color,box-shadow,background-color]
        duration-300
        ease-out
        ${
          isOpen
            ? "border-blue-01/25 bg-[#FBFDFF] shadow-[0_10px_28px_rgba(31,101,180,0.08)]"
            : "border-[#E8EDF5] hover:border-blue-01/20 hover:bg-[#FCFDFF] hover:shadow-[0_10px_26px_rgba(31,101,180,0.07)]"
        }
      `}
    >
      <span
        aria-hidden="true"
        className={`
          absolute
          bottom-0
          left-0
          top-0
          w-[3px]
          bg-blue-01
          transition-opacity
          duration-300
          ease-out
          ${
            isOpen
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }
        `}
      />

      <button
        type="button"
        onClick={() => setIsOpen((previousState) => !previousState)}
        aria-expanded={isOpen}
        className="
          relative
          flex
          w-full
          cursor-pointer
          items-center
          justify-between
          gap-4
          rounded-lg
          px-4
          py-3.75
          text-left
          outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-01/20
        "
      >
        <span
          className={`
            text-[13px]
            font-semibold
            leading-5
            transition-colors
            duration-300
            ease-out
            md:text-base
            2xl:text-lg
            ${
              isOpen
                ? "text-blue-01"
                : "text-[#1F3F93] group-hover:text-blue-01"
            }
          `}
        >
          {question}
        </span>

        <span
          aria-hidden="true"
          className={`
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            text-lg
            font-medium
            leading-none
            transition-[border-color,background-color,color]
            duration-300
            ease-out
            ${
              isOpen
                ? "border-blue-01 bg-blue-01 text-white"
                : "border-[#D8E1EC] bg-white text-[#1F3F93] group-hover:border-blue-01 group-hover:bg-blue-01 group-hover:text-white"
            }
          `}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`
          grid
          transition-[grid-template-rows,opacity]
          duration-300
          ease-in-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-5 text-[12px] leading-6 text-muted-blue md:text-[13px] 2xl:text-[14px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;