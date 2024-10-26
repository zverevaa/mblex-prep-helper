import DatabaseList from "@/components/database-list";
import NewQuestionForm from "@/components/new-question-form";

type TAddPageProps = {
    searchParams: { search?: string; page?: string };
};

export default async function page({ searchParams }: TAddPageProps) {
    return (
        <div className="flex flex-col gap-8 items-center">
            <NewQuestionForm />
            <DatabaseList page={Number(searchParams.page) || 1} />
        </div>
    );
}
