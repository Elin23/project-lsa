import React from "react";
import type { SideNote } from "../../../data/operationalRangesData";

interface OperationalRangesContentProps {
    title: string;
    description: string;
    sideNotes: SideNote[];
}

const OperationalRangesContent: React.FC<OperationalRangesContentProps> = ({
    title,
    description,
    sideNotes,
}) => {
    return (
        <div className="flex flex-col w-full lg:w-[31.53%] 2xl:w-[31.32%]">
            <h2 className="  text-center xl:text-start text-[28px] md:text-[40px] 2xl:text-[48px] text-blue-01  font-bold ">
                {title}
            </h2>

            <p className="mt-6 text-center xl:text-start text-muted-blue text-sm md:text-base 2xl:text-lg font-normal">
                {description}
            </p>

            <ul className="mt-6 flex flex-col gap-3">
                {sideNotes.map((note) => (
                    <li
                        key={note.id}
                        className="flex items-center gap-3 rounded-lg border border-[#CFDAF1]  p-4"
                    >
                        <img
                            src={note.iconSrc}
                            alt=""
                            aria-hidden="true"
                            className="h-4.5 w-4.5 shrink-0 object-contain"
                        />

                        <p
                            className="text-blue-01 text-base font-bold hover:underline"
                        >
                            {note.text}
                        </p>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OperationalRangesContent;