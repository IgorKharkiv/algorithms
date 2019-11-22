import { Component, OnInit } from '@angular/core';
import { PriorityQueue, WeightedGraph } from '../../classes';


@Component({
  selector: 'app-dijkstras-algorithm',
  templateUrl: './dijkstras-algorithm.component.html',
  styleUrls: ['./dijkstras-algorithm.component.scss']
})
export class DijkstrasAlgorithmComponent implements OnInit {
  public weightedGraph: WeightedGraph;

  ngOnInit() {
    this.weightedGraph = new WeightedGraph();

    this.weightedGraph.addVertex('A');
    this.weightedGraph.addVertex('B');
    this.weightedGraph.addVertex('C');
    this.weightedGraph.addVertex('D');
    this.weightedGraph.addVertex('E');
    this.weightedGraph.addVertex('F');

    this.weightedGraph.addEdge('A', 'B', 4);
    this.weightedGraph.addEdge('A', 'C', 2);
    this.weightedGraph.addEdge('B', 'E', 3);
    this.weightedGraph.addEdge('C', 'D', 2);
    this.weightedGraph.addEdge('C', 'F', 4);
    this.weightedGraph.addEdge('D', 'E', 3);
    this.weightedGraph.addEdge('D', 'F', 1);
    this.weightedGraph.addEdge('E', 'F', 1);

    this.weightedGraph.dijkstra('A', 'F');
    console.log(this.weightedGraph);
  }

}
