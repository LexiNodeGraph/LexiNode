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
                <a className=" font-bold dark:text-neutral-50">{artigo.title}</a>
                <span className="text-neutral-900 dark:text-neutral-200">
                    {artigo.authors.map((author: any, index: any) => (
                        <span key={author.email}>
                            {author.name}
                            {index === artigo.authors.length - 1 ? "" : ", "}
                        </span>
                    ))}
                </span>

                <div className="bg-neutral-100 my-2 p-2 rounded w-full dark:bg-neutral-800 dark:text-neutral-400">
                    {artigo.keywords.map((keyword: any, index: any) => (
                        <span key={index}>
                            {keyword}
                            {index === artigo.keywords.length - 1 ? "" : ", "}
                        </span>
                    ))}
                </div>
            </div>

            <RiArrowDropDownLine
                className=" cursor-pointer text-2xl ease-out duration-300 rounded-full hover:text-[#4f8cfe] hover:bg-[#00000011]
                dark:text-white dark:hover:text-white dark:hover:bg-[#ffffff11]"
            />
        </div>
    );
}

export default ArtigoItem;
