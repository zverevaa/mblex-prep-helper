import DataFetcher from "./data-fetcher";

export default function Questions() {
    return (
        <div className="flex flex-col gap-3 max-w-3xl">
            <DataFetcher amount={10} />
        </div>
    );
}
