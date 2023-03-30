class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(a, b) {
    this.adjacencyList[a].push(b);
    this.adjacencyList[b].push(a);
  }
  removeEdge(a, b) {
    this.adjacencyList[a] = this.adjacencyList[a].filter((element) => {
      return element !== b;
    });
    this.adjacencyList[b] = this.adjacencyList[b].filter((element) => {
      return element !== a;
    });
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
let g = new Graph();
g.addVertex("tokyo");
g.addVertex("dallas");
g.addVertex("aspen");
g.addEdge("tokyo", "dallas");
g.addEdge("dallas", "aspen");

g.removeVertex("tokyo");
console.log(g.adjacencyList["tokyo"]);
console.log(g.adjacencyList["dallas"]);
console.log(g.adjacencyList["aspen"]);
console.log(g.adjacencyList);
