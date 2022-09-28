import {useState} from "react";

import Input from "./Input";
import Button from "./Button";
import KeywordForm from "./KeywordForm";
import Select from "./Select";

function PaperForm({setPaper, paper}: any) {
    const [keywords, setKeywords] = useState<string[]>([]);
    const [keyword, setKeyword] = useState("");

    const handlePaperChange = (e: any) => {
        setPaper({
            ...paper,
            [e.target.name]: e.target.value,
        });
    };

    function handleAddKeyword(keyword: string) {
        setKeywords([...keywords, keyword]);
        setKeyword("");
        setPaper({
            ...paper,
            keywords: keywords,
        });
    }
    return (
        <div className=" mb-6">
            <h2 className="text-center mb-3 font-bold text-neutral-300 dark:text-neutral-100">Informações do artigo</h2>
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

            <div className="flex flex-row  gap-2 ">
                <Input
                    name={"year"}
                    label={"Ano de publicação"}
                    placeholder={"Ano de publicação"}
                    onChange={(e: any) => handlePaperChange(e)}
                    value={paper.year}
                />
                <Select
                    options={[
                        {value: 1, label: "Sim"},
                        {value: 0, label: "Não"},
                    ]}
                    id="international"
                    label="Internacional"
                    name="international"
                    value={paper.international}
                    onChange={(e: any) => handlePaperChange(e)}
                />
            </div>

            <Input name={"web_link"} label={"Link Web"} placeholder={"Link Web"} onChange={(e: any) => handlePaperChange(e)} value={paper.web_link} />
            <Input name="abstract" label="Resumo" placeholder="Resumo" onChange={(e: any) => handlePaperChange(e)} value={paper.abstract} />
            <KeywordForm handleAddKeyword={handleAddKeyword} setKeyword={setKeyword} keyword={keyword} keywords={keywords} />
        </div>
    );
}

export default PaperForm;
