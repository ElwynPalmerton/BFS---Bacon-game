function Graph() {
  this.nodes = [];
  this.graph = {};
  this.start = null;
  this.end = null;
}

Graph.prototype.addNode = function (n) {
  this.nodes.push(n);
  let title = n.value;
  this.graph[title] = n;
}

Graph.prototype.getNode = function (name) {
  return this.graph[name];
}


Graph.prototype.setStart = function (actor) {
  this.start = this.graph[actor];
}

Graph.prototype.setEnd = function (actor) {
  this.end = this.graph[actor];
}