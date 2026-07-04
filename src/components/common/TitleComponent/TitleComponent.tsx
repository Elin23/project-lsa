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
        <div className={`flex flex-col justify-center items-center gap-1 md:gap-1.5 text-center 2xl:gap-2  mb-7 md:mb-8  2xl:mb-10 ${className}`}>
            <h3 className={`font-bold text-[30px] leading-9.5 md:text-[40px] md:leading-12.5 2xl:text-5xl 2xl:leading-15 text-blue-01`}>
                {title}
            </h3>

            <p className="leading-7 text-sm md:text-base md:leading-7.5 2xl:text-[18px] 2xl:leading-8.5 text-muted-blue max-w-2xl">
                {description}
            </p>
        </div>
    );
}