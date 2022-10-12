import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import axios from "axios";
import Router from "next/router";

import PaperFilter from "../../../components/PaperFilter";

import {BiArrowBack} from "react-icons/bi";

function Autor() {
    const router = useRouter();
    const {nickname} = router.query;

    const [autor, setAutor] = useState<any>({});
    const [artigos, setArtigos] = useState<any[]>([]);

    useEffect(() => {
        axios.get("/api/paper/find/all").then((data) => getAuthorPapers(data.data));
        axios.get(`/api/paper/find/authors/${nickname}`).then((data) => setAutor(data.data[0]));
        return () => {
            setArtigos([]);
        };
    }, []);

    // Rota pra achar os dados dos autores /api/paper/find/authors/{nickname}

    function getAuthorPapers(papers: any[]) {
        papers.forEach((artigo: any) => {
            artigo.authors.forEach((author: any) => {
                if (author.email == nickname) {
                    setArtigos((artigos) => [...artigos, artigo]);
                }
            });
        });
    }

    return (
        <div>
            <div className=" p-4 dark:bg-neutral-900 dark:border-neutral-700">
                <BiArrowBack className=" cursor-pointer text-xl  ease-out duration-300 rounded-full dark:text-white " onClick={() => Router.back()} />
                <h1 className="text-center text-4xl font-bold text-neutral-900 dark:text-neutral-200">{autor.name}</h1>
            </div>
            <div
                className="
            gap-2  p-2 pr-4 w-full h-screen flex flex-col-reverse
            sm:flex-row
            dark:bg-neutral-900 dark:border-neutral-700
          "
            >
                <PaperFilter artigos={artigos} />
            </div>
        </div>
    );
}

export default Autor;
