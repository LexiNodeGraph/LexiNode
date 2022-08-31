import {withPageAuthRequired, useUser} from "@auth0/nextjs-auth0";
import {useState} from "react";

import UserCard from "../components/perfil/UserCard";
import UserContentCard from "../components/perfil/UserContentCard";
import EditarPerfilModal from "../components/perfil/EditarPerfilModal";

const PerfilLayout = ({children}: any) => {
    const {user, error, isLoading} = useUser();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {user && (
                <main
                    className="h-screen p-2 flex flex-col gap-2
                                sm:flex-row dark:bg-neutral-900"
                >
                    <UserCard user={user} showModal={showModal} setShowModal={setShowModal} />
                    <UserContentCard>{children}</UserContentCard>
                    <EditarPerfilModal showModal={showModal} setShowModal={setShowModal} />
                </main>
            )}
        </>
    );
};

export default PerfilLayout;
export const getServerSideProps = withPageAuthRequired();
