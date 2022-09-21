import * as React from "react";
import axios from "axios";
import {useState} from "react";

import Input from "./adicionar/Input";

const FormInputs = [
    {
        id: "titulo",
        label: "Título",
        placeholder: "Título do artigo",
    },
    {
        id: "conteudo",
        label: "Conteúdo",
        placeholder: "Conteúdo",
    },
    {
        id: "conteudo",
        label: "Conteúdo",
        placeholder: "Conteúdo",
    },
    {
        id: "conteudo",
        label: "Conteúdo",
        placeholder: "Conteúdo",
    },
    {
        id: "conteudo",
        label: "Conteúdo",
        placeholder: "Conteúdo",
    },
];

const Form = () => {
    const [paperForm, setPaperForm] = useState({
        // useState -- data of the papers
        title: "",
        journal_title: "",
        research_field: "",
        year: "",
        international: "0",
        web_link: "",
        abstract: "",
        keywords: "",
    });
    const [authors, setAuthors] = useState({
        name: "",
        email: "",
        institution: "",
        author_role: "",
        city: "",
        country: "",
        field: "",
    }); // useState -- data of the authors
    const [authorsList, setAuthorsList] = useState([{email: ""}]); // useState -- list of authors
    function addAuthors() {
        // function to add authors to the list
        setAuthorsList([...authorsList, authors]);
        setAuthors({
            name: "",
            email: "",
            institution: "",
            author_role: "",
            city: "",
            country: "",
            field: "",
        });
    }

    const handleAuthorChange = (e: any) => {
        setAuthors({
            ...authors,
            [e.target.name]: e.target.value,
        });
    };

    const handlePaperChange = (e: any) => {
        setPaperForm({
            ...paperForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        let paper = {
            title: paperForm.title,
            journal_title: paperForm.journal_title,
            research_field: paperForm.research_field,
            year: paperForm.year,
            international: paperForm.international,
            web_link: paperForm.web_link,
            abstract: paperForm.abstract,
            keywords: paperForm.keywords,
            author: authorsList,
        };

        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: "/api/paper/create",
                data: paper,
                headers: {"Content-Type": "application/json"},
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={() => handleSubmit()}>
                <Input id="titulo" label="Título" placeholder="Título do artigo" handle={handlePaperChange} value={paperForm.title} />

                <Input
                    id={"journal"}
                    label={"Título do Journal"}
                    placeholder={"Título do Journal"}
                    handle={handlePaperChange}
                    value={paperForm.journal_title}
                />

                <Input id="field" label="Área de pesquisa" placeholder="Área de pesquisa" handle={handlePaperChange} value={paperForm.research_field} />

                <Input id={"year"} label={"Ano de publicação"} placeholder={"Ano de publicação"} handle={handlePaperChange} value={paperForm.year} />

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="international">
                    Internacional
                </label>
                <select name="international" value={paperForm.international} onChange={handlePaperChange}>
                    <option value={0}>Não</option>
                    <option value={1}>Sim</option>
                </select>

                <Input id={"link"} label={"Link Web"} placeholder={"Link Web"} handle={handlePaperChange} value={paperForm.web_link} />

                <Input id="abstract" label="Resumo" placeholder="Resumo" handle={handlePaperChange} value={paperForm.abstract} />

                <Input id={"keys"} label={"Palavras-chave"} placeholder={"Palavras-chave"} handle={handlePaperChange} value={paperForm.keywords} />

                <>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="authors">
                        Autores:
                    </label>
                    {authorsList
                        .filter((x: any) => Object.keys(x).length != 0)
                        .map((x) => (
                            <div key={x.email}>
                                <h1>{x.email}</h1>
                            </div>
                        ))}
                    <hr className="border-2 border-black" />
                    <div className="grid">
                        <label>Nome Completo</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="name"
                            value={authors.name}
                            onChange={handleAuthorChange}
                        />
                    </div>
                    <div className="grid">
                        <label>Email</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="email"
                            value={authors.email}
                            onChange={handleAuthorChange}
                        />
                    </div>
                    <div className="grid">
                        <label>Instituição</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="institution"
                            value={authors.institution}
                            onChange={handleAuthorChange}
                        />
                    </div>
                    <div className="grid">
                        <label>Autor principal/colaborador</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="author_role"
                            value={authors.author_role}
                            onChange={handleAuthorChange}
                        />
                    </div>
                    <div className="grid">
                        <label>Cidade</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="city"
                            value={authors.city}
                            onChange={handleAuthorChange}
                        />
                    </div>
                    <div className="grid">
                        <label>País</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="country"
                            value={authors.country}
                            onChange={handleAuthorChange}
                        />
                    </div>
                    <div className="grid">
                        <label>Área de atuação</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="field"
                            value={authors.field}
                            onChange={handleAuthorChange}
                        />
                    </div>
                    {console.log(authorsList)}
                    <div className="flex justify-center">
                        <a className="flex justify-center w-full bg-black text-white rounded-sm cursor-pointer" onClick={() => addAuthors()}>
                            Adicionar
                        </a>
                    </div>
                </>

                <div className="flex justify-center mt-4">
                    <button type="submit" value="save" className="bg-black w-14 h-5 text-white rounded-sm">
                        Salvar
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
