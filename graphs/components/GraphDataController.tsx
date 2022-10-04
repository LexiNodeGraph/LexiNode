import { useSigma } from "react-sigma-v2";
import { FC, useEffect } from "react";

import FA2Layout from 'graphology-layout-forceatlas2/worker';

const GraphDataController: FC<{ dataset: any[]; children?: [] }> = ({ dataset, children }) => {
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

    let AllKeys = dataset.flat(1);
    // console.log(AllKeys) 
    AllKeys.map((item: any) => {
      if (graph.nodes().includes(item) == false) {
        graph.addNode(item, {
          label: item,
          x: 2 * Math.random() - 1,
          y: 2 * Math.random() - 1,
          URL: `/artigos/keyword/${item}`,
          size: 5,
          image: "../../images/black-key.png",
          color: "#727EE0"
        });
      } else {
        graph.setNodeAttribute(
          item,
          "size",
          ((graph.getNodeAttribute(item, "size") as number) + 5)
        );
      };
      console.log((graph.getNodeAttribute(item, "size") as number))
      switch ((graph.getNodeAttribute(item, "size") as number)) {
        case 5:
          graph.setNodeAttribute(item, "color", "#727EE0");
          break;
        case 10:
          graph.setNodeAttribute(item, "color", "#5A67D8");
          break;
        case 15:
          graph.setNodeAttribute(item, "color", "#434FC0");
          break;
        case 20:
          graph.setNodeAttribute(item, "color", "#2D3898");
          break;
      }
    })

    let listaFinal: any[] = [];

    for (let paper of dataset) {
      let tamanho = paper.length;
      paper.sort();

      let key: string = "";
      let source: string = "";
      let target: string = "";
      let size: number = 1;
      let item = {};

      for (let i = 0; i <= tamanho - 2; i++) {
        for (let j = i + 1; j < paper.length; j++) {
          source = paper[i];
          target = paper[j];
          key = source + "-" + target;
          size = 1;
          item = { key, source, target, size };

          if (!listaFinal.find(l => l.key === key)) {
            listaFinal.push(item);
          }
          else {
            listaFinal.find(l => l.key === key).size++;
          }
        }
      }
    }

    for (let elemento of listaFinal) {
      // console.log(`key: ${elemento.key} | origem: ${elemento.source} | destino: ${elemento.target} | tamanho: ${elemento.size * 2}`);
      graph.addEdge(elemento.source, elemento.target, { size: elemento.size * 2, color: "#999999" });

      switch (elemento.size * 2) {
        case 2:
          graph.setEdgeAttribute(elemento.source, elemento.target, "color", "#ffd900");
          break;
        case 4:
          graph.setEdgeAttribute(elemento.source, elemento.target, "color", "#ffb800");
          break;
        case 6:
          graph.setEdgeAttribute(elemento.source, elemento.target, "color", "#ff5e00");
          break;
      }
    }
    return;
  }, [graph, dataset]);


  return <>{children}</>;
};

export default GraphDataController;
