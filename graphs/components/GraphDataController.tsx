import { useSigma } from "react-sigma-v2";
import { FC, useEffect } from "react";
import { keyBy, omit } from "lodash";
import FA2Layout from 'graphology-layout-forceatlas2/worker';

const GraphDataController: FC<{ children?: [] | string | undefined }> = ({ dataset, filters, children }) => {
  const sigma = useSigma();
  const graph = sigma.getGraph();

  /**
   * Feed graphology with the new dataset:
   */
  const layout = new FA2Layout(graph, {
    settings: { gravity: 1 }
   });

  // To start the layout
  layout.start();

  useEffect(() => {  
    if (!graph || !dataset) return;

    const clusters = keyBy(dataset.clusters, "key");
    const tags = keyBy(dataset.tags, "key");

    dataset.nodes.forEach((node:any, index: any) =>
      graph.addNode(node, {
        label: node,
        tag: "Field",
        URL: "https://www.google.com",
        // cluster: clusters[node.cluster].key,
        x: 2 * Math.random() - 1,
        y: 2 * Math.random() - 1,
        size: 20,
        // ...omit(clusters[node.cluster], "key"),
        image: "../../images/field.svg",
      }),
    );
    dataset.edges?.forEach(([source, target]:any) => graph.addEdge(source, target, { size: 1 })); // tamanho da aresta

    // Use degrees as node sizes:
    // const scores = graph.nodes().map((node) => graph.getNodeAttribute(node, "score"));
    // const minDegree = Math.min(...scores);
    // const maxDegree = Math.max(...scores);
    // graph.forEachNode((node) =>
    //   graph.setNodeAttribute(
    //     node,
    //     "size",
    //     ((graph.getNodeAttribute(node, "score") - minDegree) / (maxDegree - minDegree)) *
    //       (MAX_NODE_SIZE - MIN_NODE_SIZE) +
    //       MIN_NODE_SIZE,
    //   ),
    // );

    return () => graph.clear();
  }, [graph, dataset]);

  useEffect(() => {
    const { clusters, tags } = filters;
    graph.forEachNode((node, { cluster, tag }) =>
      graph.setNodeAttribute(node, "hidden", !clusters[cluster] || !tags[tag]),
    );
  }, [graph, filters]);

  return <>{children}</>;
};

export default GraphDataController;
