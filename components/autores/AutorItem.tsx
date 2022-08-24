import Image from "next/image";
import Link from "next/link";

import {BiChevronRight} from "react-icons/bi";

function AutorItem({author}: any) {
    return (
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
            <Link href={`/autores/autor/${author.nickname}`}>
                <BiChevronRight className=" text-4xl ease-out duration-300 rounded-full hover:text-[#0952DB] hover:bg-[#00000011]" />
            </Link>
        </li>
    );
}

export default AutorItem;
