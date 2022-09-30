import { useSigma } from "react-sigma-v2";
import { FC, useEffect } from "react";
// import force atlas 2 react-sigma-v2

import FA2Layout from 'graphology-layout-forceatlas2/worker';


const GraphDataController: FC<{ children?: [] | string | undefined }> = ({ dataset, children }) => {
  const sigma = useSigma();
  const graph = sigma.getGraph();

  const layout = new FA2Layout(graph, {
    settings: { gravity: 8, scalingRatio: 13, strongGravityMode: false, barnesHutOptimize: true, barnesHutTheta: 0.4 },
  });

  // To start the layout
  layout.start();
  setTimeout(() => {
    layout.stop();
  }, 80);
  useEffect(() => {  
    if (!graph || !dataset) return;
    
    let teste = dataset.flat(1)
    console.log(teste)
    teste.map((item: any) => {
      if (graph.nodes().includes(item) == false) {
        graph.addNode(item, {
          label: item,
          x: 2 * Math.random() - 1,
          y: 2 * Math.random() - 1,
          size: 5,
          color: "#727EE0"
        });
      } else {
        graph.setNodeAttribute(
          item,
          "size",
          ((graph.getNodeAttribute(item, "size") as number) + 6)
        );
      };
    })

    let keywords = dataset;
    let listaFinal: any[] = [];

    for (let paper1 of keywords) {
      let tamanho = paper1.length;
      paper1.sort();

      let key = "";
      let source = "";
      let target = "";
      let weight: number = 1;
      let item = {};

      for (let i = 0; i <= tamanho - 2; i++) {
        for (let j = i + 1; j < paper1.length; j++) {
          source = paper1[i];
          target = paper1[j];
          key = source + "-" + target;
          weight = 1;
          item = { key, source, target, weight };

          if (!listaFinal.find(l => l.key === key)) {
            listaFinal.push(item);
          }
          else {
            listaFinal.find(l => l.key === key).weight++;
          }
        }
      }
    }

    for (let elemento of listaFinal) {
      console.log(`key: ${elemento.key} | origem: ${elemento.source} | destino: ${elemento.target} | peso: ${elemento.weight}`);
      graph.addEdge(elemento.source, elemento.target, { size: elemento.weight * 2 });
      // Stop the layout
      if (elemento.weight >= 3) {
        graph.setEdgeAttribute(elemento.source, elemento.target, "color", "#727EE0");
      }
    }
    return;
  }, [graph, dataset]);


  return <>{children}</>;
};

export default GraphDataController;
