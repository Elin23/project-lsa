interface SharedCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function SharedCard({
    icon,
    title,
    description,
}: SharedCardProps) {
    return (
        <div className=" rounded-xl p-7 2xl:p-8 border border-[#C5C5D333] shadow-[0px_4px_20px_0px_#1E3A8A14]">
            <div className="flex gap-4">
                <div className="basis-14 w-14 h-14 shrink-0 grow-0 flex justify-center items-center rounded-lg bg-blue-01">
                    <img src={icon} alt={title} />
                </div>

                <h4 className="text-2xl text-blue-01 font-bold">
                    {title}
                </h4>
            </div>

            <p className="text-lg text-muted-blue font-normal mt-4">
                {description}
            </p>
        </div>
    );
}