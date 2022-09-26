import * as React from "react";
import axios from "axios";
import {useState} from "react";

import Button from "./adicionar/Button";
import AutorForm from "./adicionar/AutorForm";
import PaperForm from "./adicionar/PaperForm";
import Tag from "../Tag";

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
        keywords: [],
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

    function handleAddAuthor() {
        setAllAuthors([...allAuthors, author]);
        setAuthor({
            name: "",
            picture: picUrl,
            email: "",
            institution: "",
            author_role: "",
            city: "",
            country: "",
            field: "",
        });
    }
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

        setPaper({
            title: "",
            journal_title: "",
            research_field: "",
            year: "",
            international: "0",
            web_link: "",
            abstract: "",
            keywords: [],
        });
    };

    return (
        <div className="p-2">
            <PaperForm setPaper={setPaper} paper={paper} />

            <AutorForm setAuthor={setAuthor} author={author} allAuthors={allAuthors} handleAddAuthor={handleAddAuthor} />

            <Button onClick={handleSubmit}>Salvar</Button>
        </div>
    );
};

export default Form;
