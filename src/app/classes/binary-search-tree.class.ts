export class BSTNode {
  public value: any = null;
  public left: BSTNode = null;
  public right: BSTNode = null;
  constructor(value: any) {
    this.value = value;
  }
}

export class BinarySearchTree {
  public root: BSTNode = null;
  public insert(value): BSTNode {
    const node = new BSTNode(value);
    if (!this.root) {
      this.root = node;
      return node;
    }
    let curNode = this.root;
    let iterate = true;
    while (iterate) {
      const direction = node.value > curNode.value ? 'right' : 'left';

      if (curNode[direction]) {
        curNode = curNode[direction];
      } else {
        curNode[direction] = node;
        iterate = false;
      }

    }
    console.log(this.root);
    return node;
  }
}
