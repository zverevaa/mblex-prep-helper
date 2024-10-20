import DataFetcher from "@/components/data-fetcher";
import Questions from "@/components/questions";

export default function Home() {
    return (
        <div className="p-6">
            <DataFetcher>
                <Questions />
            </DataFetcher>
        </div>
    );
}
