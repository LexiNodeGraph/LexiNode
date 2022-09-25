import React from "react";

function Tag({label}: any) {
    return (
        <div
            className="rounded p-1 px-2 w  bg-neutral-200 cursor-pointer  hover:bg-neutral-300   transition duration-300
                dark:hover:bg-neutral-700 dark:bg-neutral-800 dark:text-neutral-50"
        >
            {label}
        </div>
    );
}

export default Tag;
