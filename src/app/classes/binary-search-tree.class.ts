export class BSTNode {
  public value: any = null;
  public left: BSTNode = null;
  public right: BSTNode = null;
  constructor(value: any) {
    this.value = value;
  }
}

enum DIRECTION_ENUM {
  LEFT = 'left',
  RIGHT = 'right',
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
      const direction = this.getDirection(node.value, curNode.value);

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

  public find(val: any, root: BSTNode = this.root): boolean {
    if (!val || !root) { return false; }
    if (val === root.value) {
      return true;
    }
    const direction = this.getDirection(val, root.value);
    return this.find(val, root[direction]);
  }

  public breadthFirstSearch(): BSTNode[] {
    if (!this.root) { return []; }

    let queue = [this.root];
    const visited = [];
    while (queue.length) {
      const addToQueue = [queue[0].left, queue[0].right].filter(Boolean);
      queue = [...queue, ...addToQueue];
      visited.push(queue.shift());
    }

    return visited;
  }

  private getDirection(valA: any, valB: any): DIRECTION_ENUM {
    return valA > valB ? DIRECTION_ENUM.RIGHT : DIRECTION_ENUM.LEFT;
  }
}
