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
        relative left-1/2 h-[calc(100vh-72px)] min-h-155
        w-screen -translate-x-1/2 overflow-hidden
        ${className}
      `}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-[#0B1020]/40 to-[#071225]" />

      <div className="relative z-10 flex h-full flex-col">
        <div
          className={`
            mx-auto flex w-full max-w-237.5 flex-1 flex-col items-center
            justify-center px-5 text-center
            ${hasBottomContent ? "pb-6" : ""}
          `}
        >
          <h1 className="max-w-200 text-white font-extrabold text-[40px] leading-12 md:text-[56px] md:leading-16 2xl:text-[72px] 2xl:leading-20.5">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-187.5 text-white/80 text-[14px] leading-6.5 md:text-base md:leading-6.5 2xl:text-[18px] 2xl:leading-7.5">
              {description}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              {buttons.map((button) => {
                const isOutline = button.variant === "outline";

                return (
                  <ButtonComponent
                    key={button.text}
                    to={button.to}
                    href={button.href}
                    icon={button.icon}
                    iconPosition={button.iconPosition}
                    padding="px-5.5 md:px-7 2xl:px-8.5 py-4 md:py-4.5 2xl:py-5"
                    fontSize="text-sm"
                    fontWeight="font-bold"
                    bg={isOutline ? "bg-transparent" : "bg-red-01"}
                    hoverBg={
                      isOutline
                        ? "hover:bg-white hover:text-blue-02"
                        : "hover:bg-[#c9162d]"
                    }
                    textColor="text-white"
                    className={`w-full sm:w-auto ${
                      isOutline ? "border border-white" : ""
                    }`}
                  >
                    {button.text}
                  </ButtonComponent>
                );
              })}
            </div>
          )}
        </div>

        {bottomContent && (
          <div className="w-full shrink-0">
            {bottomContent}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;