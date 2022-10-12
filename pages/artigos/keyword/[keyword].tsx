import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Router from "next/router";
import axios from "axios";

import {BiArrowBack} from "react-icons/bi";

import PaperFilter from "../../../components/PaperFilter";

function Autor() {
    const router = useRouter();
    const {keyword} = router.query;

    const [artigos, setArtigos] = useState<any[]>([]);

    useEffect(() => {
        axios.get(`/api/paper/find/keywords/${keyword}`).then((data: any) => setArtigos(data.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);

    return (
        <div>
            <div className=" p-4 dark:bg-neutral-900 dark:border-neutral-700">
                <BiArrowBack className=" cursor-pointer text-xl  ease-out duration-300 rounded-full dark:text-white " onClick={() => Router.back()} />
                <div className="">
                    <div className="text-center text-xl font-bold text-neutral-800 dark:text-neutral-300">Artigos contendo a palavra-chave</div>
                    <h1 className="text-center text-4xl font-bold text-neutral-900 dark:text-neutral-200">{keyword}</h1>
                </div>
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
