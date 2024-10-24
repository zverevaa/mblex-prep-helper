import DataFetcher from "./data-fetcher";

export default function Questions() {
    // const [amount, setAmount] = useState(5);

    // const handleAmountChange = (amt: number) => {
    //     setAmount(amt);
    // };

    return (
        <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            <DataFetcher amount={10} />
        </div>
    );
}
