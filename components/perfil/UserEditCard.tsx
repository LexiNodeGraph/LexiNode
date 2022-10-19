import React from "react";
import Input from "../artigos/adicionar/Input";

function UserEditCard({edit, setEdit}: any) {
    return (
        <div className="p-4 w-full h-fit  bg-white rounded-b border shadow-md sm:p-8 dark:bg-neutral-900 dark:border-neutral-700">
            <div className="flex flex-col items-center">
                <div className="w-full p-6 flex flex-col ">
                    <h5 className=" text-2xl font-bold py-2 text-neutral-900 dark:text-white">Editar perfil</h5>
                    <Input label="Nome" id="name" name="name" placeholder="Nome" />
                    <Input label="Email" id="email" name="email" placeholder="Email" />
                    <Input label="Instituição" id="institution" name="institution" placeholder="Instituição" />
                    <Input label="País" id="country" name="country" placeholder="País" />
                    <Input label="Cidade" id="city" name="city" placeholder="Cidade" />
                    <Input label="Área de atuação" id="field" name="field" placeholder="Área de atuação" />

                    <div className="flex mt-2 flex-row justify-end">
                        <button className="bg-neutral-200 dark:bg-neutral-700 rounded-md px-4 py-2 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-300 dark:hover:bg-neutral-600 transition duration-300 ease-in-out">
                            Cancelar
                        </button>
                        <button
                            onClick={() => setEdit(false)}
                            className="bg-primary-500 dark:bg-primary-400 rounded-md px-4 py-2 text-white font-semibold hover:bg-primary-600 dark:hover:bg-primary-300 transition duration-300 ease-in-out"
                        >
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserEditCard;
