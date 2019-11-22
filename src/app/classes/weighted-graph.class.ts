import { PriorityQueue } from './priority-queue.class';
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

  public dijkstra(start: string, finish: string): string[] {
    const priorityQueue = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;

    // init distances
    // tslint:disable-next-line:forin
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    console.log(priorityQueue);
    while (priorityQueue.values) {
      smallest = priorityQueue.dequeue().value;
      if (smallest === finish) {
        return;
        console.log('FINISH!');
      }

      // if (smallest || distances[smallest] !== Infinity) {
      //   // tslint:disable-next-line:forin
      //   for (const neighbor in this.adjacencyList[smallest]) {
      //     let nextNode = this.adjacencyList[smallest][neighbor];
      //     console.log(this.adjacencyList[smallest][neighbor]);
      //     let candidate = distances[smallest] + nextNode.weight;
      //     if (candidate < distances[nextNode.node]) {

      //     }
      //   }
      // }
    }

    return null;
  }

}
