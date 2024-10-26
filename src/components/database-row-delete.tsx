import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import Button from "./button";

type TDatabaseRowDeleteProps = {
    onOk: () => void;
    onCancel: () => void;
};

export default function DatabaseRowDelete({
    onOk,
    onCancel,
}: TDatabaseRowDeleteProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center px-3 bg-red-100  border-2 border-purple-400 rounded-md gap-3 justify-center">
            <p>Are you sure?</p>
            <Button onClick={onOk} color={`w-auto bg-green-200`}>
                <CheckIcon />
            </Button>
            <Button onClick={onCancel} color={`w-auto bg-red-200`}>
                <Cross2Icon />
            </Button>
        </div>
    );
}
