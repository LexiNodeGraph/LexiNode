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

            <div className={`${isOpen ? "" : "hidden"} absolute left-0 top-full z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <Link href="/perfil">
                            <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Meu perfil</a>
                        </Link>
                    </li>
                    <li>
                        {user && (
                            <Link href="/api/auth/logout">
                                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sair</a>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </>
    );
}

export default DropdownUserItem;
