import React from "react";
import Button from "../adicionar/Button";
import Input from "./Input";

import Tag from "../../Tag";

function KeywordForm({handleAddKeyword, setKeyword, keyword, keywords}: any) {
    return (
        <div className=" ">
            <Input
                id="keyword"
                name={"keywords"}
                label={"Palavras-chave"}
                placeholder={"Palavras-chave"}
                onChange={(e: any) => setKeyword(e.target.value)}
                value={keyword}
            />
            <Button style=" " onClick={() => handleAddKeyword(keyword)}>
                Adicionar
            </Button>
        </div>
    );
}

export default KeywordForm;
