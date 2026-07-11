import { type ReactNode, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slider2Props<T> {
    items: T[];
    visibleItems: number;
    gapClass?: string;
    renderItem: (item: T, index: number) => ReactNode;
    autoPlay?: boolean;
    autoPlayDelay?: number;
}

const Slider2 = <T,>({
    items,
    visibleItems,
    gapClass = "gap-6",
    renderItem,
    autoPlay = true,
    autoPlayDelay = 4000,
}: Slider2Props<T>) => {
    const [startIndex, setStartIndex] = useState(0);

    const maxIndex = Math.max(items.length - visibleItems, 0);

    const next = () => {
        setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        if (!autoPlay || items.length <= visibleItems) return;

        const interval = setInterval(() => {
            next();
        }, autoPlayDelay);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayDelay, maxIndex]);

    const extendedItems = [...items];

    return (
        <div className="w-full">
            <div className="mb-8 flex justify-end gap-3">
                <button
                    type="button"
                    onClick={prev}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100"
                >
                    <ChevronLeft size={20} />
                </button>

                <button
                    type="button"
                    onClick={next}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="overflow-hidden">
                <div
                    className={`flex ${gapClass} transition-transform duration-500 ease-in-out`}
                    style={{
                        transform: `translateX(-${startIndex * (100 / visibleItems)}%)`,
                    }}
                >
                    {extendedItems.map((item, index) => (
                        <div
                            key={index}
                            className="shrink-0"
                            style={{
                                width: `calc(${100 / visibleItems}% - 1.5rem)`,
                            }}
                        >
                            {renderItem(item, index)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider2;