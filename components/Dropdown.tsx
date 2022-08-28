import {useEffect, useState} from "react";
import Link from "next/link";

function Dropdown({children, items}: any) {
    const [isOpen, setIsOpen] = useState(false);

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
            <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer ">
                {children}
            </span>
            <div
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
        </>
    );
}

export default Dropdown;
