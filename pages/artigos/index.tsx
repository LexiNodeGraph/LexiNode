import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import {useEffect, useState} from "react";
import {useUser} from "@auth0/nextjs-auth0";

import ArtigoSkeleton from "../../components/skeletons/ArtigoSkeleton";

const Artigos = () => {
    const {user} = useUser();

    let url: string;

    const [input, setInput] = useState("");
    const [artigos, setArtigos] = useState<any[]>([]);

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
            <div className="flex row w-full justify-around mb-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="block p-4 mx-2 pl-10 w-4/5 text-sm text-white bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Pesquiar artigos"
                />
                <select className="bg-black border w-1/5 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5">
                    <option selected>Filtar por</option>
                </select>
            </div>

            <ul>
                {artigos.length > 0 &&
                    filtredArtigos.map((artigo) => (
                        <li key={artigo.id} className="flex row justify-between m-2 bg-white drop-shadow-lg p-2 rounded">
                            <div className="flex flex-col w-full p-4">
                                <a href={artigo.URL} className=" font-bold ">
                                    {artigo.label}
                                </a>
                                <span className="text-slate-600 "> NOME AUTOR</span>

                                <div className="bg-slate-100 my-2 p-2 rounded w-2/4">TAGS E MAIS DETALHES</div>
                            </div>

                            {user && <button className="text-xl p-2">{artigo.favorite ? <AiFillStar /> : <AiOutlineStar />}</button>}
                        </li>
                    ))}

                {artigos.length == 0 && <ArtigoSkeleton />}
            </ul>
        </main>
    );
};
export default Artigos;
