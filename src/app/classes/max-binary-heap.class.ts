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

  private getParentIndex(n: number): number {
    return Math.floor((n - 1) / 2);
  }
}
