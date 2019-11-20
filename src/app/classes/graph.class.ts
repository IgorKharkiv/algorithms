export class Graph {
  public adjacencyList: object = {};
  public addVertex(key: string): void {
    if (this.adjacencyList[key] === undefined) {
      this.adjacencyList[key] = [];
    }
  }
}
