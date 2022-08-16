import {useState, useEffect} from "react";

import Link from "next/link";

function DropdownUserItem({children, user}: any) {
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
        };
    }, []);
    return (
        <>
            <span onClick={toggle} className="cursor-pointer">
                {children}
            </span>

            <div className={`${isOpen ? "" : "hidden"} absolute left-0 top-full z-10 w-44 bg-stone-900 rounded divide-y divide-gray-100 shadow-2xl
            ]`}>
                <ul className="py-1 text-sm text-gray-700">
                    <li>
                        <Link href="/perfil">
                            <a className="block py-2 px-4 hover:bg-stone-800 text-white">Meu perfil</a>
                        </Link>
                    </li>
                    <li>
                        {user && (
                            <Link href="/api/auth/logout">
                                <a className="block py-2 px-4 hover:bg-stone-800 text-[#EF4444]">Sair</a>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </>
    );
}

export default DropdownUserItem;
