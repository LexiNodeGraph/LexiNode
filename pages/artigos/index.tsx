import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import PaperFilter from "../../components/PaperFilter";

const Artigos = () => {
    const [artigos, setArtigos] = useState<any[]>([]);

    const fetchArtigos = useCallback(async () => {
        try {
            const response = await axios.get("/api/paper/find/all");
            setArtigos(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchArtigos();
        return () => {
            setArtigos([]);
        };
    }, [fetchArtigos]);

    return (
        <div className="gap-2 p-2 pr-4 w-full min-h-screen flex flex-col-reverse sm:flex-row dark:bg-neutral-900 dark:border-neutral-700">
            <PaperFilter artigos={artigos} />
        </div>
    );
};

export default Artigos;
