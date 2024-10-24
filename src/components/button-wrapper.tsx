"use client";

import { useRouter } from "next/navigation";
import Button from "./button";

export default function ButtonWrapper() {
    const router = useRouter();
    return <Button onClick={() => router.refresh()}>New Set</Button>;
}
