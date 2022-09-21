import axios from "axios";

import {useEffect, useState} from "react";

import AutorSkeleton from "../../components/skeletons/AutorSkeleton";
import AutorItem from "../../components/autores/AutorItem";
import FilterForm from "../../components/FilterForm";

const Autores = () => {
    const [ordenar, setOrdenar] = useState();
    const [input, setInput] = useState("");
    const [autores, setAutores] = useState<any[]>([]);
    const filtredAuthors = autores.filter((author) => author.name.toLowerCase().includes(input));

    useEffect(() => {
        axios.get("/api/paper/find/authors/all").then((res) => setAutores(res.data));
        return () => {
            setAutores([]);
        };
    }, []);

    return (
        <main className="p-2 mr-2  dark:bg-neutral-900 dark:border-neutral-700">
            <FilterForm input={input} ordenar={ordenar} setOrdenar={setOrdenar} setInput={setInput} />
            <ul className="mt-4">
                {autores.length > 0 ? (
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
