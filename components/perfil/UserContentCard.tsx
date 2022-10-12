import React from "react";
import Link from "next/link";

function UserContentCard({children}: any) {
    return (
        <div className="w-full bg-white rounded   dark:bg-neutral-900 ">
            <ul className="flex flex-wrap px-4 text-sm font-medium text-center text-neutral-500 bg-neutral-100 rounded-t border border-neutral-200 dark:border-neutral-700 dark:text-neutral-400 dark:bg-neutral-800">
                <li className="mr-2">
                    <Link href="/perfil">
                        <p className="inline-block p-4  text-neutral-900 dark:text-neutral-200">Favoritos</p>
                    </Link>
                </li>

                {/* <li className="mr-2">
                    <Link href="/perfil/config">
                        <p className="inline-block p-4  text-neutral-900 dark:text-neutral-200"> Configurações</p>
                    </Link>
                </li> */}
            </ul>

            <div className="p-4 w-full h-fit  bg-white rounded-b border shadow-md sm:p-8 dark:bg-neutral-900 dark:border-neutral-700">{children}</div>
        </div>
    );
}

export default UserContentCard;
