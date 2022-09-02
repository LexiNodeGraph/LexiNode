import React from "react";
import {BsDot} from "react-icons/bs";
function UserInfoEdit({user}: any) {
    return (
        <>
            <h5 className=" text-xl font-bold text-neutral-900 dark:text-white">{user.name}</h5>
            <span className="inline-flex items-center gap-1">
                <span className="text-sm mb-2 text-neutral-500 dark:text-neutral-400">@{user.nickname}</span>
                <BsDot className="text-sm mb-2 text-neutral-500 dark:text-neutral-400" />
                <span className="text-sm mb-2 text-neutral-500 dark:text-neutral-400">{user?.email?.includes("@ifc.edu.br") ? "Autor" : "Usuário"}</span>
            </span>

            <p className="mb-4 text-sm font-light  dark:text-white">MODO DE EDIÇÂO (AINDA NÃO IMPLEMENTADO)</p>
        </>
    );
}

export default UserInfoEdit;
