import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import axios from "axios";

import PaperFilter from "../../../components/PaperFilter";

import UserCard from "../../../components/perfil/UserCard";

function Autor() {
    const router = useRouter();
    const {nickname} = router.query;

    const [autor, setAutor] = useState<any>({});
    const [artigos, setArtigos] = useState<any[]>([]);

    useEffect(() => {
        axios.get(`/api/paper/find/authors/paper/${nickname}`).then((data) => setArtigos(data.data));
        axios.get(`/api/paper/find/authors/${nickname}`).then((data) => setAutor(data.data[0]));
        // eslint-disable-next-line react-hooks/exhaustive-deps

        return () => {
            setArtigos([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="inline-flex w-full gap-2 p-2 min-h-screen bg-neutral-900">
            <UserCard user={autor} />
            <PaperFilter artigos={artigos} />
        </div>
    );
}

export default Autor;
