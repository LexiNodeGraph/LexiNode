import {RiArrowDropDownLine} from "react-icons/ri";
import Dropdown from "../Dropdown";

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
        <li className="flex row justify-between m-2 bg-white drop-shadow-lg p-2 rounded">
            <div className="flex flex-col w-full p-4">
                <a href={artigo.URL} className=" font-bold ">
                    {artigo.label}
                </a>
                <span className="text-slate-600 "> NOME AUTOR</span>

                <div className="bg-slate-100 my-2 p-2 rounded w-full">TAGS E MAIS DETALHES</div>
            </div>
            <Dropdown items={artigoItems}>
                <RiArrowDropDownLine className=" text-2xl ease-out duration-300 rounded-full hover:text-[#0952DB] hover:bg-[#00000011]" />
            </Dropdown>
        </li>
    );
}

export default ArtigoItem;
