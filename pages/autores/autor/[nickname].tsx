import {useState, useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/router";

import Image from "next/image";

import ArtigoSkeleton from "../../../components/skeletons/ArtigoSkeleton";
import ArtigoItem from "../../../components/artigos/ArtigoItem";

function Autor() {
    const router = useRouter();
    const {nickname} = router.query;
    const [artigos, setArtigos] = useState<any[]>([]);
    const [autor, setAutor] = useState<any>([]);
    const [authorPapers, setAuthorPapers] = useState<any[]>([]);

    useEffect(() => {
        axios.get("/api/paper/find/all").then((data) => setArtigos(data.data));

        return () => {
            setArtigos([]);
            
        };
    }, []);
    
    useEffect(() => {
        getAuthorPapers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artigos]);

    function getAuthorPapers() {
        artigos.forEach((artigo: any) => {
            artigo.authors.forEach((author: any) => {
                if (author.email == nickname) {
                    setAuthorPapers((authorPapers) => [...authorPapers, artigo]);
                }
            });
        });
    }
    console.log(authorPapers);
    console.log(autor);

    return (
        <div className="dark:bg-neutral-900 dark">
            <h1>{nickname}</h1>
            <ul>{authorPapers.length > 0 ? authorPapers.map((artigo) => <ArtigoItem artigo={artigo} key={artigo.id} />) : <ArtigoSkeleton />}</ul>
        </div>
    );
}

export default Autor;
