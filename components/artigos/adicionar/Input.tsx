import React from "react";

function Input({placeholder, label, id, value, handle}: any) {
    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={id}>
                {label}
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name={id}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={handle}
            />
        </>
    );
}

export default Input;
