import TitleComponent from '../../components/common/TitleComponent/TitleComponent';
import SharedCard from '../../components/shared/SharedCard';
import Slider from '../../components/shared/Slider';
import { hotTappingProcessData } from '../../data/hotTappingProcessData';

export default function HotTappingProcess() {
    return (
        <div>
            <TitleComponent
                title="The Hot Tapping Process"
                description="A meticulous, multi-stage engineering procedure designed to penetrate active pipelines without disrupting flow or compromising safety."
            />

            {/* Mobile Slider */}
            <div className="mt-8 md:hidden">
                <Slider
                    items={hotTappingProcessData}
                    renderItem={(item) => (
                        <SharedCard
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    )}
                />
            </div>

            {/* Tablet & Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-20">
                {hotTappingProcessData.map((item) => (
                    <SharedCard
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}