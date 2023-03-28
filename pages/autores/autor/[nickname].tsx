import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

import PaperFilter from "../../../components/PaperFilter";

import UserCard from "../../../components/perfil/UserCard";

function Autor() {
    const router = useRouter();
    const { nickname } = router.query;

    const [autor, setAutor] = useState<any>({});
    const [artigos, setArtigos] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const [artigosData, autorData] = await Promise.all([
                axios.get(`/api/paper/find/authors/paper/${nickname}`),
                axios.get(`/api/paper/find/authors/${nickname}`),
            ]);
            setArtigos(artigosData.data);
            setAutor(autorData.data[0]);
        }
        fetchData();
    }, [nickname]);

    return (
        <div className="sm:inline-flex flex-col w-full gap-2 p-2 min-h-screen dark:bg-neutral-900 bg-neutral-50 ">
            <UserCard user={autor} />
            <PaperFilter artigos={artigos} />
        </div>
    );
}

export default Autor;
