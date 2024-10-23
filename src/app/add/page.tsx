import DbList from "@/components/database-list";
import NewQuestionForm from "@/components/new-question-form";

export default async function page() {
    return (
        <div className="flex flex-col items-center">
            <NewQuestionForm />
            <DbList />
        </div>
    );
}
