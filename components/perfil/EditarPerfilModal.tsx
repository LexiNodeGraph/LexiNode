import React from "react";

function EditarPerfilModal({showModal, setShowModal}: any) {
    return (
        <div className={`${!showModal && "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}>
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-neutral-700">
                    <button
                        type="button"
                        className="absolute top-3 right-2.5 text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-800 dark:hover:text-white"
                    >
                        <button onClick={() => setShowModal(false)}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </button>
                    <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-neutral-900 dark:text-white">Edite suas informações</h3>
                        <form className="space-y-6" action="#">
                            <div>
                                <label htmlFor="biografia" className="block mb-2 text-sm font-medium text-neutral-900 dark:text-gray-300">
                                    Biografia
                                </label>
                                <input
                                    type="text"
                                    id="biografia"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Biografia"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="localização" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Localização
                                </label>
                                <input
                                    id="localização"
                                    type="text"
                                    placeholder="Localização"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Salvar alterações
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarPerfilModal;
