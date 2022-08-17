import Link from "next/link";
import Image from "next/image";
import DropdownItem from "../components/DropdownItem";
import DropdownUserItem from "../components/DropdownUserItem";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {RiArrowDropDownLine} from "react-icons/ri";


import Root from "../graphs/components/Root";

import {useUser} from "@auth0/nextjs-auth0";

const NavBarResp = () => {
    const {user, error, isLoading} = useUser();
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
        <div>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">

            <div className="flex w-full justify-between items-center">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <a className="flex items-center py-6 px-2">
                            <span className="text-[#EEEEEE] font-semibold text-2xl tracking-tight pl-2">LEXI</span>
                            <span className="text-[#0952DB] font-semibold text-2xl tracking-tight pr-2">NODE</span>
                        </a>
                    </Link>

                </div>
                {/* Routes */}
            <div className="hidden justify-between md:flex">
                <div className="ml-10 items-center flex space-x-4">
                    {!user ? (
                        <Link href="/artigos">
                            <a className="py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1">
                                <span className="text-white">Artigos</span>
                            </a>
                        </Link>
                    ) : (
                        <div className="relative py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1">
                            <DropdownItem user={user}>
                                <span className="text-white flex items-center">
                                    <RiArrowDropDownLine className="text-white text-2xl" />
                                    Artigos
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
                        <div className="relative py-2 px-3 font-semibold rounded-full transition duration-300 mx-1">
                            <DropdownUserItem user={user}>
                                <span className="flex">
                                
                                    <Image
                                        className="rounded-full"
                                        src={user.picture || "https://i.imgur.com/eRWRaqG.png"}
                                        alt={user.name || "NAO CARREGOU"}
                                        width="45"
                                        height="45"
                                    />
                                </span>
                            </DropdownUserItem>
                        </div>
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
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
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
      </>
    );
};

export default NavBarResp;
