interface TitleComponentProps {
  title: string;
  description: string;
  className?: string;
}

export default function TitleComponent({
  title,
  description,
  className = "",
}: TitleComponentProps) {
  return (
    <div
      className={`
        mb-7 flex flex-col items-center justify-center
        gap-1 text-center
        md:mb-8 md:gap-1.5
        2xl:mb-10 2xl:gap-2
        ${className}
      `}
    >
      <h3
        className="
          text-[30px] font-bold leading-9.5 text-blue-01
          md:text-[40px] md:leading-12.5
          2xl:text-5xl 2xl:leading-15
        "
      >
        {title}
      </h3>

      <p
        className="
          max-w-2xl text-sm leading-7 text-inherit text-muted-blue
          md:text-base md:leading-7.5
          2xl:text-[18px] 2xl:leading-8.5
        "
      >
        {description}
      </p>
    </div>
  );
}