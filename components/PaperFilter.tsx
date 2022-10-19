import {useState} from "react";
import {useUser} from "@auth0/nextjs-auth0";

import ArtigoSkeleton from "./skeletons/ArtigoSkeleton";
import ArtigoItem from "./artigos/ArtigoItem";
import FilterForm from "./FilterForm";

function PaperFilter({artigos, loading}: any) {
    const {user} = useUser();

    const [ordenar, setOrdenar] = useState();
    const [input, setInput] = useState("");

    const filtredArtigos = artigos.filter((artigo: any) => artigo.title.toLowerCase().includes(input));
    return (
        <div className=" w-full h-fit bg-white rounded  shadow  dark:bg-neutral-900  dark:border-neutral-700">
            <FilterForm input={input} ordenar={ordenar} setOrdenar={setOrdenar} setInput={setInput} />
            {artigos.length > 0 ? (
                ordenar ? (
                    filtredArtigos
                        .sort((a: any, b: any) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
                        .map((artigo: any) => <ArtigoItem artigo={artigo} user={user} key={artigo.id} />)
                ) : (
                    filtredArtigos
                        .sort((a: any, b: any) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
                        .reverse()
                        .map((artigo: any) => <ArtigoItem artigo={artigo} user={user} key={artigo.id} />)
                )
            ) : (
                <ArtigoSkeleton />
            )}
        </div>
    );
}

export default PaperFilter;
