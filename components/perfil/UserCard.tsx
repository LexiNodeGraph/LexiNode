import Image from "next/image";
import {MdOutlineAlternateEmail, MdLocationOn, MdDomain, MdOutlineShare} from "react-icons/md";
import Router from "next/router";
import {BiArrowBack} from "react-icons/bi";
import Button from "../artigos/adicionar/Button";

function UserCard({user, setEdit}: any) {
    return (
        <div className="w-full max-w-sm bg-white rounded border border-neutral-200 shadow-md dark:bg-neutral-900 dark:border-neutral-700">
            <BiArrowBack className=" cursor-pointer text-xl  ease-out duration-300 rounded-full dark:text-white m-4 " onClick={() => Router.back()} />

            <div className="flex flex-col items-center pt-4 pb-10">
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
                <div className="w-full p-6 flex flex-col ">
                    <h5 className=" text-2xl font-bold py-2 text-neutral-900 dark:text-white">{user.name}</h5>

                    <div className=" mb-2 text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-1">
                        <MdOutlineAlternateEmail />
                        {user.email}
                    </div>
                    <div className=" mb-2 text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-1">
                        <MdDomain />
                        {user.institution}
                    </div>
                    <div className=" mb-2 text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-1">
                        <MdLocationOn />
                        {user.city}, {user.country}
                    </div>
                    <div className=" mb-2 text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-1">
                        <MdOutlineShare />
                        {user.field}
                    </div>
                    <Button onClick={() => setEdit(true)}>Editar perfil</Button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
