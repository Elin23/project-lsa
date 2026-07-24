import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import AboutCompanyHighlightItem from "../../components/AboutCompanyHighlightItem";

import { aboutCompanyContent } from "../../data/aboutCompanyData";
import aboutCompanyImage from "../../assets/LogoAbout.png";

export default function AboutCompanySection() {
  return (
    <section aria-labelledby="about-company-title">
      <div id="about-company-title">
        <TitleComponent
          title={aboutCompanyContent.title}
          description={aboutCompanyContent.description}
        />
      </div>

      <div
        className="
          mt-6 grid items-center gap-12
          lg:grid-cols-[1.05fr_0.95fr]
          xl:gap-16
          2xl:gap-20
        "
      >
        {/* Text */}
        <div
          data-aos="fade-right"
          className="max-w-[720px]"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="
              inline-flex items-center gap-3
              text-xs font-bold uppercase tracking-[0.18em]
              text-red-01
            "
          >
            <span className="h-px w-10 bg-red-01" />
            {aboutCompanyContent.eyebrow}
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-7 space-y-6"
          >
            {aboutCompanyContent.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="
                  text-sm leading-8 text-muted-blue
                  md:text-base md:leading-8
                "
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Logo */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="
            flex justify-center
            lg:justify-end lg:pt-6
          "
        >
          <div className="aspect-square w-full max-w-[440px]">
            <img
              src={aboutCompanyImage}
              alt="Loaloat Shatt Al-Arab Company Logo"
              className="h-[95%] w-[95%] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div
        className="
          mt-16 grid gap-7
          md:grid-cols-3
          xl:mt-20 xl:gap-8
        "
      >
        {aboutCompanyContent.highlights.map((item, index) => (
          <AboutCompanyHighlightItem
            key={item.title}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}