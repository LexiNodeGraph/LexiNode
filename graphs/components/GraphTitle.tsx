import React, { FC, useEffect, useState } from "react";
import { useSigma } from "react-sigma-v2";

function prettyPercentage(val: number): string {
  return (val * 100).toFixed(1) + "%";
}

// const GraphTitle: FC<{ filters: FiltersState }> = ({ filters }) => {
//   const sigma = useSigma();
//   const graph = sigma.getGraph();

//   const [visibleItems, setVisibleItems] = useState<{ nodes: number; edges: number }>({ nodes: 0, edges: 0 });
//   useEffect(() => {

//     // To ensure the graphology instance has up to data "hidden" values for
//     // nodes, we wait for next frame before reindexing. This won't matter in the
//     // UX, because of the visible nodes bar width transition.

//     requestAnimationFrame(() => {
//       const index = { nodes: 0, edges: 0 };
//       graph.forEachNode((_, { hidden }) => !hidden && index.nodes++);
//       graph.forEachEdge((_, _2, _3, _4, source, target) => !source.hidden && !target.hidden && index.edges++);
//       setVisibleItems(index);
//     });
//   }, [filters]);

//   return (
//     <div className="graph-title text-black font-semibold text-lg">
//       <h2>
//         <i>
//           {graph.order} nó{graph.order > 1 ? "s" : ""}{" e "}
//           {visibleItems.nodes !== graph.order }
//           {graph.size} aresta{graph.size > 1 ? "s" : ""}{" "}
//           {visibleItems.edges !== graph.size}
//         </i>
//       </h2>
//     </div>
//   );
// };

// export default GraphTitle;
