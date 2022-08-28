import React from "react";

function UserContentCard() {
    return (
        <div className="w-full bg-white rounded-lg border shadow-md dark:bg-neutral-800 dark:border-neutral-700">
            <ul className="flex flex-wrap text-sm font-medium text-center text-neutral-500 bg-neutral-50 rounded-t-lg border-b border-neutral-200 dark:border-neutral-700 dark:text-neutral-400 dark:bg-neutral-800">
                <li className="mr-2">
                    <button className="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">
                        Informações
                    </button>
                </li>
                <li className="mr-2">
                    <button className="inline-block p-4 hover:text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:border-transparent text-neutral-500 dark:text-neutral-400 border-neutral-100 hover:border-neutral-300 dark:border-neutral-700">
                        Favoritos
                    </button>
                </li>
                <li className="mr-2">
                    <button className="inline-block p-4 hover:text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:border-transparent text-neutral-500 dark:text-neutral-400 border-neutral-100 hover:border-neutral-300 dark:border-neutral-700">
                        Configurações
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default UserContentCard;
