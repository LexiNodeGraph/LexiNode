import React from "react";

function Input({placeholder, label, name, id, value, onChange}: any) {
    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={id}>
                {label}
            </label>
            <input
                className="flex 
               p-4 pl-6 w-full        
               text-sm
               rounded border
               text-black bg-white 
               focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500
               dark:text-white  dark:bg-neutral-900  dark:border-neutral-700
               "
                type="text"
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    );
}

export default Input;
