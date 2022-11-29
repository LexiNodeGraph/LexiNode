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
        <main className="gap-2 p-2 pr-4 w-full min-h-screen flex flex-col-reverse sm:flex-row dark:bg-neutral-900 dark:border-neutral-700">
            <AuthorFilter autores={autores} />
        </main>
    );
};

export default Autores;
