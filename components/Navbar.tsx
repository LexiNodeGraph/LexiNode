import Link from "next/link";
import Image from "next/image";

import DropdownItem from "../components/DropdownItem";
import DropdownUserItem from "../components/DropdownUserItem";

import {RiArrowDropDownLine} from "react-icons/ri";

import {useUser} from "@auth0/nextjs-auth0";

const NavBar = () => {
    const {user, error, isLoading} = useUser();
    return (
        <nav className="bg-black shadow-xl z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div
                    className="flex justify-between
                "
                >
                    <div>
                        <Link href="/">
                            <a className="flex items-center py-6 px-2">
                                <span className="text-[#0952DB] font-semibold text-2xl tracking-tight pl-2">LEXI</span>
                                <span className="text-[#EEEEEE] font-semibold text-2xl tracking-tight pr-2">NODE</span>
                            </a>
                        </Link>
                    </div>

                    <div className="flex items-center py-1 px-2">
                        {!user ? (
                            <Link href="/artigos">
                                <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1">
                                    <span className="text-white">Artigos</span>
                                </a>
                            </Link>
                        ) : (
                            <div className="relative py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1">
                                <DropdownItem>
                                    <span className="text-white flex items-center">
                                        Artigos
                                        <RiArrowDropDownLine className="text-white text-2xl" />
                                    </span>
                                </DropdownItem>
                            </div>
                        )}

                        <Link href="/autores">
                            <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1">
                                <span className="text-white">Autores</span>
                            </a>
                        </Link>
                        {!user && (
                            <Link href="/api/auth/login">
                                <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1">
                                    <span className="text-white">Entrar</span>
                                </a>
                            </Link>
                        )}
                        {user?.email?.includes("@ifc.edu.br") && (
                            <Link href="/">
                                <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1">
                                    <span className="text-white">Adicionar Artigo</span>
                                </a>
                            </Link>
                        )}
                        {user && (
                            <div className="relative py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1">
                                <DropdownUserItem user={user}>
                                    <span className="flex items-center">
                                        <RiArrowDropDownLine className="text-white text-2xl " />
                                        <Image
                                            className="rounded-full"
                                            src={user.picture || "https://i.imgur.com/eRWRaqG.png"}
                                            alt={user.name || "NAO CARREGOU"}
                                            width="48"
                                            height="48"
                                        />
                                    </span>
                                </DropdownUserItem>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
