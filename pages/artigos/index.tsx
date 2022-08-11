import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import {useEffect, useState} from "react";
import {useUser} from "@auth0/nextjs-auth0";

const Artigos = () => {
    const {user, error, isLoading} = useUser();

    const [input, setInput] = useState("");
    const [artigos, setArtigos] = useState<any[]>([]);

    return (
        
        <>
            <NavBar />

            <div className="artigos">
                <div className="input-controls">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="search-input" />
                    <select name="" id="">
                        <option value="filtro" selected>
                            Filtrar por:
                        </option>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                </div>
                <div className="artigos-list">
                    {artigos.map(
                        (artigo) =>
                            artigo.label.toLowerCase().includes(input) && (
                                <a href={artigo.URL} key={artigo.id} className="artigo">
                                    <div className="artigo__header">
                                        <div className="artigo__nome">
                                            {artigo.label}{" "}
                                            {user && (
                                                <button className="artigo__fav-btn">
                                                    <AiOutlineStar />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </a>
                            )
                    )}
                </div>
            </div>

            <Footer />
        </> 
                                             
    );
};
export default Artigos;