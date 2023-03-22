import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import axios from "axios";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import Tag from "../../../components/Tag";

function SinglePaper() {
    const router = useRouter();
    const { id } = router.query;

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

    const handleBack = useCallback(() => {
        Router.back();
    }, []);

    const authors = useMemo(() => {
        return artigo.authors.map((author: any, index: any) => (
            <Link href={`../../autores/autor/${author.email}`} key={author.email}>
                <span key={author.email} className="hover:underline hover:cursor-pointer">
                    {author.name}
                    {index === artigo.authors.length - 1 ? "" : ", "}
                </span>
            </Link>
        ));
    }, [artigo.authors]);

    const keywords = useMemo(() => {
        return artigo.keywords.map((keyword: any, index: any) => (
            <Link href={`../../artigos/keyword/${keyword}`} key={index}>
                <div>
                    <Tag label={keyword} />
                </div>
            </Link>
        ));
    }, [artigo.keywords]);

    return (
        <div className="min-h-screen dark:bg-neutral-900">
            {!isLoading ? (
                <div>
                    <div
                        className=" p-4 dark:bg-neutral-900 dark:border-neutral-700
                   "
                    >
                        <BiArrowBack
                            className="cursor-pointer text-xl ease-out duration-300 rounded-full dark:text-white "
                            onClick={handleBack}
                        />

                        <p className="text-center text-xl font-bold p-2 text-neutral-900 dark:text-neutral-200">
                            {artigo.title}
                        </p>
                    </div>

                    <div className="flex flex-col w-full p-4 dark:bg-neutral-900">
                        <hr className="dark:border-neutral-700" />

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">
                            {authors}
                        </span>
                        <hr className="dark:border-neutral-700" />

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">
                            artigo da área de{" "}
                            <span className="font-bold">{artigo.research_field.toLowerCase()}</span>
                        </span>
                        <hr className="dark:border-neutral-700" />

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">
                            artigo publicado em {artigo.year}
                        </span>
                        <hr className="dark:border-neutral-700" />

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">
                            {artigo.journal_title}
                        </span>

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">
                            Resumo:{artigo.abstract}
                        </span>
                        <hr className="dark:border-neutral-700" />

                        <div className="mt-2 rounded w-full inline-flex  flex-wrap gap-2">
                            {keywords}
                        </div>

                        <hr className="dark:border-neutral-700" />

                        <span className="p-2 text-neutral-900 dark:text-neutral-200">
                            <a
                                href={artigo.pdf_link}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline hover:cursor-pointer"
                            >
                                Link para o artigo
                            </a>
                        </span>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )}
        </div>
    );
}

export default SinglePaper;
