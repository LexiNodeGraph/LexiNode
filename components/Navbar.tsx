import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import {RiArrowDropDownLine} from "react-icons/ri";

import {Transition} from "@headlessui/react";
import {useUser} from "@auth0/nextjs-auth0";

import NavDropdown from "./navbar/NavDropdown";
import NavbarItem from "./navbar/NavbarItem";
import Logo from "./navbar/Logo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {user} = useUser();

    const artigosItems = [
        {label: "Artigos", to: "/artigos", show: true},
        {label: "Favoritos", to: "/favoritos", show: true},
        {label: "Adicionar", to: "/adicionar", show: !user},
    ];

    const userItems = [
        {label: "Meu perfil", to: "/perfil", show: true},
        {label: "Sair", to: "/api/auth/logout", show: true, destaque: true},
    ];

    return (
        <nav className="bg-black drop-shadow p-2 relative z-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex w-full justify-between items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Logo />
                        </div>
                        {/* Routes */}
                        <div className="hidden justify-between md:flex">
                            <div className="ml-10 items-center flex space-x-4">
                                {!user ? (
                                    <NavbarItem to="/artigos">Artigos</NavbarItem>
                                ) : (
                                    <NavDropdown user={user} items={artigosItems}>
                                        <RiArrowDropDownLine className="text-white text-2xl" />
                                        Artigos
                                    </NavDropdown>
                                )}

                                <NavbarItem to="/autores">Autores</NavbarItem>

                                {!user && <NavbarItem to="/api/auth/login">Entrar</NavbarItem>}

                                {user?.email?.includes("@ifc.edu.br") && <NavbarItem to="/perfil/publicar">Adicionar artigo</NavbarItem>}

                                {user && (
                                    <NavDropdown items={userItems}>
                                        <Image
                                            className="rounded-full"
                                            src={user.picture || "https://i.imgur.com/eRWRaqG.png"}
                                            alt={user.name || "NAO CARREGOU"}
                                            width="35"
                                            height="35"
                                        />
                                    </NavDropdown>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className=" outline-0 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {!user && (
                                <Link href="/artigos">
                                    <a
                                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        Artigos
                                    </a>
                                </Link>
                            )}
                            {user && (
                                <Link href="/artigos">
                                    <a
                                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        Todos os Artigos
                                    </a>
                                </Link>
                            )}
                            {user && (
                                <Link href="/artigos/favoritos">
                                    <a
                                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        Favoritos
                                    </a>
                                </Link>
                            )}

                            <Link href="/autores">
                                <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(!isOpen)}>
                                    Autores
                                </a>
                            </Link>
                            {!user && (
                                <Link href="/api/auth/login">
                                    <a
                                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        Entrar
                                    </a>
                                </Link>
                            )}
                            {user && (
                                <Link href="/perfil">
                                    <a
                                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        Meu Perfil
                                    </a>
                                </Link>
                            )}

                            {user && (
                                <Link href="/api/auth/logout">
                                    <a
                                        className="hover:bg-gray-700 text-[#EF4444] block px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        Sair
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
};

export default Navbar;
