import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import Slider from "../../components/shared/Slider";
import {
    certificationStats,
    certificationsData,
} from "../../data/certificationsData";

const CertificationsStandards = () => {
    return (
        <section >

            <TitleComponent title="Certifications & Standards" description=" Our commitment to international standards ensures the highest levels
            of quality, safety, and environmental responsibility across all
            operations." />


            <div className="grid gap-4 md:grid-cols-3">
                {certificationStats.map((stat, index) => (
                    <div
                        key={index}
                        className="rounded-xl bg-white px-6 py-6 text-center shadow-[0_8px_30px_rgba(31,63,147,0.08)] transition duration-300 hover:-translate-y-1"
                    >
                        <h3 className={`text-4xl md:text-[40px] font-bold ${stat.color}`}>
                            {stat.value}
                        </h3>

                        <p className="mt-2 text-sm font-semibold uppercase tracking-[1.5px] text-gray-600">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Desktop */}
            <div className="mt-8 hidden gap-4 lg:grid-cols-2 md:grid">
                {certificationsData.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="flex gap-5 rounded-xl bg-white p-6 shadow-[0_8px_30px_rgba(31,63,147,0.08)] transition duration-300 hover:-translate-y-1 md:p-8"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#1f3f93]">
                                <Icon size={22} />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-[#111b3f]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Slider */}
            <div className="mt-8 md:hidden">
                <Slider
                    items={certificationsData}
                    renderItem={(item) => {
                        const Icon = item.icon;

                        return (
                            <div className="flex gap-5 rounded-xl bg-white p-6 shadow-[0_8px_30px_rgba(31,63,147,0.08)]">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#1f3f93]">
                                    <Icon size={22} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#111b3f]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    }}
                />
            </div>
        </section>
    );
};

export default CertificationsStandards;