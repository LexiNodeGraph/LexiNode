import React from "react";

function Button({type, onClick, value, children, style}: any) {
    return (
        <button
            type={type}
            onClick={onClick}
            value={value}
            className={`text-sm rounded  p-2.5 h-min
            bg-white border  text-black 
            flex justify-center items-center
            focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500  
            dark:text-white  dark:bg-neutral-900  dark:border-neutral-700 ${style}`}
        >
            {children}
        </button>
    );
}

export default Button;
