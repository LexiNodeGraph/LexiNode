import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function autor() {

    const router = useRouter();
    const { nickname } = router.query;
    const [author, setAuthor] = React.useState<any[]>([]);
    
    const findAuthor = async () => await axios.get(`/api/paper/find/authors/${nickname?.toString()}`);
    console.log(findAuthor().then((res) => console.log(res.data)));

    return (
        <>
            <h1>Artigos do autor " {author} "</h1>
        </>
    );
}

export default autor;
