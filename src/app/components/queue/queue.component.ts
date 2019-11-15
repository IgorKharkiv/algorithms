import { Component, OnInit } from '@angular/core';
import { Queue, QueueNode } from '../../classes/index';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  public queue: Queue;

  ngOnInit() {
    this.queue = new Queue();
  }

  public push(): number {
    const value = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
    return this.queue.push(value);
  }

  public shift(): QueueNode {
    return this.queue.shift();
  }
}
