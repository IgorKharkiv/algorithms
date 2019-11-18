export class MaxBinaryHeap {
  values: number[] = [];

  public insert(val: number): void {
    if (this.values.includes(val)) {
      return;
    }

    this.values.push(val);
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);

    while (this.values.length > 1) {
      if (this.values[childIndex] > this.values[parentIndex]) {
        [this.values[childIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[childIndex]];
        childIndex = parentIndex;
        parentIndex = this.getParentIndex(childIndex);
      } else {
        break;
      }
    }
  }

  public extractMax(): void {
    this.values.shift();
    if (this.values.length < 2) { return; }

    this.values.unshift(this.values.pop());
    let n = 0;
    while (this.values.length > 1) {
      const leftChildIndex = 2 * n + 1;
      const rightChildIndex = 2 * n + 2;

      const indexToSwapWith = this.values[leftChildIndex] > this.values[rightChildIndex] ? leftChildIndex : rightChildIndex;
      const currentItem = this.values[n];

      if (currentItem < this.values[indexToSwapWith]) {
        [this.values[n], this.values[indexToSwapWith]] = [this.values[indexToSwapWith], this.values[n]];
        n = indexToSwapWith;
      } else {
        break;
      }
    }
  }

  private getParentIndex(n: number): number {
    return Math.floor((n - 1) / 2);
  }
}
