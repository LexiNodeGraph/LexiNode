import React from "react";

function ArtigoSkeleton() {
    function Artigo() {
        return (
            <li className="flex row justify-between m-2 h-36 bg-white drop-shadow-lg p-2 animate-pulse rounded   dark:text-white  dark:bg-neutral-900  dark:border-neutral-700">
                <div className="flex flex-col w-full space-y-6 ">
                    <div className="w-1/2 bg-gray-300 h-6 rounded-md dark:bg-neutral-700"></div>
                    <div className="w-44 bg-gray-300 h-4 rounded dark:bg-neutral-700"></div>
                    <div className="w-1/4 h-6 my-2 p-2 rounded  bg-gray-300 dark:bg-neutral-700"></div>
                </div>
            </li>
        );
    }
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Artigo key={item} />
            ))}
        </>
    );
}

export default ArtigoSkeleton;
