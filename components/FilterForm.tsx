import {useState} from "react";

function FilterForm({input, ordenar, setInput, setOrdenar}: any) {
    return (
        <div className="flex row w-full justify-around gap-x-1 m-2 pr-4">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="flex 
                p-4 w-3/5 
                text-sm
                 text-black bg-white 
                 rounded-lg border
                 focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Pesquiar"
            />
            <select
                value={ordenar}
                onChange={(e) => setOrdenar(e.target.value)}
                className="bg-white border w-2/5  text-black text-sm rounded-lg focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            >
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
        </div>
    );
}

export default FilterForm;
