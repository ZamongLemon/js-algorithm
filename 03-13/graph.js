class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  traverse() {
    for (const key in this.adjacencyList) {
      console.log(key, this.adjacencyList[key]);
    }
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((el) => {
      return el !== vertex2;
    });
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((el) => {
      return el !== vertex1;
    });
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((element) => {
      this.removeEdge(vertex, element);
    });
    delete this.adjacencyList[vertex];
  }

  depthFirstSearch(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((element) => {
        if (!visited[element]) {
          return dfs(element);
        }
      });
    })(start);
    return result;
  }
  breadthFirstSearch(start) {
    let result = [];
    const visited = {};
    let queue = [start];
    while (queue.length !== 0) {
      let vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((element) => {
          queue.push(element);
        });
      }
    }
    return result;
  }
}
var graph = new Graph();

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");

graph.addEdge("S", "P");
graph.addEdge("S", "U");

graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("U", "V");

graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");

graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");
graph.traverse();
console.log(graph.breadthFirstSearch("S")); // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]
