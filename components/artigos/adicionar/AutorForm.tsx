import {useState, useEffect} from "react";

import Input from "./Input";

function AutorForm({author, setAuthor}: any) {
    function handleAuthorChange(e: any) {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="px-16">
            <div className="inline-flex w-full gap-2">
                <Input
                    placeholder="Nome Completo"
                    label="Nome Completo"
                    type="text"
                    name="name"
                    value={author.name}
                    onChange={(e: any) => handleAuthorChange(e)}
                />

                <Input
                    width="w-3/5"
                    label="Email"
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={author.email}
                    onChange={(e: any) => handleAuthorChange(e)}
                />
            </div>
            <div className="inline-flex w-full gap-2 ">
                <Input
                    label="Autor principal/colaborador"
                    placeholder="Autor"
                    type="text"
                    name="author_role"
                    value={author.author_role}
                    onChange={(e: any) => handleAuthorChange(e)}
                />
                <Input
                    width="w-2/5"
                    label="Instituição"
                    placeholder="Instituição"
                    type="text"
                    name="institution"
                    value={author.institution}
                    onChange={(e: any) => handleAuthorChange(e)}
                />

                <Input
                    width="w-2/5"
                    label="Área de atuação"
                    placeholder="Área de atuação"
                    type="text"
                    name="field"
                    value={author.field}
                    onChange={(e: any) => handleAuthorChange(e)}
                />
            </div>
            <div className="inline-flex w-full gap-2 ">
                <Input label="Cidade" placeholder="Cidade" type="text" name="city" value={author.city} onChange={(e: any) => handleAuthorChange(e)} />

                <Input label="País" placeholder="País" type="text" name="country" value={author.country} onChange={(e: any) => handleAuthorChange(e)} />
            </div>
        </div>
    );
}

export default AutorForm;
