import {useEffect, useState} from "react";
import Link from "next/link";

function Dropdown({children, items}: any) {
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
            <span onClick={toggle} className="cursor-pointer ">
                {children}
                <div className={`${isOpen ? "" : "hidden"} absolute mt-2 mr-auto  bg-stone-900 rounded divide-y divide-gray-100 shadow`}>
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 z-auto">
                        {items.map(
                            (item: any) =>
                                item.show &&
                                (item.to ? (
                                    <li>
                                        <Link href={item.to}>
                                            <a className={`block py-2 px-4 hover:bg-stone-800 text-white ${item.destaque && "text-red-500"}`}>{item.label}</a>
                                        </Link>
                                    </li>
                                ) : (
                                    <li>
                                        <a onClick={item.action} className={`block py-2 px-4 hover:bg-stone-800 text-white ${item.destaque && "text-red-500"}`}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))
                        )}
                    </ul>
                </div>
            </span>
        </>
    );
}

export default Dropdown;
