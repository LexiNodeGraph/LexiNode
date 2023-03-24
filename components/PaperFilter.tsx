import { useState, useMemo } from "react";
import { useUser } from "@auth0/nextjs-auth0";

import ArtigoSkeleton from "./skeletons/ArtigoSkeleton";
import ArtigoItem from "./artigos/ArtigoItem";
import FilterForm from "./FilterForm";

function PaperFilter({ artigos, loading }: any) {
    const { user } = useUser();

    const [ordenar, setOrdenar] = useState(false);
    const [input, setInput] = useState("");

    const filteredArtigos = useMemo(() => {
        return artigos.filter((artigo: any) => artigo.title.toLowerCase().includes(input));
    }, [artigos, input]);

    const sortedArtigos = useMemo(() => {
        return filteredArtigos.sort((a: any, b: any) => {
            return ordenar ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        });
    }, [filteredArtigos, ordenar]);

    return (
        <div className=" w-full h-fit bg-white rounded  shadow  dark:bg-neutral-900  dark:border-neutral-700">
            <FilterForm
                input={input}
                ordenar={ordenar}
                setOrdenar={setOrdenar}
                setInput={setInput}
            />
            {loading ? (
                <ArtigoSkeleton />
            ) : (
                sortedArtigos.map((artigo: any) => <ArtigoItem artigo={artigo} key={artigo.id} />)
            )}
        </div>
    );
}

export default PaperFilter;
