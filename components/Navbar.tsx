const NavBar = () => {
    return (
        <nav className="bg-black shadow-xl">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">

                    <div>
                        <a className="flex items-center py-6 px-2">
                            <span className="text-[#0952DB] font-semibold text-2xl tracking-tight pl-2">LEXI</span>
                            <span className="text-[#EEEEEE] font-semibold text-2xl tracking-tight pr-2">NODE</span>
                        </a>
                        
                    </div>

                    <div className="flex items-center py-2 px-2">
                        
                        <a className="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" to="/artigos">
                            <span>Artigos</span>
                        </a>

                        <a className="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" to="/autores">
                            <span>Autores</span>
                        </a>

                        <a 
                        className="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" 

                        >
                            <span>Entrar</span>
                        </a>

                        <a 
                        className="py-2 px-6 rounded-2xl bg-black hover:bg-[#ffffff11] transition duration-300" 

                        >


                        </a>

                    </div>

                </div>
            </div>
        </nav>

    )
}

export default NavBar;