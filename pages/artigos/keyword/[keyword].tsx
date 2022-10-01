import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

import ArtigoItem from "../../../components/artigos/ArtigoItem";
import ArtigoSkeleton from "../../../components/skeletons/ArtigoSkeleton";
import FilterForm from "../../../components/FilterForm";

function Autor() {
    const router = useRouter();
    const {keyword} = router.query;
    const [artigos, setArtigos] = useState<any[]>([]);

    const [ordenar, setOrdenar] = useState();
    const [input, setInput] = useState("");

    const filtredArtigos = artigos.filter((artigo) => artigo.title.toLowerCase().includes(input));
    useEffect(() => {
        axios.get(`/api/paper/find/keywords/${keyword}`).then((data: any) => setArtigos(data.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);

    return (
        <div>
            <div className=" p-4 dark:bg-neutral-900 dark:border-neutral-700">
                <h1 className="text-center text-4xl font-bold text-neutral-900 dark:text-neutral-200">{keyword}</h1>
            </div>
            <div
                className="
                gap-2  p-2 pr-4 w-full h-screen flex flex-col-reverse
                sm:flex-row
                dark:bg-neutral-900 dark:border-neutral-700
              "
            >
                <div className=" w-full h-fit bg-white rounded   dark:bg-neutral-900  dark:border-neutral-700">
                    <FilterForm input={input} ordenar={ordenar} setOrdenar={setOrdenar} setInput={setInput} />
                    {artigos.length > 0 ? (
                        filtredArtigos.length > 0 ? (
                            ordenar ? (
                                filtredArtigos
                                    .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
                                    .map((artigo) => <ArtigoItem artigo={artigo} key={artigo.id} />)
                            ) : (
                                filtredArtigos
                                    .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
                                    .reverse()
                                    .map((artigo) => <ArtigoItem artigo={artigo} key={artigo.id} />)
                            )
                        ) : (
                            <h1 className="text-center p-4 text-xl font-bold text-neutral-900 dark:text-neutral-200">Nenhum artigo encontrado...</h1>
                        )
                    ) : (
                        <ArtigoSkeleton />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Autor;
