import { useEffect, useState } from "react";

import TitleComponent from "../../components/shared/TitleComponent";
import Slider2 from "../../components/shared/Slider2";
import GalleryCardSkeleton from "../../components/skeletons/GalleryCardSkeleton";

import type { Project, ProjectGalleryImage } from "../../Types/project";

interface GalleryCardProps {
  image: string;
  alt: string;
}

const GalleryCard = ({
  image,
  alt,
}: GalleryCardProps) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]
      "
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="
          h-60
          w-full
          rounded-2xl
          object-cover
          transition-transform
          duration-500
          hover:scale-[1.02]
        "
      />
    </div>
  );
};

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({
  project,
}: ProjectGalleryProps) {
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => window.clearTimeout(timer);
  }, [project._id]);

  const gallery = [...project.gallery].sort(
    (a, b) => a.displayOrder - b.displayOrder,
  );

  return (
    <section className="pb-16 md:pb-20 lg:pb-24 xl:pb-28">
      <TitleComponent
        title="Project Gallery"
        description="On-site captures of the engineering excellence in progress."
      />

      <Slider2<ProjectGalleryImage>
        items={gallery}
        visibleItems={cardsPerSlide}
        renderItem={(item, index) =>
          loading ? (
            <GalleryCardSkeleton key={index} />
          ) : (
            <GalleryCard
              key={`${item.url}-${item.displayOrder}`}
              image={item.url}
              alt={item.alt || project.title}
            />
          )
        }
      />
    </section>
  );
}