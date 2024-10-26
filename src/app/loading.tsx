import SkeletonHome from "@/components/skeleton-home";
import React from "react";

export default function Loading() {
    return (
        <div className="flex flex-col gap-2">
            {Array.from({ length: 10 }).map((item, i) => (
                <SkeletonHome key={i} />
            ))}
        </div>
    );
}
