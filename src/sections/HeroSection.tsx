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
}

const HeroSection = ({
  image,
  title,
  description,
  buttons = [],
  className = "",
}: HeroSectionProps) => {
  return (
    <section
      className={`relative left-1/2 min-h-[520px] h-[calc(100vh-72px)] w-screen -translate-x-1/2 overflow-hidden ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#0B1020]/40 to-[#071225]" />

      <div className="relative z-10 mx-auto flex h-full max-w-[950px] flex-col items-center justify-center px-5 text-center">
        <h1 className="max-w-[800px] text-[36px] font-extrabold leading-[1] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-[750px] text-sm leading-7 text-white/80 sm:text-base md:text-lg">
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
                  height="h-[48px]"
                  padding="px-8"
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
    </section>
  );
};

export default HeroSection;