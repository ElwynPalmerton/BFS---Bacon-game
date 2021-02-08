async function BFS() {
  async function initialize() {
    let graph = await buildGraph();
    graph.nodes.forEach((node) => {
      node.visited = false;
    });
    return graph;
  }

  let graph = await initialize();

  //dueue.enqueue = queue.push(node);
  //queue.dequeue = queue.shift();
  //
  //let Q be a queue.
  //Mark start as visited.
  //Push start to Q.
  //While (Q is not empty):
  // let v = Q.shift();
  // if (v === end):
  //    return;
  // for (all w in v.edges):
  //   if (!visited):
  //     Mark as visited.
  //     Set (parent = v);
  //     Add w to the queue.

  console.log("Before BFS: ", graph);

  let queue = [];
  queue.push(graph.start);
  graph.start.visited = true;

  while (queue.length > 0) {
    let current = queue.shift();

    if (current === graph.end) {
      return graph;
    }

    current.edges.forEach((neighbor) => {
      if (!neighbor.visited) {
        neighbor.visited = true;
        neighbor.parent = current;
        queue.push(neighbor);
      }
    });
  } //end-while
}




async function reconstructPath() {
  let finalGraph = await BFS();
  console.log("final: ", finalGraph);

  let path = [];
  let current = finalGraph.end;
  path.push(current);

  while (current.parent !== null) {
    current = current.parent;
    path.unshift(current);
  }


  path.forEach((node, i) => {
    console.log(node.value);
    if (i !== path.length - 1) {
      console.log("-->");
    }
  })



}

reconstructPath();