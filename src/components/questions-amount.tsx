type TQuestionsAmountProps = {
    amount: number;
    onAmountChange: (amt: number) => void;
};

export default function QuestionsAmount({
    amount,
    onAmountChange,
}: TQuestionsAmountProps) {
    return (
        <div className="flex gap-3 items-center self-end">
            <p>Amount of questions:</p>
            <select
                className="p-2 border-2 border-indigo-950 rounded-md hover:cursor-pointer"
                value={amount}
                onChange={(e) => onAmountChange(Number(e.target.value))}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
            </select>
        </div>
    );
}
