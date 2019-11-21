export class WeightedGraph {
  public adjacencyList: { [key: string]: { node: string, weight: number }[] } = {};
  public addVertex(key: string): void {
    if (key && this.adjacencyList[key] === undefined) {
      this.adjacencyList[key] = [];
    }
  }

  public addEdge(vertexA: string, vertexB: string, weight: number): void {
    if (this.adjacencyList[vertexA] && this.adjacencyList[vertexB]) {
      if (!this.adjacencyList[vertexA].find(v => v.node === vertexB)) {
        this.adjacencyList[vertexA].push({ node: vertexB, weight });
        this.adjacencyList[vertexB].push({ node: vertexA, weight });
      }
    }
  }

  public removeEdge(vertexA: string, vertexB: string): void {
    if (this.adjacencyList[vertexA] && this.adjacencyList[vertexB]) {
      this.adjacencyList[vertexA] = this.adjacencyList[vertexA].filter(v => v.node !== vertexB);
      this.adjacencyList[vertexB] = this.adjacencyList[vertexB].filter(v => v.node !== vertexA);
    }
  }

  public removeVertex(vertex: string): void {
    if (vertex && this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach(ver => {
        this.adjacencyList[ver.node] = this.adjacencyList[ver.node].filter(v => v.node !== vertex);
      });
      delete this.adjacencyList[vertex];
    }
  }
}