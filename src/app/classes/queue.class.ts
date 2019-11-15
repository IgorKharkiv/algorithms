export class QueueNode {
  value: any;
  constructor(value: any) {
    this.value = value;
  }
}

export class Queue {
  public queue: QueueNode[] = [];
  public push(value: any): number {
    const newQueueNode = new QueueNode(value);
    return this.queue.push(newQueueNode)
  }
  public shift(): QueueNode {
    return this.queue.shift();
  }
}
