import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden flex flex-col rounded-xl border border-[#DDE8F7] bg-white shadow-sm transition-all duration-300 hover:shadow-md p-2 ">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-4 py-[15px] text-left"
      >
        <span className="text-[13px] md:text-base 2xl:text-lg font-semibold leading-5 text-[#1F3F93]  ">
          {question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center text-xl font-medium text-[#1F3F93] transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
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
          <p className="px-4 pb-5 text-[12px] md:text-[12px] 2xl:text-[14px]  leading-5 text-muted-blue">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;