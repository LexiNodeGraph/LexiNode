import {AiOutlineStar, AiFillStar} from "react-icons/ai";

function ArtigoItem({artigo, user}: any) {
    return (
        <li className="flex row justify-between m-2 bg-white drop-shadow-lg p-2 rounded">
            <div className="flex flex-col w-full p-4">
                <a href={artigo.URL} className=" font-bold ">
                    {artigo.label}
                </a>
                <span className="text-slate-600 "> NOME AUTOR</span>

                <div className="bg-slate-100 my-2 p-2 rounded w-2/4">TAGS E MAIS DETALHES</div>
            </div>

            {user && <button className="text-xl p-2">{artigo.favorite ? <AiFillStar /> : <AiOutlineStar />}</button>}
        </li>
    );
}

export default ArtigoItem;
