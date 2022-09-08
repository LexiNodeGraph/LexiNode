import axios from "axios";

import {useEffect, useState} from "react";

import AutorSkeleton from "../../components/skeletons/AutorSkeleton";
import AutorItem from "../../components/autores/AutorItem";
import FilterForm from "../../components/FilterForm";
import {map} from "lodash";

const Autores = () => {
    const [artigos, setArtigos] = useState([]);
    const [allAuthors, setAllAuthors] = useState<any[]>([]);
    const [ordenar, setOrdenar] = useState();
    const [input, setInput] = useState("");

    const authors = allAuthors.filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i);
    const filtredAuthors = authors.filter((author) => author.name.toLowerCase().includes(input));

    useEffect(() => {
        getAuthors();
    }, [artigos]);

    useEffect(() => {
        axios.get("/api/paper/find/all").then((res) => setArtigos(res.data));
        return () => {
            setArtigos([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function getAuthors() {
        artigos.forEach((artigo: any) => {
            artigo.authors.forEach((author: any) => {
                setAllAuthors((prev) => [...prev, author]);
            });
        });
        return authors;
    }

    return (
        <main className="p-2 mr-2  dark:bg-neutral-900 dark:border-neutral-700">
            <FilterForm input={input} ordenar={ordenar} setOrdenar={setOrdenar} setInput={setInput} />
            <ul className="mt-4">
                {authors.length > 0 ? (
                    ordenar ? (
                        filtredAuthors
                            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                            .map((author) => <AutorItem author={author} key={author.email} />)
                    ) : (
                        filtredAuthors
                            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                            .reverse()
                            .map((author) => <AutorItem author={author} key={author.email} />)
                    )
                ) : (
                    <AutorSkeleton />
                )}
            </ul>
        </main>
    );
};

export default Autores;
