import { useEffect, useState } from "react";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import Slider2 from "../../components/shared/Slider2";
import GalleryCardSkeleton from "../../components/skeletons/GalleryCardSkeleton";

import { projectGalleryData } from "../../data/ProjectGalleryData";


const GalleryCard = ({ image }: { image: string }) => {
    return (
        <div className="overflow-hidden rounded-2xl shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
            <img
                src={image}
                alt=""
                className="h-full w-full rounded-2xl object-cover"
            />
        </div>
    );
};


export default function ProjectGallery() {
    const [cardsPerSlide, setCardsPerSlide] = useState(4);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setCardsPerSlide(4);
            } else if (window.innerWidth >= 768) {
                setCardsPerSlide(2);
            } else {
                setCardsPerSlide(1);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <section className="pb-16 md:pb-20 lg:pb-24 xl:pb-28">
            <TitleComponent
                title="Project Gallery"
                description="On-site captures of the engineering excellence in progress."
            />


            <Slider2
                items={loading ? Array.from({ length: 4 }, () => "") : projectGalleryData}
                visibleItems={cardsPerSlide}
                renderItem={(image, index) =>
                    loading ? (
                        <GalleryCardSkeleton key={index} />
                    ) : (
                        <GalleryCard
                            key={index}
                            image={image}
                        />
                    )
                }
            />
        </section>
    );
}