import { Link } from "react-router-dom";
import { ctaData } from "../../../data/ctaData";

const CTASection = () => {
    return (
        <section className="bg-[#F7F8FC]">
            <div className="relative overflow-hidden rounded-[22px] bg-blue-03 px-6 py-16 text-center shadow-lg md:px-12 lg:py-20">

                {/* Background Lines */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Vertical Pipelines */}
                    <div className="absolute left-[34%] top-0 h-[85%] w-[10px] bg-white/10" />
                    <div className="absolute left-[45%] top-0 h-[65%] w-[10px] bg-white/10" />
                    <div className="absolute left-[56%] top-0 h-[45%] w-[10px] bg-white/10" />

                    {/* Horizontal Dashed Lines */}
                    <div className="absolute left-1/2 top-[20%] w-[320px] -translate-x-1/2 border-t border-dashed border-white/15" />
                    <div className="absolute left-1/2 top-[50%] w-[320px] -translate-x-1/2 border-t border-dashed border-white/15" />

                    <div className="absolute left-1/2 top-[90%] w-[320px] -translate-x-1/2 border-t border-dashed border-white/15" />

                    {/* Main Circle */}
                    <div className="absolute left-[33.3%] bottom-[11%] h-8 w-8 rounded-full bg-white/30" />
                    <div className="absolute left-[43.9%] bottom-[33%] h-8 w-8 rounded-full bg-white/30" />
                    <div className="absolute left-[55.2%] bottom-[54%] h-8 w-8 rounded-full bg-white/30" />



                    {/* Vertical Connector */}

                    {/* Horizontal Connector */}
                    <div className="absolute left-[calc(32.3%+22px)] bottom-[13%] h-[10px] w-[360px]  bg-white/10" />
                    <div className="absolute left-[calc(43.2%+22px)] bottom-[35%] h-[10px] w-[360px]  bg-white/10" />
                    <div className="absolute left-[calc(55%+22px)] bottom-[55%] h-[10px] w-[360px]  bg-white/10" />


                </div>


                {/* Content */}
                <div className="relative z-10 mx-auto flex max-w-[720px] flex-col items-center">
                    <span className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-white">
                        {ctaData.label}
                    </span>

                    <h2 className="max-w-[650px] text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-[52px]">
                        {ctaData.title}
                    </h2>

                    <p className="mt-7 max-w-[620px] text-base leading-7 text-white/90 md:text-xl">
                        {ctaData.description}
                    </p>

                    <Link
                        to={ctaData.buttonLink}
                        className="mt-8 inline-flex h-[46px] items-center justify-center rounded-full bg-red-01 px-8 text-sm font-semibold text-white transition hover:bg-[#c9162d]"
                    >
                        {ctaData.buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;