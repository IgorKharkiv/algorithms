export class PriorityNode<T> {
  value: T;
  priority: number;
  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

export class PriorityQueue {
  public values: PriorityNode<any>[] = [];

  public enqueue<T>(val: T, priority: number): PriorityNode<T> {
    const node = new PriorityNode<T>(val, priority);

    this.values.push(node);
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);

    while (this.values.length > 1 && this.values[parentIndex]) {
      if (this.values[childIndex].priority < this.values[parentIndex].priority) {
        [this.values[childIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[childIndex]];
        childIndex = parentIndex;
        parentIndex = this.getParentIndex(childIndex);
      } else {
        break;
      }
    }

    return node;
  }

  public dequeue<T>(): PriorityNode<T> {
    const removedItem = this.values.shift();
    if (this.values.length < 2) { return; }

    this.values.unshift(this.values.pop());
    let n = 0;
    while (this.values.length > 1) {
      const leftChildIndex = 2 * n + 1;
      const rightChildIndex = 2 * n + 2;

      let indexToSwapWith = null;
      if (!this.values[rightChildIndex] || this.values[leftChildIndex].priority <= this.values[rightChildIndex].priority) {
        indexToSwapWith = leftChildIndex;
      } else {
        indexToSwapWith = rightChildIndex;
      }

      const currentItem = this.values[n];
      if (this.values[indexToSwapWith] && currentItem.priority >= this.values[indexToSwapWith].priority) {
        [this.values[n], this.values[indexToSwapWith]] = [this.values[indexToSwapWith], this.values[n]];
        n = indexToSwapWith;
      } else {
        break;
      }
    }

    return removedItem;
  }

  private getParentIndex(n: number): number {
    return Math.floor((n - 1) / 2);
  }
}
