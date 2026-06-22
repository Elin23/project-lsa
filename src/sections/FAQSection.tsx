import FAQItem from "../components/FAQItem";
import { faqData } from "../data/faqData";

const FAQSection = () => {
  const leftItems = faqData.filter((_, index) => index % 2 === 0);
  const rightItems = faqData.filter((_, index) => index % 2 !== 0);

  return (
    <section className="bg-[#F7F8FC] py-16 lg:py-[72px]">
      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-[#1F3F93] md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Clarifying our processes and capabilities for prospective partners.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            {leftItems.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {rightItems.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;