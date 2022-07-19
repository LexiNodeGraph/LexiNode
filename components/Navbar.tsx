import Link from 'next/link';
import Links from 'next/link';
const NavBar = () => {
    return (
        <nav className="bg-black shadow-xl z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">

                    <div>
                        <a className="flex items-center py-6 px-2">
                            <span className="text-[#0952DB] font-semibold text-2xl tracking-tight pl-2">LEXI</span>
                            <span className="text-[#EEEEEE] font-semibold text-2xl tracking-tight pr-2">NODE</span>
                        </a>
                        
                    </div>

                    <div className="flex items-center py-2 px-2">
                        
                    <Link href="/">
                            <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1" 
                            >
                                <span className='text-white'>Artigos</span>
                            </a>
                        </Link>

                        <Link href="/">
                            <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1" 
                            >
                                <span className='text-white'>Autores</span>
                            </a>
                        </Link>

                        <Link href='/api/auth/login'>
                            <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1" 
                            >
                                <span className='text-white'>Entrar</span>
                            </a>
                        </Link>
                        <Link href='/api/auth/logout'>
                            <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1" 
                            >
                                <span className='text-white'>Sair</span>
                            </a>
                        </Link>

                    </div>

                </div>
            </div>
        </nav>

    )
}

export default NavBar;