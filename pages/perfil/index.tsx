import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

import {withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";

const Perfil = () => {
    const { user, error, isLoading } = useUser();

    return(
        <div>
            <NavBar />

            

            <Link href="/perfil">
                <a 
                className="flex justify-center mt-10"
                >
                    <Image className='rounded-2xl' src={user?.picture || "https://i.imgur.com/eRWRaqG.png"} alt={user?.name || "Não encontrado"} width='100' height='100'  />
                </a>

            </Link>

            <h1 className="flex justify-center text-2xl mt-3 font-semibold">{user?.name}</h1>


            <Footer />
        
        </div>

    )

}

export default Perfil;
export const getServerSideProps = withPageAuthRequired();
