import * as React from "react";
import axios from "axios";
import {useState} from "react";

import Button from "./adicionar/Button";
import AutorForm from "./adicionar/AutorForm";
import PaperForm from "./adicionar/PaperForm";

const picUrl = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";

const Form = () => {
    const [paper, setPaper] = useState({
        title: "",
        journal_title: "",
        research_field: "",
        year: "",
        international: "0",
        web_link: "",
        abstract: "",
        keywords: "",
    });

    const [author, setAuthor] = useState({
        name: "",
        picture: picUrl,
        email: "",
        institution: "",
        author_role: "",
        city: "",
        country: "",
        field: "",
    });
    const [allAuthors, setAllAuthors] = useState<any[]>([]);

    const handleSubmit = async (e: any) => {
        let fullPaper = {
            title: paper.title,
            journal_title: paper.journal_title,
            research_field: paper.research_field,
            year: paper.year,
            international: paper.international,
            web_link: paper.web_link,
            abstract: paper.abstract,
            keywords: paper.keywords,
            author: allAuthors,
        };
        console.log(fullPaper);
        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: "/api/paper/create",
                data: fullPaper,
                headers: {"Content-Type": "application/json"},
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-2">
            <PaperForm setPaper={setPaper} paper={paper} />
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="authors">
                Autor(es):
            </label>

            {allAuthors.map((author, index) => (
                <p key={index}>{author.name}</p>
            ))}

            <AutorForm setAuthor={setAuthor} author={author} />
            <Button onClick={() => setAllAuthors([...allAuthors, author])}>Adicionar autor</Button>
            
            <Button onClick={handleSubmit}>Salvar</Button>
        </div>
    );
};

export default Form;
