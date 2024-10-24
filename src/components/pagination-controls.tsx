import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type TPaginationControlsProps = {
    previousPath: string;
    nextPath: string;
};

export default function PaginationControls({
    previousPath,
    nextPath,
}: TPaginationControlsProps) {
    const buttonClasses =
        "py-3 px-6 bg-purple-200 border-2 rounded-md flex items-center opacity-75 hover:opacity-100 transition h-full text-md font-semibold";
    return (
        <section className="flex justify-between w-8/12">
            {previousPath ? (
                <Link href={previousPath} className={buttonClasses}>
                    <ChevronLeftIcon width={24} height={24} />
                </Link>
            ) : (
                <div />
            )}
            {nextPath ? (
                <Link href={nextPath} className={buttonClasses}>
                    <ChevronRightIcon width={24} height={24} />
                </Link>
            ) : (
                <div />
            )}
        </section>
    );
}
