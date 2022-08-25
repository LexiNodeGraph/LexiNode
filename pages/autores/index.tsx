import axios from "axios";

import {useEffect, useState} from "react";

import AutorSkeleton from "../../components/skeletons/AutorSkeleton";
import AutorItem from "../../components/autores/AutorItem";
import FilterForm from "../../components/FilterForm";

const Autores = () => {
    const [authors, setAuthors] = useState<any[]>([]);
    const [ordenar, setOrdenar] = useState("crescente");
    const [input, setInput] = useState("");

    const filtredAuthors = authors.filter((author) => author.name.toLowerCase().includes(input));

    useEffect(() => {
        axios.get("/api/author/find/all").then((res) => setAuthors(res.data));
        return () => {
            setAuthors([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="p-4">
            <FilterForm input={input} setInput={setInput} setOrdenar={setOrdenar} />
            <ul className="mt-4">
                {authors.length > 0 ? (
                    ordenar === "crescente" ? (
                        filtredAuthors.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)).map((author) => <AutorItem author={author} />)
                    ) : (
                        filtredAuthors
                            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                            .reverse()
                            .map((author) => <AutorItem author={author} />)
                    )
                ) : (
                    <AutorSkeleton />
                )}
            </ul>
        </main>
    );
};

export default Autores;
