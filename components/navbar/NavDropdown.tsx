import {useEffect, useState, useRef} from "react";
import Link from "next/link";

function NavDropdown({children, items}: any) {
    const menuRef = useRef<any>();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let handler = (event: any) => {
            if (!menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
        <div className="relative py-2 px-6 font-semibold rounded hover:bg-[#ffffff11] transition duration-300 mx-1">
            <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-white flex items-center">
                {children}
            </span>
            <div
                ref={menuRef}
                className={`${
                    !isOpen && "hidden"
                }  origin-top-right  absolute  mt-4 w-44 z-10 rounded p-1  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
                <ul className=" text-sm divide-y divide-gray-200 text-gray-700 dark:text-gray-200 z-auto">
                    {items.map(
                        (item: any) =>
                            item.show &&
                            (item.to ? (
                                <li key={item.to}>
                                    <Link href={item.to}>
                                        <a
                                            className={`block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white${
                                                item.destaque && "text-red-500"
                                            }`}
                                        >
                                            {item.label}
                                        </a>
                                    </Link>
                                </li>
                            ) : (
                                <li key={item.to}>
                                    <a
                                        onClick={item.action}
                                        className={`block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white${
                                            item.destaque && "text-red-500"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))
                    )}
                </ul>
            </div>
        </div>
    );
}

export default NavDropdown;
