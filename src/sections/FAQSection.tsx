import TitleComponent from "../components/common/TitleComponent/TitleComponent";
import FAQItem from "../components/FAQItem";
import { faqData } from "../data/faqData";

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className = "" }: FAQSectionProps) => {
  const leftItems = faqData.filter((_, index) => index % 2 === 0);
  const rightItems = faqData.filter((_, index) => index % 2 !== 0);

  return (
    <section className={className}>
      <div>
          <TitleComponent
            title="Frequently Asked Questions"
            description="Clarifying our processes and capabilities for prospective partners."
          />

        <div className="grid gap-6 md:grid-cols-2">
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