import { getAllQuestions } from "@/lib/server-utils";
import DatabaseTable from "./database-table";
import PaginationControls from "./pagination-controls";

type TDatabaseListProps = {
    page: number;
};

export default async function DatabaseList({ page }: TDatabaseListProps) {
    const { questions, totalCount } = await getAllQuestions(page);
    const previousPath = page > 1 ? `/add?page=${page - 1}` : "";
    const nextPath = totalCount > 10 * page ? `/add?page=${page + 1}` : "";
    console.log(totalCount);
    return (
        <section className="flex flex-col items-center max-w-screen-lg">
            <DatabaseTable questions={questions} />
            <PaginationControls
                previousPath={previousPath}
                nextPath={nextPath}
            />
        </section>
    );
}
