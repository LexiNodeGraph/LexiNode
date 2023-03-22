import Tag from "../Tag";
import Link from "next/link";
import { memo } from "react";

type Author = {
    name: string;
    email: string;
};

type Artigo = {
    id: string;
    title: string;
    authors: Author[];
    keywords: string[];
};

type ArtigoItemProps = {
    artigo: Artigo;
};

function ArtigoItem({ artigo }: ArtigoItemProps) {
    const authors = artigo.authors.map((author) => (
        <Link href={`/autores/autor/${author.email}`} key={author.email}>
            <a className="hover:underline cursor-pointer">{author.name}</a>
        </Link>
    ));

    const keywords = artigo.keywords.map((keyword) => (
        <Link href={`../../artigos/keyword/${keyword}`} key={keyword}>
            <div>
                <Tag label={keyword} />
            </div>
        </Link>
    ));

    return (
        <div className="flex row justify-between w-full bg-white rounded border p-2 mt-2 shadow-md dark:bg-neutral-900  dark:border-neutral-700">
            <div className="flex flex-col w-full p-4">
                <Link href={`/artigos/artigo/${artigo.id}`}>
                    <a className="hover:underline font-bold dark:text-neutral-50">{artigo.title}</a>
                </Link>

                <span className="text-neutral-900 dark:text-neutral-200">{authors}</span>

                <div className="mt-2 rounded w-full inline-flex flex-wrap gap-2">{keywords}</div>
            </div>
        </div>
    );
}

export default memo(ArtigoItem);
