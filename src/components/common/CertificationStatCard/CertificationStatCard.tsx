interface CertificationStatCardProps {
    value: string;
    label: string;
    color: string;
}

export default function CertificationStatCard({
    value,
    label,
    color,
}: CertificationStatCardProps) {
    return (
        <div data-aos="fade-up" data-aos-duration="800">
            <div
                className="
        rounded-xl
        bg-white
        px-6
        py-6
        text-center
        shadow-[0_8px_30px_rgba(31,63,147,0.08)]
        transition
        duration-300
        hover:-translate-y-1
      "
            >
                <h3 className={`text-4xl font-bold md:text-[40px] ${color}`}>
                    {value}
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[1.5px] text-gray-600">
                    {label}
                </p>
            </div>
        </div>
    );
}