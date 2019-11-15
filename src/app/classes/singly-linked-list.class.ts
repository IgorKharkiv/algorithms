import { BehaviorSubject } from 'rxjs';

export class SinglyLinkedListNode {
  public value: any;
  public next: SinglyLinkedListNode;
  constructor(value) {
    this.value = value;
  }
}

export class SinglyLinkedList {
  public length = 0;
  public length$: BehaviorSubject<number> = new BehaviorSubject(this.length);
  public head: SinglyLinkedListNode = null;
  public tail: SinglyLinkedListNode = null;

  constructor() {
    this.length$.subscribe(() => console.log(this));
  }

  public push(value: any): void {
    const newNode = new SinglyLinkedListNode(value);
    const currentTailNode = this.tail;
    if (!currentTailNode) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      currentTailNode.next = newNode;
      this.tail = newNode;
    }
    this.increaseLength();
  }

  public pop(): SinglyLinkedListNode {
    if (!this.head) { return null; }

    const newTail = this.traverse();
    if (newTail) {
      newTail.next = null;
    }
    const currentTail = this.tail;

    if (this.length > 1) {
      this.tail = newTail;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.decreaseLength();
    return currentTail;
  }

  public shift(): SinglyLinkedListNode {
    if (!this.length) { return null; }
    const currentHead = this.head;
    if (this.length > 1) {
      this.head = currentHead.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.decreaseLength();
    return currentHead;
  }

  public unshift(value: any): SinglyLinkedListNode {
    const newNode = new SinglyLinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.length) {
      this.tail = newNode;
    }
    this.increaseLength();
    return newNode;
  }

  public get(index): SinglyLinkedListNode {
    if (index < 0 || index >= this.length) { return null; }
    if (index === 0) { return this.head; }
    let currentNode = this.head;
    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  public set(index: number, value: any): boolean {
    const SinglyLinkedListNode = this.get(index);
    if (!SinglyLinkedListNode) { return false; }
    SinglyLinkedListNode.value = value;
    this.length$.next(this.length);
    return true;
  }

  public insert(index: number, value: any): boolean {
    const currentNode = this.get(index);
    if (!currentNode) { return false; }
    const newNode = new SinglyLinkedListNode(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.increaseLength();
    return true;
  }

  public remove(index: number): boolean {
    if (index > this.length || index < 0) { return false; }
    if (index === 0) { return !!this.shift(); }
    if (index === this.length) { return !!this.pop(); }
    const penult = this.get(index - 1);
    const removedItem = penult.next;
    penult.next = removedItem.next;
    this.decreaseLength();
    return true;
  }

  public reverse(): void {
    if (this.length > 1) {
      let currentLeft = this.head;
      let currentRight = currentLeft.next;
      let nextItem = currentRight.next;
      let isFirst = true;
      while (nextItem) {
        if (isFirst) {
          currentLeft.next = null;
          this.tail = currentLeft;
          isFirst = false;
        }
        if (currentRight) {
          currentRight.next = currentLeft;
        }
        currentLeft = currentRight;
        currentRight = nextItem;
        if (!nextItem.next) {
          this.head = nextItem;
          nextItem.next = currentLeft;
          nextItem = null;
          currentRight = null;
        } else {
          nextItem = nextItem.next;
        }
      }
      this.length$.next(this.length);
    }
  }

  public traverse(): SinglyLinkedListNode {
    let current = this.head;
    while (current && current.next && current.next.next) {
      current = current.next;
    }
    console.log(current);
    return current;
  }

  private increaseLength(): void {
    this.length++;
    this.length$.next(this.length);
  }

  private decreaseLength(): void {
    this.length--;
    this.length$.next(this.length);
  }
}
