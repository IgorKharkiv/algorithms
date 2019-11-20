import { Component, OnInit } from '@angular/core';
import { Graph } from '../../classes/';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  public graph: Graph;

  ngOnInit() {
    this.graph = new Graph();
  }

}
