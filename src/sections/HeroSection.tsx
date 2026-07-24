import type { ReactNode } from "react";
import ButtonComponent from "../components/shared/ButtonComponent";

interface HeroButton {
  text: string;
  to?: string;
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "outline";
}

interface HeroSectionProps {
  image: string;
  title: string;
  description?: string;
  buttons?: HeroButton[];
  className?: string;
  bottomContent?: ReactNode;
}

const HeroSection = ({
  image,
  title,
  description,
  buttons = [],
  className = "",
  bottomContent,
}: HeroSectionProps) => {
  const hasBottomContent = Boolean(bottomContent);

  return (
    <section
      className={`
        relative
        left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#102344]
        md:h-[100svh]
        ${className}
      `}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        data-priority="true"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          brightness-[1.08]
          contrast-[0.96]
          saturate-[1.08]
        "
      />

      {/* Light blur layer over the image */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          backdrop-blur-[2.5px]
        "
      />

      {/* Very light general overlay */}
      <div className="absolute inset-0 bg-[#071225]/5" />

      {/* Light vertical overlay */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-b
          from-white/8
          via-transparent
          to-[#071225]/60
        "
      />

      {/* Soft side contrast for text readability */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-[#071225]/16
          via-transparent
          to-[#071225]/12
        "
      />

      {/* Soft daylight from upper center */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[22%]
          h-80
          w-[85%]
          max-w-5xl
          -translate-x-1/2
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      {/* Central warm lighting */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[48%]
          h-56
          w-[70%]
          max-w-3xl
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/7
          blur-2xl
        "
      />

      {/* Subtle optimistic warm highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[16%]
          h-52
          w-52
          rounded-full
          bg-amber-100/8
          blur-3xl
        "
      />

      <div
        className={`
          relative
          z-10
          flex
          h-full
          flex-col
          ${
            hasBottomContent
              ? "min-h-[calc(100svh-72px)]"
              : "max-h-[calc(100svh-72px)]"
          }
        `}
      >
        {/* Main Hero Content */}
        <div
          className={`
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-1
            flex-col
            items-center
            justify-center
            px-5
            pt-28
            text-center
            sm:px-8
            lg:px-10
            ${
              hasBottomContent
                ? "py-12 sm:py-14 md:py-16 lg:py-18"
                : "py-10 sm:py-12 md:py-14 lg:py-16"
            }
          `}
        >
          {/* Small decorative accent */}
          <div
            aria-hidden="true"
            className="mb-4 flex items-center gap-2 sm:mb-5"
          >
            <span className="h-px w-7 bg-white/55 sm:w-9" />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-red-01
                shadow-[0_0_10px_rgba(200,16,46,0.45)]
              "
            />

            <span className="h-px w-7 bg-white/55 sm:w-9" />
          </div>

          {/* Title */}
          <h1
            className="
              max-w-210
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.02em]
              text-white
              drop-shadow-[0_3px_16px_rgba(7,18,37,0.45)]
              sm:text-[36px]
              md:text-[44px]
              md:leading-[1.12]
              lg:text-[50px]
              xl:text-[56px]
              2xl:max-w-240
              2xl:text-[60px]
            "
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              className="
                mt-4
                max-w-175
                line-clamp-3
                text-[13px]
                leading-6
                text-white/90
                drop-shadow-[0_2px_10px_rgba(7,18,37,0.4)]
                sm:mt-5
                sm:text-sm
                sm:leading-6.5
                md:max-w-190
                md:text-[15px]
                md:leading-7
                lg:text-base
                2xl:max-w-205
                2xl:text-[17px]
              "
            >
              {description}
            </p>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <div
              className="
                mt-6
                flex
                w-full
                max-w-95
                flex-col
                items-stretch
                justify-center
                gap-3
                sm:mt-7
                sm:w-auto
                sm:max-w-none
                sm:flex-row
                sm:items-center
                md:mt-8
              "
            >
              {buttons.map((button) => {
                const isOutline = button.variant === "outline";

                return (
                  <ButtonComponent
                    key={button.text}
                    to={button.to}
                    href={button.href}
                    icon={button.icon}
                    iconPosition={button.iconPosition}
                    padding="px-5 py-3.5 sm:px-6 md:px-7 md:py-4"
                    fontSize="text-sm md:text-[15px]"
                    fontWeight="font-semibold"
                    bg={isOutline ? "bg-white/12" : "bg-red-01"}
                    hoverBg={
                      isOutline
                        ? "hover:bg-white hover:text-blue-02"
                        : "hover:bg-[#ad0e28]"
                    }
                    textColor="text-white"
                    className={`
                      w-full
                      justify-center
                      backdrop-blur-sm
                      sm:w-auto
                      ${
                        isOutline
                          ? "border border-white/65 shadow-[0_8px_24px_rgba(7,18,37,0.12)] hover:border-white"
                          : "border border-red-01 shadow-[0_10px_25px_rgba(200,16,46,0.2)]"
                      }
                    `}
                  >
                    {button.text}
                  </ButtonComponent>
                );
              })}
            </div>
          )}
        </div>

        {/* Counter or any bottom content */}
        {bottomContent && (
          <div className="relative z-20 w-full shrink-0">
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                z-10
                h-px
                bg-linear-to-r
                from-transparent
                via-white/30
                to-transparent
              "
            />

            {bottomContent}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;