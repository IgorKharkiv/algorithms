import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MaxBinaryHeap } from '../../classes/index';

@Component({
  selector: 'app-priority-queue',
  templateUrl: './priority-queue.component.html',
  styleUrls: ['./priority-queue.component.scss']
})
export class PriorityQueueComponent implements OnInit {
  @ViewChild('indexInput', null) nameInput: ElementRef;
  @ViewChild('valueInput', null) valueInput: ElementRef;
  public maxBinaryHeap: MaxBinaryHeap;

  ngOnInit() {
    this.maxBinaryHeap = new MaxBinaryHeap();
  }

  public insert(): void {
    const value = Number(this.valueInput.nativeElement.value);
    this.maxBinaryHeap.insert(value);
    console.log(this.maxBinaryHeap.values);
  }

  public extractMax(): void {
    this.maxBinaryHeap.extractMax();
    console.log(this.maxBinaryHeap.values);
  }

}
