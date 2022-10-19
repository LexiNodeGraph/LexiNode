import Image from "next/image";
import Link from "next/link";

import {BiChevronRight} from "react-icons/bi";

function AutorItem({author}: any) {
    return (
        <Link href={`/autores/autor/${author.email}`}>
            <li className="flex row justify-between  items-center w-full cursor-pointer bg-white  border shadow-md p-2 rounded dark:bg-neutral-900 dark:border-neutral-700">
                <div className="flex items-center text-bold p-1  ">
                    <Image
                        className="rounded-full w-[75px] h-[75px]"
                        src={
                            author?.picture ||
                            "https://imgs.search.brave.com/95uqrX0sPNStAH-hNb9IC1Dq-eZQGRKKEUFV6PMDY_U/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5k/cm9kZC5jb20vaW1h/Z2VzMTQvd2hpdGUx/LmpwZw"
                        }
                        alt={author?.name || "Não encontrado"}
                        width="75"
                        height="75"
                    />
                    <div className="flex flex-col mx-4">
                        <h2 className="font-bold  dark:text-neutral-50">{author.name}</h2>
                        <p className="text-gray-800 font-sm  dark:text-neutral-200">{author.email}</p>
                    </div>
                </div>
                <div></div>
            </li>
        </Link>
    );
}

export default AutorItem;
