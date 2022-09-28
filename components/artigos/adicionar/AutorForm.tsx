import {useState, useEffect} from "react";
import Tag from "../../Tag";
import Input from "./Input";
import Button from "../adicionar/Button";
import Select from "./Select";
import AuthorCard from "./AuthorCard";

function AutorForm({author, setAuthor, allAuthors, handleAddAuthor}: any) {
    function handleAuthorChange(e: any) {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="">
            <h2 className="text-center mb-3 font-bold text-neutral-300 dark:text-neutral-100">Autores</h2>
            <div className="my-4 flex flex-row gap-2">
                {allAuthors.map((author: any) => (
                    <AuthorCard key={author.id} author={author} />
                ))}
            </div>

            <div className="flex sm:flex-row flex-col gap-2">
                <Input
                    placeholder="Nome Completo"
                    label="Nome Completo"
                    type="text"
                    name="name"
                    value={author.name}
                    onChange={(e: any) => handleAuthorChange(e)}
                />
                <Select
                    label="Função"
                    options={[
                        {value: 1, label: "Autor Principal"},
                        {value: 0, label: "Colaborador"},
                    ]}
                    placeholder="Autor"
                    type="text"
                    name="author_role"
                    value={author.author_role}
                    onChange={(e: any) => handleAuthorChange(e)}
                />
            </div>

            <Input label="Email" placeholder="Email" type="text" name="email" value={author.email} onChange={(e: any) => handleAuthorChange(e)} />

            <div className="flex sm:flex-row flex-col gap-2">
                <Input
                    width="sm:w-3/5 w-full"
                    label="Instituição"
                    placeholder="Instituição"
                    type="text"
                    name="institution"
                    value={author.institution}
                    onChange={(e: any) => handleAuthorChange(e)}
                />

                <Input
                    width="sm:w-2/5 w-full"
                    label="Área de atuação"
                    placeholder="Área de atuação"
                    type="text"
                    name="field"
                    value={author.field}
                    onChange={(e: any) => handleAuthorChange(e)}
                />
            </div>
            <div className="flex sm:flex-row flex-col gap-2 ">
                <Input label="Cidade" placeholder="Cidade" type="text" name="city" value={author.city} onChange={(e: any) => handleAuthorChange(e)} />

                <Input label="País" placeholder="País" type="text" name="country" value={author.country} onChange={(e: any) => handleAuthorChange(e)} />
            </div>
            <div className=" m-6 flex justify-center items-center">
                <Button onClick={() => handleAddAuthor()}>Adicionar autor</Button>
            </div>
        </div>
    );
}

export default AutorForm;
