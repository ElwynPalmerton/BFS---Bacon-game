async function catchBacon() {
  let baconData = await fetch('./bacon.json');
  let baconJSON = await baconData.json();
  return baconJSON;
}


async function buildGraph() {
  let {
    movies
  } = await catchBacon();

  let graph = new Graph();

  movies.forEach(movie => {

    let movieNode = new Node(movie.title);
    let cast = movie.cast;
    graph.addNode(movieNode);


    //Adding CAST
    cast.forEach(actorName => {

      let actorNode = graph.getNode(actorName);

      if (actorNode === undefined) {
        actorNode = new Node(actorName);
      }
      graph.addNode(actorNode);
      movieNode.addEdges(actorNode);
    })
  })

  graph.setStart("Rachel McAdams");
  graph.setEnd("Kevin Bacon");

  return graph;

  // console.log("Current data: ", graph);

}