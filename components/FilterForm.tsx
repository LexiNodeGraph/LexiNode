import {BsFilterLeft, BsArrowDown, BsArrowUp} from "react-icons/bs";

function FilterForm({input, ordenar, setInput, setOrdenar}: any) {
    return (
        <div className="inline-flex w-full justify-around gap-1  ">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="flex 
                p-4 pl-6 w-full        
                text-sm
                rounded border
                text-black bg-white 
                focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500
                dark:text-white  dark:bg-neutral-900  dark:border-neutral-700
                "
                placeholder="Pesquiar"
            />

            <button
                className="bg-white border  text-black text-sm rounded
                flex justify-center items-center
                focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500   p-2.5
                dark:text-white  dark:bg-neutral-900  dark:border-neutral-700"
                onClick={() => setOrdenar(!ordenar)}
            >
                {ordenar ? <BsArrowUp /> : <BsArrowDown />}

                <BsFilterLeft className="text-2xl" />
            </button>
        </div>
    );
}

export default FilterForm;
