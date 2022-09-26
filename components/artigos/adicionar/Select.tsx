import React from "react";

function Select({label, name, id, value, onChange, options, width}: any) {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={id}>
                {label}
            </label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="flex 
                
               p-4 pl-6 w-full        
               text-sm
               rounded border
               text-black bg-white 
               focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500
               dark:text-white  dark:bg-neutral-900  dark:border-neutral-700
               "
            >
                {options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
