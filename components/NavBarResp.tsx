import Link from "next/link";
import Image from "next/image";

import DropdownItem from "../components/DropdownItem";
import DropdownUserItem from "../components/DropdownUserItem";

import {RiArrowDropDownLine} from "react-icons/ri";

import {useUser} from "@auth0/nextjs-auth0";

function toggleMenu() {
    console.log('clicked');
    const navToggle: any = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
  }
}

const NavBarResp = () => {
    const {user, error, isLoading} = useUser();
    return (
            <nav className="flex flex-wrap items-center justify-between p-3 bg-[#114B5F] shadow-xl">         
                <div className="flex">
                    
                    <Link href="/">
                        <img src="../assets/logobranca.png" className="h-10 w-100" />  
                    </Link>

                    <div className="hidden md:flex">
                        <h3 className="block md:inline-block text-white px-3 py-1 text-3xl font-extralight border-b-2 border-white md:border-none">|</h3>
                        <Link href="/">
                            <a className="block md:inline-block font-semibold text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">
                                Início

                            </a>
                        </Link>
                        <Link href="/">
                            <a className="block md:inline-block font-semibold text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">
                                Slass

                            </a>
                        </Link>                        
                        <Link href="/">
                            <a className="block md:inline-block font-semibold text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">
                                Slaasss2

                            </a>
                        </Link>                    
                    </div>
                </div>

        
                <div className="flex md:hidden">
                    <button onClick={toggleMenu} id="hamburger">
                        <img className="toggle block" src="../assets/menu2.png" width="40" height="40" />
                        <img className="toggle hidden" src="../assets/close.png" width="40" height="40" />
                    </button>
                </div>

            
                <div className="toggle w-full md:w-auto mt-5 md:mt-0 border-t-2 md:border-none">        
                    <Link href="/">
                        <a className="block md:inline-block font-semibold text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">
                            Início
                        </a>                   
                    </Link>
                    <Link href="/">
                        <a className="block md:inline-block font-semibold text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">
                            Início
                        </a>                   
                    </Link>                    
                    <Link href="/">
                        <a className="block md:inline-block font-semibold text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">
                            Início
                        </a>                   
                    </Link>                
                </div>

                <div className="hidden md:flex gap-3 justify-end">
                    <div>
                        <img src="../assets/lupa.png" className="hidden md:flex" width="40" height="40" />
                    </div>
                  
                    <div className="flex items-center mr-3 md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                        </button>
                        
                    </div>
                </div>
        </nav>  
    );
};

export default NavBarResp;
