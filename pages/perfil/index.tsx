import Link from "next/link";
import Image from "next/image";
import {withPageAuthRequired, useUser} from "@auth0/nextjs-auth0";

const Perfil = () => {
    const {user, error, isLoading} = useUser();

    return (
        <main className="h-screen">
            <div className="flex justify-center mt-10">
                <div className="bg-gray-200 w-[20rem] h-72 md:w-3/5 md:h-44
                 rounded-lg">
                    <div className="grid md:flex mt-4 md:mt-5">

                        <div className="flex justify-center md:justify-start md:ml-12 ">
                            <Link href="/perfil">
                                <a className="">
                                    <Image
                                        className="rounded-full md:w-96 "
                                        src={
                                            user?.picture ||
                                            "https://imgs.search.brave.com/95uqrX0sPNStAH-hNb9IC1Dq-eZQGRKKEUFV6PMDY_U/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5k/cm9kZC5jb20vaW1h/Z2VzMTQvd2hpdGUx/LmpwZw"
                                        }
                                        alt={user?.name || "Não encontrado"}
                                        width="130"
                                        height="130"
                                    />
                                </a>
                            </Link>
                        </div>

                        <div className="mt-2 md:mt-3 md:ml-8">          
                           <div>
                                <h1 
                                    className="flex justify-center md:justify-start text-3xl font-semibold"
                                    >{user?.name}
                                </h1>
                            </div>

                            <div>
                                <h1 
                                    className="flex justify-center md:justify-start text-[17px] md:text-[20px]"
                                    >Email: {user?.email} 
                                </h1>
                            </div>

                            <div>
                                <h1 
                                    className="flex justify-center md:justify-start text-[17px] md:text-[20px]"
                                    >Cargo: {user?.email?.includes("@ifc.edu.br") ? "Professor" : "Normal"}
                                </h1>
                            </div>
                            
                        </div> 

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Perfil;
export const getServerSideProps = withPageAuthRequired();
