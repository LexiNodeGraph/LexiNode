import {Menu} from "@headlessui/react";

import Link from "next/link";

function Dropdown({children, items}: any) {
    return (
        <Menu as="div" className="relative py-2 px-6 font-semibold rounded transition duration-300 mx-1">
            <Menu.Button className="cursor-pointer text-white flex items-center "> {children}</Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-44 p-1  origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-900">
                {items.map(
                    (item: any) =>
                        item.show && (
                            <Menu.Item as="li" key={item.to} className="list-none">
                                <Link href={item.to}>
                                    <p
                                        className={`block py-2 px-4 bg-white text-neutral-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:text-white dark:bg-neutral-900 ${
                                            item.destaque && "text-red-500 dark:text-red-500"
                                        }`}
                                    >
                                        {item.label}
                                    </p>
                                </Link>
                            </Menu.Item>
                        )
                )}
            </Menu.Items>
        </Menu>
    );
}

export default Dropdown;
