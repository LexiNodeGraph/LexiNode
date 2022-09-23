import React from "react";

import Input from "./Input";
import Button from "./Button";

import Select from "./Select";

function PaperForm({setPaper, paper}: any) {
    const handlePaperChange = (e: any) => {
        setPaper({
            ...paper,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <Input name="title" label="Título" placeholder="Título do artigo" onChange={(e: any) => handlePaperChange(e)} value={paper.title} />
            <Input
                name={"journal_title"}
                label={"Título do Journal"}
                placeholder={"Título do Journal"}
                onChange={(e: any) => handlePaperChange(e)}
                value={paper.journal_title}
            />
            <Input
                name="research_field"
                label="Área de pesquisa"
                placeholder="Área de pesquisa"
                onChange={(e: any) => handlePaperChange(e)}
                value={paper.research_field}
            />
            <Input name={"year"} label={"Ano de publicação"} placeholder={"Ano de publicação"} onChange={(e: any) => handlePaperChange(e)} value={paper.year} />
            <Select
                options={[
                    {value: 1, label: "Sim"},
                    {value: 0, label: "Não"},
                ]}
                label="Internacional"
                name="international"
                value={paper.international}
                onChange={(e: any) => handlePaperChange(e)}
            />
            <Input name={"web_link"} label={"Link Web"} placeholder={"Link Web"} onChange={(e: any) => handlePaperChange(e)} value={paper.web_link} />
            <Input name="abstract" label="Resumo" placeholder="Resumo" onChange={(e: any) => handlePaperChange(e)} value={paper.abstract} />
            <Input
                name={"keywords"}
                label={"Palavras-chave"}
                placeholder={"Palavras-chave"}
                onChange={(e: any) => handlePaperChange(e)}
                value={paper.keywords}
            />
        </div>
    );
}

export default PaperForm;
