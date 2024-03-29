import React from "react";
import Link from "next/link";

import {BiChevronRight} from "react-icons/bi";

function FavoritosCard() {
    const favoritos = [
        {
            key: "1",
            label: "Aplicação de conceitos de gamificação para seleção de alunos em projetos de pesquisa e extensão",
            tag: "Method",
            URL: "https://periodicos.univali.br/index.php/acotb/article/view/14333",
            cluster: "0",
            x: 643.82275390625,
            y: -770.3126220703125,
            score: 0.00006909602204225056,
        },
        {
            key: "2",
            label: "Avaliação da qualidade da informação: Um estudo de caso",
            tag: "Tool",
            URL: "https://www.researchgate.net/publication/268151621_AVALIACAO_DA_QUALIDADE_DA_INFORMACAO_Um_estudo_de_caso",
            cluster: "1",
            x: -857.2847900390625,
            y: 602.7734375,
            score: 0.0018317394731443256,
        },
        {
            key: "3",
            label: "Educação ambiental no contexto tecnológico: Criação de um fliperama utilizando lixo eletrônico",
            tag: "Tool",
            URL: "https://www.researchgate.net/publication/261172554_EDUCACAO_AMBIENTAL_NO_CONTEXTO_TECNOLOGICO_CRIACAO_DE_UM_FLIPERAMA_UTILIZANDO_LIXO_ELETRONICO",
            cluster: "4",
            x: 343.4423828125,
            y: -749.0428466796875,
            score: 0.0010242079745792347,
        },
        {
            key: "4",
            label: "Aplicação do modelo de aceitação de tecnologia para avaliar a aceitação e uso de software ERP",
            tag: "Tool",
            URL: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
            cluster: "5",
            x: -900.3515014648438,
            y: 633.4600830078125,
            score: 0.0000049571249591405295,
        },
    ];

    return (
        <>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-neutral-200 dark:divide-neutral-700">
                    {favoritos.length > 0 &&
                        favoritos.map((item) => (
                            <li className="py-3 sm:py-4" key={item.key}>
                                <div className="flex items-center ">
                                    <div className="flex-shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-neutral-900 truncate dark:text-white">{item.label}</p>
                                        <p className="text-sm text-neutral-500 truncate dark:text-neutral-400">NOME AUTOR</p>
                                    </div>
                                    <BiChevronRight
                                        className=" cursor-pointer text-2xl ease-out duration-300 rounded-full hover:text-[#4f8cfe] hover:bg-[#00000011]
                                        dark:text-white dark:hover:text-white dark:hover:bg-[#ffffff11]"
                                    />
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}

export default FavoritosCard;
