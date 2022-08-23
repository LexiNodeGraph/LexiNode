import Link from "next/link";
import Image from "next/image";
import React from "react";
import DropdownItem from "../components/DropdownItem";
import DropdownUserItem from "../components/DropdownUserItem";
import {RiArrowDropDownLine} from "react-icons/ri";
import {useUser} from "@auth0/nextjs-auth0";

function toggleMenu() {
    console.log("clicked");
    const navToggle: any = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
    }
}

const NavBar = () => {
    const {user, error, isLoading} = useUser();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="bg-black shadow-xl z-50 w-full">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex">
                        <Link href="/">
                            <a className="flex items-center py-6 px-2">
                                <span className="text-[#EEEEEE] font-semibold text-2xl tracking-tight pl-2">LEXI</span>
                                <span className="text-[#0952DB] font-semibold text-2xl tracking-tight pr-2">NODE</span>
                            </a>
                        </Link>
                    </div>

                    {/* RESPONSIVE */}

                    <div className={"md:hidden w-full items-center md:w-auto mt-5 md:mt-0 border-t-2 md:border-none" + (navbarOpen ? " flex" : " hidden")}>
                        <h3 className="block md:inline-block font-semibold text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">
                            Artigos
                        </h3>
                        <h3 className="block md:inline-block font-semibold text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">
                            Autores
                        </h3>
                    </div>

                    {/* <div className="flex md:hidden">
                        <button onClick={() => setNavbarOpen(!navbarOpen)} id="hamburger">
                            <img className="toggle block" src="/whiteMenu.png" width="40" height="40" />
                            <img className="toggle hidden" src="/whiteMenu.png" width="40" height="40" />
                        </button>
                    </div> */}

                    {/* RESPONSIVE END */}

                    <div className="hidden md:flex items-center py-1 px-2">
                        {!user ? (
                            <Link href="/artigos">
                                <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] ease-out duration-300 mx-1">
                                    <span className="text-white">Artigos</span>
                                </a>
                            </Link>
                        ) : (
                            <div className="relative py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] ease-out duration-300 mx-1">
                                <DropdownItem user={user}>
                                    <span className="text-white flex items-center">
                                        <RiArrowDropDownLine className="text-white text-2xl" />
                                        Artigos
                                    </span>
                                </DropdownItem>
                            </div>
                        )}

                        <Link href="/autores">
                            <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] ease-out duration-300 mx-1">
                                <span className="text-white">Autores</span>
                            </a>
                        </Link>
                        {!user && (
                            <Link href="/api/auth/login">
                                <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] ease-out duration-300 mx-1">
                                    <span className="text-white">Entrar</span>
                                </a>
                            </Link>
                        )}
                        {user?.email?.includes("@ifc.edu.br") && (
                            <Link href="/">
                                <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] ease-out duration-300 mx-1">
                                    <span className="text-white">Adicionar Artigo</span>
                                </a>
                            </Link>
                        )}
                        {user && (
                            <div className="relative py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] ease-out duration-300 mx-1">
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
