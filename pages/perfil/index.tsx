import {withPageAuthRequired, useUser} from "@auth0/nextjs-auth0";
import axios from "axios";
import {useEffect, useState} from "react";
import Router from "next/router";

import PaperFilter from "../../components/PaperFilter";
import UserCard from "../../components/perfil/UserCard";
import UserEditCard from "../../components/perfil/UserEditCard";

const Perfil = () => {
    const {user} = useUser();

    const [autor, setAutor] = useState<any>({});
    const [artigos, setArtigos] = useState<any[]>([]);
    const [edit, setEdit] = useState(true);

    useEffect(() => {
        axios.get(`/api/paper/find/authors/paper/${user?.email}`).then((data) => setArtigos(data.data));
        axios.get(`/api/paper/find/authors/${user?.email}`).then((data) => setAutor(data.data[0]));

        // eslint-disable-next-line react-hooks/exhaustive-deps

        return () => {
            setArtigos([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="inline-flex w-full gap-2 p-2 min-h-screen dark:bg-neutral-900 bg-neutral-50">
            <UserCard user={user} setEdit={setEdit} edit={edit} />
            {!edit ? <PaperFilter artigos={artigos} /> : <UserEditCard user={user} edit={edit} setEdit={setEdit}></UserEditCard>}
        </div>
    );
};

export default Perfil;
export const getServerSideProps = withPageAuthRequired();
