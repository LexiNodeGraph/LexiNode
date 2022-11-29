import {Transition} from "@headlessui/react";
import Link from "next/link";

function MobileNav({isOpen, setIsOpen, user}: any) {
    return (
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
                        <Link href="/artigos">
                            <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded text-base font-medium" onClick={() => setIsOpen(!isOpen)}>
                                Artigos
                            </a>
                        </Link>
                        <Link href="/autores">
                            <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded text-base font-medium" onClick={() => setIsOpen(!isOpen)}>
                                Autores
                            </a>
                        </Link>
                        {!user && (
                            <Link href="/api/auth/login">
                                <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded text-base font-medium" onClick={() => setIsOpen(!isOpen)}>
                                    Entrar
                                </a>
                            </Link>
                        )}
                        {user && (
                            <Link href="/perfil">
                                <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded text-base font-medium" onClick={() => setIsOpen(!isOpen)}>
                                    Meu Perfil
                                </a>
                            </Link>
                        )}
                        {user && (
                            <Link href="/api/auth/logout">
                                <a
                                    className="hover:bg-gray-700 text-[#EF4444] block px-3 py-2 rounded text-base font-medium"
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
    );
}

export default MobileNav;
