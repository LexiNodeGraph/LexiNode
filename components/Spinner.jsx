import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-200">
            <FaSpinner className="animate-spin text-4xl text-gray-500" />
        </div>
    );
};

export default Spinner;
