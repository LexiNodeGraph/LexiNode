import Image from "next/image";
import React, {useState} from "react";
import {RiArrowDropDownLine} from "react-icons/ri";

import {useUser} from "@auth0/nextjs-auth0";

import Dropdown from "./Dropdown";

import ItemsContainer from "./navbar/ItemsContainer";

import NavbarItem from "./navbar/NavbarItem";
import Logo from "./navbar/Logo";
import MobileNav from "./navbar/MobileNav";
import MobileMenuButton from "./navbar/MobileMenuButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {user} = useUser();

    const artigosItems = [
        {label: "Artigos", to: "/artigos", show: true},
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
                        <Logo />

                        <ItemsContainer>
                            {user?.email?.includes("@ifc") ? (
                                <Dropdown user={user} items={artigosItems}>
                                    <RiArrowDropDownLine className="text-white text-2xl" />
                                    Artigos
                                </Dropdown>
                            ) : (
                                <NavbarItem to="/artigos">Artigos</NavbarItem>
                            )}

                            <NavbarItem to="/autores">Autores</NavbarItem>

                            {!user && <NavbarItem to="/api/auth/login">Entrar</NavbarItem>}

                            {user?.email?.includes("@ifc") ||
                                (user?.email?.includes("@ifc") && <NavbarItem to="/artigos/publicar">Adicionar artigo</NavbarItem>)}

                            {user && (
                                <Dropdown items={userItems}>
                                    <Image
                                        className="rounded-full"
                                        src={user.picture || "https://i.imgur.com/eRWRaqG.png"}
                                        alt={user.name || "NAO CARREGOU"}
                                        width="35"
                                        height="35"
                                    />
                                </Dropdown>
                            )}
                        </ItemsContainer>
                    </div>

                    <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
        </nav>
    );
};

export default Navbar;
