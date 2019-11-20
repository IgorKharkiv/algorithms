import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Graph } from '../../classes/';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @ViewChild('vertexInput', null) public vertexInput: ElementRef<HTMLInputElement>;
  @ViewChild('vertexAInput', null) public vertexAInput: ElementRef<HTMLInputElement>;
  @ViewChild('vertexBInput', null) public vertexBInput: ElementRef<HTMLInputElement>;
  public graph: Graph;

  ngOnInit() {
    this.graph = new Graph();
  }

  public addVertex(): void {
    const key = this.vertexInput.nativeElement.value;
    this.graph.addVertex(key);
    console.log(this.graph.adjacencyList);
  }

  public addEdge(): void {
    const verA = this.vertexAInput.nativeElement.value;
    const verB = this.vertexBInput.nativeElement.value;
    this.graph.addEdge(verA, verB);
    console.log(this.graph.adjacencyList);
  }

  public removeEdge(): void {
    const verA = this.vertexAInput.nativeElement.value;
    const verB = this.vertexBInput.nativeElement.value;
    this.graph.removeEdge(verA, verB);
    console.log(this.graph.adjacencyList);
  }

  public removeVertex(): void {
    const ver = this.vertexAInput.nativeElement.value;
    this.graph.removeVertex(ver);
    console.log(this.graph.adjacencyList);
  }
}
