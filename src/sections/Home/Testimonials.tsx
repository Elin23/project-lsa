import Slider from "../../components/shared/Slider";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <section >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <Slider
          items={testimonialsData}
          renderItem={(active) => (
            <>
              <img
                src={active.image}
                alt={active.name}
                className="mx-auto mb-5 h-18.5 w-18.5 rounded-lg object-cover shadow-md"
              />

              <h3 className="text-lg lg-custom:text-xl font-bold text-[#111b3f]">
                {active.position}
              </h3>

              <p className="mt-1 text-[12px] huge:text-sm font-medium uppercase tracking-[1.5px] text-gray-500">
                {active.company}
              </p>

              <p className="mx-auto mt-8 max-w-3xl text-[18px] lg-custom:text-[24px] huge:text-[30px] font-medium italic leading-[1.35] text-blue-01">
                "{active.quote}"
              </p>
            </>
          )}
        />
      </div>
    </section>
  );
};

export default Testimonials;