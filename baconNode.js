function Node(value) {
  this.value = value;
  this.edges = [];
  this.parent = null;
  this.visited = false;
}


Node.prototype.addEdges = function (neighbor) {
  this.edges.push(neighbor);
  neighbor.edges.push(this);
}