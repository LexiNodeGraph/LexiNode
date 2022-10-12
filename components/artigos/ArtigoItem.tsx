import {RiArrowDropDownLine} from "react-icons/ri";

import Dropdown from "../Dropdown";
import Tag from "../Tag";
import Link from "next/link";

function ArtigoItem({artigo, user}: any) {
    const artigoItems = [
        {
            label: "Adicionar aos favoritos",
            to: "/",
            show: true,
        },
    ];

    return (
        <div className="flex row justify-between w-full bg-white rounded border p-2 mt-2 shadow-md dark:bg-neutral-900  dark:border-neutral-700">
            <div className="flex flex-col w-full p-4">
                <Link href={`/artigos/artigo/${artigo.id}`}>
                    <a className="hover:underline font-bold dark:text-neutral-50">{artigo.title}</a>
                </Link>

                <span className="text-neutral-900 dark:text-neutral-200">
                    {artigo.authors.map((author: any, index: any) => (
                        <Link href={`/autores/autor/${author.email}`} key={index}>
                            <span className="hover:underline cursor-pointer">
                                {author.name}
                                {index === artigo.authors.length - 1 ? "" : ", "}
                            </span>
                        </Link>
                    ))}
                </span>

                <div className="mt-2 rounded w-full inline-flex  flex-wrap gap-2">
                    {artigo.keywords.map((keyword: any, index: any) => (
                        <Link href={`../../artigos/keyword/${keyword}`} key={index}>
                            <div>
                                <Tag label={keyword} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {user && (
                <Dropdown items={artigoItems}>
                    <RiArrowDropDownLine
                        className=" cursor-pointer text-2xl ease-out duration-300 rounded-full hover:text-[#4f8cfe] hover:bg-[#00000011]
                dark:text-white dark:hover:text-white dark:hover:bg-[#ffffff11]"
                    />
                </Dropdown>
            )}
        </div>
    );
}

export default ArtigoItem;
