import {useEffect, useState} from "react";
import {useUser} from "@auth0/nextjs-auth0";
import axios from "axios";
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

    const filtredArtigos = artigos.filter((artigo) => artigo.title.toLowerCase().includes(input));

    if (typeof window !== "undefined") {
        window.location.protocol == "http:" ? (url = "http://localhost:3000") : (url = "https://lexinode.vercel.app");
    }
    useEffect(() => {
        axios.get(`${url}/api/paper/find/all`)
            .then((data) => setArtigos(data.data));
        return () => {
            setArtigos([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function toggleFavorite(id: string) {
        // Precisa da rota de favoritos no backend
    }

    return (
        <div
            className="
                gap-2  p-2 pr-4 w-full flex flex-col-reverse
                sm:flex-row
                dark:bg-neutral-900 dark:border-neutral-700"
        >
            <div className=" w-full h-fit bg-white rounded  shadow  dark:bg-neutral-900  dark:border-neutral-700">
                <FilterForm input={input} ordenar={ordenar} setOrdenar={setOrdenar} setInput={setInput} />
                {artigos.length > 0 ? (
                    ordenar ? (
                        filtredArtigos
                            .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
                            .map((artigo) => <ArtigoItem artigo={artigo} user={user} key={artigo.id} />)
                    ) : (
                        filtredArtigos
                            .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
                            .reverse()
                            .map((artigo) => <ArtigoItem artigo={artigo} user={user} key={artigo.id} />)
                    )
                ) : (
                    <ArtigoSkeleton />
                )}
            </div>
            {user && <FavoritosCard />}
        </div>
    );
};
export default Artigos;
