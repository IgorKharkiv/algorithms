import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MaxBinaryHeap, PriorityQueue } from '../../classes/index';

@Component({
  selector: 'app-priority-queue',
  templateUrl: './priority-queue.component.html',
  styleUrls: ['./priority-queue.component.scss']
})
export class PriorityQueueComponent implements OnInit {
  @ViewChild('priorityInput', null) priorityInput: ElementRef<HTMLInputElement>;
  @ViewChild('valueInput', null) valueInput: ElementRef<HTMLInputElement>;
  public maxBinaryHeap: MaxBinaryHeap;
  public priorityQueue: PriorityQueue;

  ngOnInit() {
    this.maxBinaryHeap = new MaxBinaryHeap();
    this.priorityQueue = new PriorityQueue();
  }

  public insert(): void {
    const value = Number(this.valueInput.nativeElement.value);
    this.maxBinaryHeap.insert(value);
    this.valueInput.nativeElement.value = '';
    console.log(this.maxBinaryHeap.values);
  }

  public extractMax(): void {
    this.maxBinaryHeap.extractMax();
    console.log(this.maxBinaryHeap.values);
  }

  public enqueue(): void {
    const value = this.valueInput.nativeElement.value;
    const priority = Number(this.priorityInput.nativeElement.value);
    this.priorityQueue.enqueue(value, priority);
    console.log('enqueue', this.priorityQueue.values);
  }

  public dequeue(): void {
    this.priorityQueue.dequeue();
    console.log('dequeue', this.priorityQueue.values);
  }
}
