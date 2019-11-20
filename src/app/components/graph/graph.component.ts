import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Graph } from '../../classes/';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @ViewChild('vertexInput', null) public vertexInput: ElementRef<HTMLInputElement>;
  public graph: Graph;

  ngOnInit() {
    this.graph = new Graph();
  }

  public addVertex(): void {
    const key = this.vertexInput.nativeElement.value;
    this.graph.addVertex(key);
    console.log(this.graph);
  }
}
