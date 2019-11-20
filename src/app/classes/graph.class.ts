export class Graph {
  public adjacencyList: object = {};
  public addVertex(key: string): void {
    this.adjacencyList[key] = [];
  }
}
