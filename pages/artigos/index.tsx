import {useEffect, useState} from "react";
import axios from "axios";

import PaperFilter from "../../components/PaperFilter";

const Artigos = () => {
    const [artigos, setArtigos] = useState<any[]>([]);

    useEffect(() => {
        axios.get(`/api/paper/find/all`).then((data) => setArtigos(data.data));
        return () => {
            setArtigos([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="gap-2  p-2 pr-4 w-full min-h-screen flex flex-col-reverse sm:flex-row dark:bg-neutral-900 dark:border-neutral-700">
            <PaperFilter artigos={artigos} />
        </div>
    );
};
export default Artigos;
