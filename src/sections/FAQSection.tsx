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
      <TitleComponent
        title="Frequently Asked Questions"
        description="Clarifying our processes and capabilities for prospective partners."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:gap-8">
          {leftItems.map((item, index) => (
            <div
              key={item.question}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 60}
              data-aos-easing="ease-out"
              data-aos-offset="40"
              data-aos-once="true"
            >
              <FAQItem
                question={item.question}
                answer={item.answer}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {rightItems.map((item, index) => (
            <div
              key={item.question}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 60 + 40}
              data-aos-easing="ease-out"
              data-aos-offset="40"
              data-aos-once="true"
            >
              <FAQItem
                question={item.question}
                answer={item.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;