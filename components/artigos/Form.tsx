import * as React from "react";
import axios from "axios";
import {useState} from "react";

import Button from "./adicionar/Button";
import AutorForm from "./adicionar/AutorForm";
import PaperForm from "./adicionar/PaperForm";
import Tag from "../Tag";

const Form = () => {
    const [paper, setPaper] = useState({
        title: "",
        journal_title: "",
        research_field: "",
        year: "",
        international: "",
        web_link: "",
        abstract: "",
        keywords: [],
        authors: [],
    });

    const [authors, setAuthors] = useState<any[]>([]);
    const [keywords, setKeywords] = useState<any[]>([]);

    function handleSubmit() {
        fetchPaper({
            title: paper.title,
            journal_title: paper.journal_title,
            research_field: paper.research_field,
            year: paper.year,
            international: paper.international,
            web_link: paper.web_link,
            abstract: paper.abstract,
            keywords: keywords,
            author: authors,
        });

        setPaper({
            title: "",
            journal_title: "",
            research_field: "",
            year: "",
            international: "0",
            web_link: "",
            abstract: "",
            keywords: [],
            authors: [],
        });
    }

    function fetchPaper(fullPaper: any) {
        axios({
            method: "post",
            url: "/api/paper/create",
            data: fullPaper,
            headers: {"Content-Type": "application/json"},
        })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }
    return (
        <div className="p-2">
            <div className=" p-2 m-10 mb-0 border rounded  border-neutral-200 shadow-md dark:border-neutral-600">
                <PaperForm setPaper={setPaper} paper={paper} keywords={keywords} setKeywords={setKeywords} />

                <AutorForm setPaper={setPaper} paper={paper} authors={authors} setAuthors={setAuthors} />
            </div>
            <div className=" m-6 flex justify-center items-center">
                <Button onClick={handleSubmit}>Adicionar artigo</Button>
            </div>
        </div>
    );
};

export default Form;
