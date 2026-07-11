import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> { }

export default function Skeleton({
    className,
    ...props
}: SkeletonProps) {
    return (
        <div
            className={twMerge(
                "animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",
                className
            )}
            {...props}
        />
    );
}