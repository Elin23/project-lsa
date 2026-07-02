interface TitleComponentProps {
    title: string;
    description: string;
}

export default function TitleComponent({
    title,
    description,
}: TitleComponentProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 md:gap-2.5 2xl:gap-3 text-center mb-9 md:mb-8  2xl:mb-10">
            <h3 className="font-bold text-[30px] leading-9.5 md:text-[40px] md:leading-12.5 2xl:text-5xl 2xl:leading-15 text-blue-01 ">
                {title}
            </h3>

            <p className="leading-7 md:text-lg md:leading-7.5 2xl:text-[20px] 2xl:leading-8.5 text-muted-blue max-w-2xl">
                {description}
            </p>
        </div>
    );
}