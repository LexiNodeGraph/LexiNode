import Link from "next/link";

function Logo() {
    return (
        <Link href="/">
            <a className="flex items-center py-6 px-2">
                <span className="text-[#EEEEEE] font-semibold text-2xl tracking-tight pl-2">LEXI</span>
                <span className="text-[#0952DB] font-semibold text-2xl tracking-tight pr-2">NODE</span>
            </a>
        </Link>
    );
}

export default Logo;
