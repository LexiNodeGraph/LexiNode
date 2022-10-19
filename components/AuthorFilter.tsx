import {useState} from "react";

import AutorSkeleton from "./skeletons/AutorSkeleton";
import AutorItem from "./autores/AutorItem";
import FilterForm from "./FilterForm";

function AuthorFilter({autores}: any) {
    const [ordenar, setOrdenar] = useState();
    const [input, setInput] = useState("");

    const filtredAuthors = autores.filter((author: any) => author.name.toLowerCase().includes(input));
    return (
        <div className=" w-full h-fit  bg-white rounded  shadow  dark:bg-neutral-900  dark:border-neutral-700">
            <FilterForm input={input} ordenar={ordenar} setOrdenar={setOrdenar} setInput={setInput} />
            <ul className="mt-1 flex flex-col gap-1 ">
                {autores.length > 0 ? (
                    ordenar ? (
                        filtredAuthors
                            .sort((a: any, b: any) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                            .map((author: any) => <AutorItem author={author} key={author.email} />)
                    ) : (
                        filtredAuthors
                            .sort((a: any, b: any) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                            .reverse()
                            .map((author: any) => <AutorItem author={author} key={author.email} />)
                    )
                ) : (
                    <AutorSkeleton />
                )}
            </ul>
        </div>
    );
}

export default AuthorFilter;
