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
  depthFirstRecursive(start) {
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
  depthFirstIterative(start) {
    const visited = {};
    let s = [];
    const result = [];
    s.push(start);
    while (s.length !== 0) {
      let vertex = s.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((element) => {
          s.push(element);
        });
      }
    }
    return result;
  }
  breadthFirst(start) {
    const visited = {};
    let queue = [start];
    let result = [];
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
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));

console.log(g.breadthFirst("A"));
