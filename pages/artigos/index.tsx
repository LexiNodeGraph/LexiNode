import {useEffect, useState} from "react";
import {useUser} from "@auth0/nextjs-auth0";

import ArtigoSkeleton from "../../components/skeletons/ArtigoSkeleton";
import ArtigoItem from "../../components/artigos/ArtigoItem";
import FilterForm from "../../components/FilterForm";
import FavoritosCard from "../../components/artigos/FavoritosCard";

const Artigos = () => {
    const {user} = useUser();

    let url: string;

    const [artigos, setArtigos] = useState<any[]>([]);

    const [ordenar, setOrdenar] = useState();
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
        <div className="inline-flex gap-2 w-full mt-4 p-2 pr-4">
            <div className=" w-full h-fit bg-white rounded-lg  shadow-md ">
                <FilterForm input={input} ordenar={ordenar} setOrdenar={setOrdenar} setInput={setInput} />
                {artigos.length > 0 ? (
                    ordenar ? (
                        filtredArtigos
                            .sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0))
                            .map((artigo) => <ArtigoItem artigo={artigo} user={user} key={artigo.id} />)
                    ) : (
                        filtredArtigos
                            .sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0))
                            .reverse()
                            .map((artigo) => <ArtigoItem artigo={artigo} user={user} key={artigo.id} />)
                    )
                ) : (
                    <ArtigoSkeleton />
                )}
            </div>
            <FavoritosCard />
        </div>
    );
};
export default Artigos;
