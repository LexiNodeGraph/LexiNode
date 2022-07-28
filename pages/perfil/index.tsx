import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {withPageAuthRequired } from "@auth0/nextjs-auth0";

const Perfil = () => {
    return(
        <div>
            <NavBar />

            <h1 className="flex justify-center text-2xl">Perfil</h1>
        
            <Footer />
        </div>

    )

}

export default Perfil;
export const getServerSideProps = withPageAuthRequired();
