import React from "react";

function Button({type, onClick, value, children}: any) {
    return (
        <button
            type={type}
            onClick={onClick}
            value={value}
            className="bg-white border  text-black text-sm rounded
            flex justify-center items-center
            focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500   p-2.5
            dark:text-white  dark:bg-neutral-900  dark:border-neutral-700"
        >
            {children}
        </button>
    );
}

export default Button;
