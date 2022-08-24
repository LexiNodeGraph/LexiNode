import {useEffect, useState} from "react";
import {useUser} from "@auth0/nextjs-auth0";

import ArtigoSkeleton from "../../components/skeletons/ArtigoSkeleton";
import ArtigoItem from "../../components/artigos/ArtigoItem";
import FilterForm from "../../components/FilterForm";

const Artigos = () => {
    const {user} = useUser();

    let url: string;

    const [artigos, setArtigos] = useState<any[]>([]);
    const [input, setInput] = useState("");

    const filtredArtigos = artigos.filter((artigo) => artigo.label.toLowerCase().includes(input));

    if (typeof window !== "undefined") {
        window.location.protocol == "http:" ? (url = "http://localhost:3000") : (url = "https://lexinode.vercel.app");
    }
    useEffect(() => {
        fetch(`${url}/api/dataset`)
            .then((res) => res.json())
            .then((data) => setArtigos(data.nodes));
        return () => {
            setArtigos([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function toggleFavorite(id: string) {
        // Precisa da rota de favoritos no backend
    }

    return (
        <main className="p-4 ">
            <FilterForm input={input} setInput={setInput} />

            <ul className="mt-4">{artigos.length > 0 ? filtredArtigos.map((artigo) => <ArtigoItem artigo={artigo} user={user} />) : <ArtigoSkeleton />}</ul>
        </main>
    );
};
export default Artigos;
