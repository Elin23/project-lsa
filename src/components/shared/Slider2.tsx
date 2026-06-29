import { type ReactNode, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slider2Props<T> {
    items: T[];
    visibleItems: number;
    gapClass?: string;
    renderItem: (item: T, index: number) => ReactNode;
}

const Slider2 = <T,>({
    items,
    visibleItems,
    gapClass = "gap-6",
    renderItem,
}: Slider2Props<T>) => {
    const [startIndex, setStartIndex] = useState(0);

    const next = () => {
        if (startIndex < items.length - visibleItems) {
            setStartIndex((prev) => prev + 1);
        }
    };

    const prev = () => {
        if (startIndex > 0) {
            setStartIndex((prev) => prev - 1);
        }
    };

    const extendedItems = [...items, ...items];

    const canGoNext = startIndex < items.length - visibleItems;
    const canGoPrev = startIndex > 0;

    return (
        <div className="w-full">
            <div className="mb-8 flex justify-end gap-3">
                <button
                    type="button"
                    onClick={prev}
                    disabled={!canGoPrev}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    type="button"
                    onClick={next}
                    disabled={!canGoNext}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
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
                            {renderItem(item, index % items.length)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider2;