import React, { ReactElement } from "react";
import { promises as fs } from "fs";
import { TQuestion } from "@/lib/types";

type TDataFetcherProps = {
    children: ReactElement;
};

export default async function DataFetcher({ children }: TDataFetcherProps) {
    const tempDb = await fs.readFile(
        process.cwd() + "/src/lib/tempdb.json",
        "utf8"
    );
    const data: TQuestion[] = JSON.parse(tempDb);
    return <>{React.cloneElement(children, { data: data })}</>;
}
