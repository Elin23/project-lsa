import { useEffect } from "react";

const optimizeImage = (image: HTMLImageElement) => {
  const isPriorityImage = image.dataset.priority === "true";

  image.decoding = "async";

  if (isPriorityImage) {
    image.loading = "eager";
    image.fetchPriority = "high";
    return;
  }

  image.loading = "lazy";
  image.fetchPriority = "auto";
};

export default function GlobalImageOptimizer() {
  useEffect(() => {
    const optimizeExistingImages = () => {
      const images = document.querySelectorAll<HTMLImageElement>("img");

      images.forEach((image) => {
        optimizeImage(image);
      });
    };

    optimizeExistingImages();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node instanceof HTMLImageElement) {
            optimizeImage(node);
          }

          const nestedImages =
            node.querySelectorAll<HTMLImageElement>("img");

          nestedImages.forEach((image) => {
            optimizeImage(image);
          });
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}