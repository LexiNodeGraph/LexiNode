import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(
    {
      "id":"629a36276b50cb2f8c950891",
      "nodes":[
         {
            "key":"1",
            "label":"Aplicação de conceitos de gamificação para seleção de alunos em projetos de pesquisa e extensão",
            "tag":"Method",
            "URL":"https://periodicos.univali.br/index.php/acotb/article/view/14333",
            "cluster":"0",
            "x":643.82275390625,
            "y":-770.3126220703125,
            "score":0.00006909602204225056
         },
         {
            "key":"2",
            "label":"Avaliação da qualidade da informação: Um estudo de caso",
            "tag":"Tool",
            "URL":"https://www.researchgate.net/publication/268151621_AVALIACAO_DA_QUALIDADE_DA_INFORMACAO_Um_estudo_de_caso",
            "cluster":"1",
            "x":-857.2847900390625,
            "y":602.7734375,
            "score":0.0018317394731443256
         },
         {
            "key":"3",
            "label":"Educação ambiental no contexto tecnológico: Criação de um fliperama utilizando lixo eletrônico",
            "tag":"Tool",
            "URL":"https://www.researchgate.net/publication/261172554_EDUCACAO_AMBIENTAL_NO_CONTEXTO_TECNOLOGICO_CRIACAO_DE_UM_FLIPERAMA_UTILIZANDO_LIXO_ELETRONICO",
            "cluster":"4",
            "x":343.4423828125,
            "y":-749.0428466796875,
            "score":0.0010242079745792347
         },
         {
            "key":"4",
            "label":"Aplicação do modelo de aceitação de tecnologia para avaliar a aceitação e uso de software ERP",
            "tag":"Tool",
            "URL":"http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
            "cluster":"5",
            "x":-900.3515014648438,
            "y":633.4600830078125,
            "score":0.0000049571249591405295
         },
         {
            "key":"5",
            "label":"IT-CMF and BPM Critical Capability: Improving Software Development Lab on academic context",
            "tag":"Tool",
            "URL":"https://www.sciencedirect.com/science/article/pii/S1877050921001927",
            "cluster":"1",
            "x":-627.0659790039062,
            "y":459.9796447753906,
            "score":0
         },
         {
            "key":"6",
            "label":"A network analysis of IT-CMF",
            "tag":"Chart type",
            "URL":"http://www.iadisportal.org/digital-library/a-network-analysis-of-it-cmf",
            "cluster":"3",
            "x":-237.4854736328125,
            "y":-1150.8712158203125,
            "score":0.007071322614031072
         },
         {
            "key":"7",
            "label":"Devising information systems and technology evolutionary paths with IT-CMF",
            "tag":"Chart type",
            "URL":"http://www.iadisportal.org/ijcsis/papers/2021160105.pdf",
            "cluster":"2",
            "x":330.8612365722656,
            "y":203.5203857421875,
            "score":0
         },
         {
            "key":"8",
            "label":"A grammar for information systems and technology competencies",
            "tag":"Chart type",
            "URL":"https://algoritmi.uminho.pt/news/outstanding-paper-award-para-artigo-a-grammar-for-information-systems-and-technology-competencies/",
            "cluster":"2",
            "x":-476.044677734375,
            "y":692.1626586914062,
            "score":0.01584614746684067
         },
         {
            "key":"9",
            "label":"A generic proposal for comopetence mapping: A case study from information systems discipline",
            "tag":"Chart type",
            "URL":"http://repositorium.sdum.uminho.pt/handle/1822/70981",
            "cluster":"3",
            "x":600.8757934570312,
            "y":1116.4998779296875,
            "score":0.004182562905931715
         }
      ],
      "edges":[
         [
            "1",
            "2"
         ],
         [
          "1",
          "3"
         ],
         [
          "1",
          "4"
         ],
         [
          "2",
          "3"
         ],
         [
          "3",
           "4"
         ],
         [
          "4",
          "5"
         ],
         [
          "5",
           "6"
         ],
         [
          "6",
           "7"
         ],
         [
          "7",
           "8"
         ],
         [
          "8",
           "9"
         ],
         [
          "9",
           "1"
         ]
      ],
      "clusters":[
         {
            "key":"0",
            "color":"#6c3e81",
            "clusterLabel":"Information Systems"
         },
         {
            "key":"1",
            "color":"#666666",
            "clusterLabel":"Agronomy"
         },
         {
            "key":"3",
            "color":"#57a835",
            "clusterLabel":"Veterinary"
         },
         {
            "key":"4",
            "color":"#7145cd",
            "clusterLabel":"Chemistry"
         },
         {
            "key":"5",
            "color":"#579f5f",
            "clusterLabel":"Agricultural Sciences"
         }
      ],
      "tags":[
         {
            "key":"Chart type",
            "image":"charttype.svg"
         },
         {
            "key":"Company",
            "image":"company.svg"
         },
         {
            "key":"Concept",
            "image":"concept.svg"
         },
         {
            "key":"Field",
            "image":"field.svg"
         },
         {
            "key":"List",
            "image":"list.svg"
         },
         {
            "key":"Method",
            "image":"method.svg"
         },
         {
            "key":"Organization",
            "image":"organization.svg"
         },
         {
            "key":"Person",
            "image":"person.svg"
         },
         {
            "key":"Technology",
            "image":"technology.svg"
         },
         {
            "key":"Tool",
            "image":"tool.svg"
         },
         {
            "key":"unknown",
            "image":"unknown.svg"
         }
      ]
   })
}
