export class Graph {
  public adjacencyList: { [key: string]: string[] } = {};
  public addVertex(key: string): void {
    if (key && this.adjacencyList[key] === undefined) {
      this.adjacencyList[key] = [];
    }
  }

  public addEdge(vertexA: string, vertexB: string): void {
    if (this.adjacencyList[vertexA] && this.adjacencyList[vertexB]) {
      if (!this.adjacencyList[vertexA].includes(vertexB)) {
        this.adjacencyList[vertexA].push(vertexB);
        this.adjacencyList[vertexB].push(vertexA);
      }
    }
  }

  public removeEdge(vertexA: string, vertexB: string): void {
    if (this.adjacencyList[vertexA] && this.adjacencyList[vertexB]) {
      this.adjacencyList[vertexA] = this.adjacencyList[vertexA].filter(v => v !== vertexB);
      this.adjacencyList[vertexB] = this.adjacencyList[vertexB].filter(v => v !== vertexA);
    }
  }

  public removeVertex(vertex: string): void {
    if (vertex && this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach(ver => {
        this.adjacencyList[ver] = this.adjacencyList[ver].filter(v => v !== vertex);
      });
      delete this.adjacencyList[vertex];
    }
  }
}
