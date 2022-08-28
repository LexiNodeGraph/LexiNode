import Link from "next/link";

function NavbarItem({to, children}: any) {
    return (
        <Link href={to}>
            <span className="text-white py-2 px-6 font-semibold rounded cursor-pointer hover:bg-[#ffffff11] transition duration-300 mx-1">{children}</span>
        </Link>
    );
}

export default NavbarItem;
