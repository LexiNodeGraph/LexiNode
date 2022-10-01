import React from "react";
import Button from "../adicionar/Button";
import Input from "./Input";
import Tag from "../../Tag";

function KeywordForm({handleAddKeyword, setKeyword, keyword, keywords}: any) {
    return (
        <div className="">
            <div className="flex sm:flex-row flex-col gap-2">
                <Input
                    id="keyword"
                    name={"keywords"}
                    label={"Palavras-chave"}
                    placeholder={"Palavras-chave"}
                    onChange={(e: any) => setKeyword(e.target.value)}
                    value={keyword}
                />

                <Button style="mt-[28px]   h-auto " onClick={() => handleAddKeyword(keyword)}>
                    Adicionar
                </Button>
            </div>
            <div className="mt-2 rounded w-full inline-flex  flex-wrap gap-2">
                {keywords.map((keyword: any) => (
                    <Tag key={keyword} label={keyword} />
                ))}
            </div>
        </div>
    );
}

export default KeywordForm;
