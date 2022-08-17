import {useEffect, useState} from "react";
import {RiArrowDropDownLine} from "react-icons/ri";
import Link from "next/link";

function DropdownItem({children, user}: any) {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        function closeDropdown(e: any) {
            if (e.composedPath()[1].tagName !== "SPAN") {
                setIsOpen(false);
            }
        }

        window.addEventListener("click", closeDropdown);

        return () => {
            document.body.removeEventListener("click", closeDropdown);
            setIsOpen(false);
        };
    }, []);

    return (
        <>
            <span onClick={toggle} className="cursor-pointer">
                {children}
            </span>

            <div className={`${isOpen ? "" : "hidden"} absolute left-0 top-full z-10 w-44 bg-stone-900 rounded divide-y divide-gray-100 shadow`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <Link href="/artigos">
                            <a className="block py-2 px-4 hover:bg-stone-800 text-white">Todos os artigos</a>
                        </Link>
                    </li>

                    {user.email.includes("@ifc.edu.br") && (
                        <li>
                            <Link href="/adicionar">
                                <a className="block py-2 px-4 hover:bg-stone-800 text-white">Adicionar artigo</a>
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link href="/artigos/favoritos">
                            <a className="block py-2 px-4 hover:bg-stone-800 text-white">Favoritos</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default DropdownItem;
