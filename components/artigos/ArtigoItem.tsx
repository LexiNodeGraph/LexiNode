import {RiArrowDropDownLine} from "react-icons/ri";

function ArtigoItem({artigo, user}: any) {
    const artigoItems = [
        {
            label: "Favoritar",
            action: () => {
                console.log("favoritar");
            },
            show: true,
        },
    ];

    return (
        <div className="flex row justify-between w-full bg-white rounded-md border p-2 mt-2 shadow-md dark:bg-neutral-900  dark:border-neutral-700">
            <div className="flex flex-col w-full p-4">
                <a href={artigo.URL} className=" font-bold dark:text-neutral-50">
                    {artigo.label}
                </a>
                <span className="text-neutral-900 dark:text-neutral-200"> NOME AUTOR</span>

                <div className="bg-neutral-100 my-2 p-2 rounded w-full dark:bg-neutral-800 dark:text-neutral-400">TAGS E MAIS DETALHES</div>
            </div>

            <RiArrowDropDownLine
                className=" cursor-pointer text-2xl ease-out duration-300 rounded-full hover:text-[#4f8cfe] hover:bg-[#00000011]
                dark:text-white dark:hover:text-white dark:hover:bg-[#ffffff11]"
            />
        </div>
    );
}

export default ArtigoItem;
