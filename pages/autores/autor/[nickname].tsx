import {useState, useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import Router from "next/router";

import {BiArrowBack} from "react-icons/bi";

import ArtigoSkeleton from "../../../components/skeletons/ArtigoSkeleton";
import ArtigoItem from "../../../components/artigos/ArtigoItem";
import FilterForm from "../../../components/FilterForm";

function Autor() {
    const router = useRouter();
    const {nickname} = router.query;

    const [artigos, setArtigos] = useState<any[]>([]);

    const [authorPapers, setAuthorPapers] = useState<any[]>([]);

    const [ordenar, setOrdenar] = useState();
    const [input, setInput] = useState("");

    const filtredArtigos = authorPapers.filter((artigo) => artigo.title.toLowerCase().includes(input));

    useEffect(() => {
        axios.get("/api/paper/find/all").then((data) => setArtigos(data.data));
        return () => {
            setArtigos([]);
        };
    }, []);

    useEffect(() => {
        getAuthorPapers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artigos]);
    
    // Rota pra achar os dados dos autores /api/paper/find/authors/{nickname}



    function getAuthorPapers() {
        artigos.forEach((artigo: any) => {
            artigo.authors.forEach((author: any) => {
                if (author.email == nickname) {
                    setAuthorPapers((authorPapers) => [...authorPapers, artigo]);
                }
            });
        });
    }
    // console.log(authorPapers);

    return (
        <div>
            <div className=" p-4 dark:bg-neutral-900 dark:border-neutral-700">
                <BiArrowBack className=" cursor-pointer text-xl  ease-out duration-300 rounded-full dark:text-white " onClick={() => Router.back()} />
                <h1 className="text-center text-4xl font-bold text-neutral-900 dark:text-neutral-200">{nickname}</h1>
            </div>
            <div
                className="
            gap-2  p-2 pr-4 w-full h-screen flex flex-col-reverse
            sm:flex-row
            dark:bg-neutral-900 dark:border-neutral-700
          "
            >
                <div className=" w-full h-fit bg-white rounded  shadow  dark:bg-neutral-900  dark:border-neutral-700">
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
