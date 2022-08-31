import {withPageAuthRequired, useUser} from "@auth0/nextjs-auth0";
import {Children} from "react";

import UserCard from "../components/perfil/UserCard";
import UserContentCard from "../components/perfil/UserContentCard";

const PerfilLayout = ({children}: any) => {
    const {user, error, isLoading} = useUser();

    return (
        <>
            {user && (
                <main
                    className="h-screen p-2 flex flex-col gap-2
                                sm:flex-row dark:bg-neutral-900"
                >
                    <UserCard user={user} />
                    <UserContentCard>{children}</UserContentCard>
                </main>
            )}
        </>
    );
};

export default PerfilLayout;
export const getServerSideProps = withPageAuthRequired();
