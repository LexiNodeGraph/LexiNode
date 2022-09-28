import React from "react";
import {HiUserCircle} from "react-icons/hi";

function AuthorCard({author}: any) {
    return (
        <div className="p-2 pr-6  bg-white rounded border border-neutral-200 shadow-md dark:bg-neutral-900 dark:border-neutral-700">
            <p className="mb-2 font-bold text-neutral-300 dark:text-neutral-100">{author.author_role == 0 ? "Autor Principal" : "Colaborador"}</p>

            <p className=" font-bold text-neutral-500 dark:text-neutral-400">{author.name}</p>
            <p className=" font-normal text-neutral-500 dark:text-neutral-400">{author.email}</p>
        </div>
    );
}

export default AuthorCard;
