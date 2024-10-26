import React from "react";

export default function Loading() {
    return (
        <div className="flex justify-center w-full">
            <div className="animate-pulse flex flex-col max-w-96 w-full gap-4">
                <div className="flex flex-col gap-2">
                    <div className="w-20 h-4 bg-slate-300 rounded-md"></div>
                    <div className=" h-10 bg-slate-300 rounded-md"></div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="w-20 h-4 bg-slate-300 rounded-md"></div>
                    <div className=" h-10 bg-slate-300 rounded-md"></div>
                </div>
                <div className="w-32 h-12 bg-slate-300 rounded-md self-end"></div>
            </div>
        </div>
    );
}
