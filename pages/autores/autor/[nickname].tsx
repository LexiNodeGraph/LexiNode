import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function Autor() {

    const router = useRouter();
    const { nickname } = router.query;
    const [author, setAuthor] = React.useState<any[]>([]);
    
    const findAuthor = async () => await axios.get(`/api/paper/find/authors/${nickname?.toString()}`);

    return (
        <>
            <h1>Artigos do autor</h1>
        </>
    );
}

export default Autor;
