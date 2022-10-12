import {useEffect, useState} from "react";
import axios from "axios";

import AuthorFilter from "../../components/AuthorFilter";

const Autores = () => {
    const [autores, setAutores] = useState<any[]>([]);

    useEffect(() => {
        axios.get("/api/paper/find/authors/all").then((res) => setAutores(res.data));
        return () => {
            setAutores([]);
        };
    }, []);

    return (
        <main className="p-2 mr-2  dark:bg-neutral-900 dark:border-neutral-700">
            <AuthorFilter autores={autores} />
        </main>
    );
};

export default Autores;
