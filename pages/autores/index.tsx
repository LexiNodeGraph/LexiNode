import axios from "axios";
import {useEffect, useState} from "react";
import Image from "next/image";
import {BiChevronRight} from "react-icons/bi";

const Autores = () => {
    const [authors, setAuthors] = useState<any[]>([]);

    useEffect(() => {
        axios.get("/api/author/find/all").then((res) => setAuthors(res.data));
        return () => {
            setAuthors([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="p-4">
            <div className="flex row w-full justify-around ">
                <input
                    type="text"
                    className="block p-4 mx-2 pl-10 w-4/5 text-sm text-white bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Pesquiar autores"
                />
                <select className="bg-black border w-1/5 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5">
                    <option selected>Filtar por</option>
                </select>
            </div>
            <ul>
                {authors.length > 0 &&
                    authors.map((author) => (
                        <li key={author.id} className="flex row justify-between m-2 items-center bg-white drop-shadow-lg p-2 rounded">
                            <header className="flex items-center text-bold p-1 ">
                                <Image
                                    className="rounded-full "
                                    src={
                                        author?.picture ||
                                        "https://imgs.search.brave.com/95uqrX0sPNStAH-hNb9IC1Dq-eZQGRKKEUFV6PMDY_U/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5k/cm9kZC5jb20vaW1h/Z2VzMTQvd2hpdGUx/LmpwZw"
                                    }
                                    alt={author?.name || "Não encontrado"}
                                    width="75"
                                    height="75"
                                />
                                <main className="flex flex-col mx-4">
                                    <h2 className=" font-bold">{author.name}</h2>
                                    <p className="text-gray-800 font-sm">{author.email}</p>
                                </main>
                            </header>
                            <BiChevronRight className=" text-4xl ease-out duration-300 rounded-full hover:text-[#0952DB] hover:bg-[#00000011]" />
                        </li>
                    ))}
            </ul>
        </main>
    );
};

export default Autores;
