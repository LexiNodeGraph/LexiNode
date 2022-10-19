import {useEffect, useState} from "react";
import {useRouter} from "next/router";

import Router from "next/router";
import axios from "axios";
import Link from "next/link";

import Tag from "../../../components/Tag";
import {BiArrowBack} from "react-icons/bi";

function SinglePaper() {
    const router = useRouter();
    const {id} = router.query;

    const [isLoading, setIsLoading] = useState(true);
    const [artigo, setArtigo] = useState<any>({});

    useEffect(() => {
        if (id) {
            axios.get(`/api/paper/find/${id}`).then((data: any) => {
                setArtigo(data.data);
                setIsLoading(false);
            });
        }
    }, [id]);

    return (
        <div className="min-h-screen dark:bg-neutral-900">
            {!isLoading ? (
                <div>
                    <div
                        className=" p-4 dark:bg-neutral-900 dark:border-neutral-700
                   "
                    >
                        <BiArrowBack className="cursor-pointer text-xl ease-out duration-300 rounded-full dark:text-white " onClick={() => Router.back()} />

                        <p className="text-center text-xl font-bold p-2 text-neutral-900 dark:text-neutral-200">{artigo.title}</p>
                    </div>

                    <div className="flex flex-col w-full p-4 dark:bg-neutral-900">
                        <hr className="dark:border-neutral-700" />

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">
                            {artigo.authors.map((author: any, index: any) => (
                                <Link href={`../../autores/autor/${author.email}`} key={author.email}>
                                    <span key={author.email} className="hover:underline hover:cursor-pointer">
                                        {author.name}
                                        {index === artigo.authors.length - 1 ? "" : ", "}
                                    </span>
                                </Link>
                            ))}
                        </span>
                        <hr className="dark:border-neutral-700" />

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">
                            artigo da área de <span className="font-bold">{artigo.research_field.toLowerCase()}</span>
                        </span>
                        <hr className="dark:border-neutral-700" />

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">artigo publicado em {artigo.year}</span>
                        <hr className="dark:border-neutral-700" />

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">{artigo.journal_title}</span>

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">Resumo:{artigo.abstract}</span>
                        <hr className="dark:border-neutral-700" />

                        <div className="mt-2 rounded w-full inline-flex  flex-wrap gap-2">
                            {artigo.keywords.map((keyword: any, index: any) => (
                                <Link href={`../../artigos/keyword/${keyword}`} key={index}>
                                    <div>
                                        <Tag label={keyword} />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <span className="p-2 text-center text-neutral-900 dark:text-neutral-200">
                            Clique
                            <a className="text-neutral-900 font-bold dark:text-neutral-200" href={artigo.web_link}>
                                {" "}
                                aqui{" "}
                            </a>
                            para acessar o artigo completo
                        </span>
                    </div>
                </div>
            ) : (
                <h1>Carregando...</h1>
            )}
        </div>
    );
}

export default SinglePaper;
