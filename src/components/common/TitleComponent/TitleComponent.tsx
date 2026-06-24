interface TitleComponentProps {
    title: string;
    description: string;
}

export default function TitleComponent({
    title,
    description,
}: TitleComponentProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-3 md:gap-3.5 2xl:gap-4 text-center mb-9 md:mb-12 lg:mb-16 2xl:mb-20">
            <h3 className="text-[28px] md:text-[40px] 2xl:text-5xl text-blue-01 font-bold">
                {title}
            </h3>

            <p className="text-sm md:text-base 2xl:text-lg text-muted-blue font-normal max-w-[672px]">
                {description}
            </p>
        </div>
    );
}