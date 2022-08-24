import {useState} from "react";

function FilterForm({input, setInput}: any) {
    return (
        <div className="flex row w-full justify-around ">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="block p-4 mx-2 pl-10 w-4/5 text-sm text-white bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Pesquiar"
            />
            <select className="bg-black border w-1/5 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5">
                <option selected>Ordernar</option>
            </select>
        </div>
    );
}

export default FilterForm;
