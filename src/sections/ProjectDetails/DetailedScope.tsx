import {
    detailedScopeData,
    projectOverviewData,
} from "../../data/detailedScopeData";

export default function DetailedScope() {
    return (
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
            {/* Left Card */}
            <div className="h-max w-full rounded-2xl border border-[#C5C5D333] bg-white p-8 shadow-[0px_8px_10px_-6px_#00236F0D,0px_20px_25px_-5px_#00236F0D] lg:w-[31.75%] 2xl:w-[32.14%]">
                <h4 className="border-l-4 border-l-red-01 pl-4 text-lg font-bold text-blue-01 sm:text-2xl">
                    PROJECT OVERVIEW
                </h4>

                <div className="mt-8 divide-y divide-[#C5C5D34D]">
                    {projectOverviewData.map((item) => (
                        <div key={item.label} className="py-4">
                            <span className="text-xs font-bold text-muted-blue">
                                {item.label}
                            </span>

                            <h5 className="text-lg font-semibold text-[#111C2C]">
                                {item.value}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Card */}
            <div className="w-full rounded-2xl border border-[#C5C5D333] bg-white p-8 shadow-[0px_8px_10px_-6px_#00236F0D,0px_20px_25px_-5px_#00236F0D] lg:w-[68.42%] 2xl:w-[66.10%]">
                <h4 className="text-2xl font-bold text-blue-01 sm:text-[40px]">
                    {detailedScopeData.title}
                </h4>

                <div className="mt-3.5 space-y-3.5">
                    {detailedScopeData.paragraphs.slice(0, 2).map((paragraph, index) => (
                        <p
                            key={index}
                            className={`text-lg ${paragraph.primary
                                    ? "font-medium text-[#111C2C]"
                                    : "font-light text-[#444651E5]"
                                }`}
                        >
                            {paragraph.text}
                        </p>
                    ))}

                    <div className="flex flex-col justify-between gap-6 sm:flex-row">
                        {detailedScopeData.highlights.map((item) => (
                            <div
                                key={item.title}
                                className="space-y-2 rounded-xl border-l-4 border-l-blue-01 bg-[#F9F9FF] p-6"
                            >
                                <h5 className="text-lg font-bold text-blue-01">
                                    {item.title}
                                </h5>

                                <p className="text-sm font-light text-[#444651E5]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 text-lg font-light text-[#444651E5]">
                        {detailedScopeData.paragraphs[2].text}
                    </p>
                </div>
            </div>
        </div>
    );
}