import {BsFilterLeft, BsArrowDown, BsArrowUp} from "react-icons/bs";

function FilterForm({input, ordenar, setInput, setOrdenar}: any) {
    return (
        <div className="flex row w-full justify-around gap-x-1 m-2 pr-4">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="flex 
                p-4 w-full        
                text-sm
                 text-black bg-white 
                 rounded-lg border
                 focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Pesquiar"
            />

            <button
                className="bg-white border  text-black text-sm rounded-lg
                flex justify-center items-center
                focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500   p-2.5"
                onClick={() => setOrdenar(!ordenar)}
            >
                {ordenar ? <BsArrowUp /> : <BsArrowDown />}

                <BsFilterLeft className="text-2xl" />
            </button>
        </div>
    );
}

export default FilterForm;
