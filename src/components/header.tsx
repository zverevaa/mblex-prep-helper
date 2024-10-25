import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="flex justify-between items-center h-14 p-3 bg-purple-300 rounded-b-md">
            <Link href="/">
                <h1 className="text-2xl font-bold">MBLEX PREP</h1>
            </Link>
            <Link className="font-bold" href="/add">
                Storage
            </Link>
        </header>
    );
}
