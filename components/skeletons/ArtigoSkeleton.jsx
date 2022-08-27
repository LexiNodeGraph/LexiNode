import React from "react";

function ArtigoSkeleton() {
    return (
        <>
            <li className="flex row justify-between m-2 h-36 bg-white drop-shadow-lg p-2 animate-pulse rounded">
                <div className="flex flex-col w-full space-y-6 ">
                    <div className="w-1/2 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-44 bg-gray-300 h-4 rounded"></div>
                    <div className="w-1/4 h-6 my-2 p-2 rounded  bg-gray-300"></div>
                </div>
            </li>
            <li className="flex row justify-between m-2 h-36 bg-white drop-shadow-lg p-2 animate-pulse rounded">
                <div className="flex flex-col w-full space-y-6 ">
                    <div className="w-1/2 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-44 bg-gray-300 h-4 rounded"></div>
                    <div className="w-1/4 h-6 my-2 p-2 rounded  bg-gray-300"></div>
                </div>
            </li>

            <li className="flex row justify-between m-2 h-36 bg-white drop-shadow-lg p-2 animate-pulse rounded">
                <div className="flex flex-col w-full space-y-6 ">
                    <div className="w-1/2 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-44 bg-gray-300 h-4 rounded"></div>
                    <div className="w-1/4 h-6 my-2 p-2 rounded  bg-gray-300"></div>
                </div>
            </li>
            <li className="flex row justify-between m-2 h-36 bg-white drop-shadow-lg p-2 animate-pulse rounded">
                <div className="flex flex-col w-full space-y-6 ">
                    <div className="w-1/2 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-44 bg-gray-300 h-4 rounded"></div>
                    <div className="w-1/4 h-6 my-2 p-2 rounded  bg-gray-300"></div>
                </div>
            </li>
        </>
    );
}

export default ArtigoSkeleton;
