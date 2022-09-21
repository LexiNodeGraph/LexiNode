import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function Autor() {

    const router = useRouter();
    const { keyword } = router.query;
    const [key, setKey] = React.useState<any[]>([]);

    useEffect(() => {
        axios.get(`/api/paper/find/keywords/${keyword}`)
            .then((data) => setKey(data.data));
            
    }, []);

    return (
        <div>
            <h1>Artigos com a palavra-chave --{'>'} {keyword}</h1>
            {key.map((artigo) => (
                <div key={artigo.id}>
                    <h2>{artigo.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default Autor;
