import {useEffect} from "react";

import {withPageAuthRequired, useUser} from "@auth0/nextjs-auth0";

import UserCard from "../../components/perfil/UserCard";
import UserContentCard from "../../components/perfil/UserContentCard";

const Perfil = () => {
    const {user, error, isLoading} = useUser();

    return (
        <>
            {user && (
                <main
                    className="h-screen p-2 flex flex-col gap-1
                                sm:flex-row"
                >
                    <UserCard user={user} />
                    <UserContentCard />
                </main>
            )}
        </>
    );
};

export default Perfil;
export const getServerSideProps = withPageAuthRequired();
