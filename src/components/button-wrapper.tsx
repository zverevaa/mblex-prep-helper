"use client";

import { useRouter } from "next/navigation";
import Button from "./button";

export default function ButtonWrapper() {
    const router = useRouter();
    return (
        <div className="font-bold h-24 lg:w-32 lg:h-14 lg:self-end">
            <Button onClick={() => router.refresh()} color="bg-purple-300">
                New Set
            </Button>
        </div>
    );
}
