import React from "react";
import {useEffect} from "react";
import {useRouter} from "next/router";
import ArtigoItem from "../../../components/artigos/ArtigoItem";
import ArtigoSkeleton from "../../../components/skeletons/ArtigoSkeleton";
import axios from "axios";

function Autor() {
    const router = useRouter();
    const {keyword} = router.query;
    const [key, setKey] = React.useState<any[]>([]);

    useEffect(() => {
        axios.get(`/api/paper/find/keywords/${keyword}`)
            .then((data) => setKey(data.data));
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>
                Artigos com a palavra-chave --{">"} {keyword}
            </h1>
            {key.map((artigo) => (
                <ArtigoItem artigo={artigo} key={artigo.id} />
            ))}
        </div>
    );
}

export default Autor;
