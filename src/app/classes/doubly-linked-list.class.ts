import { BehaviorSubject } from 'rxjs';

export class DoublyLinkedListNode {
  public value: any;
  public next: DoublyLinkedListNode = null;
  public prev: DoublyLinkedListNode = null;
  constructor(value) {
    this.value = value;
  }
}
export class DoublyLinkedList {
  public length = 0;
  public length$: BehaviorSubject<number> = new BehaviorSubject(this.length);
  public head: DoublyLinkedListNode = null;
  public tail: DoublyLinkedListNode = null;

  constructor() {
    this.length$.subscribe(() => console.log(this));
  }

  public push(value: any): void {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.increaseLength();
  }

  public pop(): DoublyLinkedListNode {
    if (!this.length) { return null; }
    const nodeToRemove = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = nodeToRemove.prev;
      this.tail.next = null;
    }

    this.decreaseLength();
    return nodeToRemove;
  }

  public shift(): DoublyLinkedListNode {
    if (!this.length) { return null; }
    const nodeToRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeToRemove.next;
      this.head.prev = null;
    }

    this.decreaseLength();
    return nodeToRemove;
  }

  public unshift(value: any): void {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.increaseLength();
  }

  public get(index: number): DoublyLinkedListNode {
    if (!this.length || index >= this.length || index < 0 ) { return null; }

    const reverse = index > this.length / 2;
    let DoublyLinkedListNode = this.head;
    let link = 'next';

    if (reverse) {
      link = 'prev';
      DoublyLinkedListNode = this.tail;
      index = this.length - index - 1;
    }

    while (index) {
      DoublyLinkedListNode = DoublyLinkedListNode[link];
      index--;
    }

    return DoublyLinkedListNode;
  }

  public set(index: number, value: any): boolean {
    const DoublyLinkedListNode = this.get(index);
    if (!DoublyLinkedListNode) { return false; }
    DoublyLinkedListNode.value = value;
    this.length$.next(this.length);
    return true;
  }

  public insert(index: number, value: any): boolean {
    const DoublyLinkedListNode = this.get(index);
    if (!DoublyLinkedListNode) { return false; }
    const newNode = new DoublyLinkedListNode(value);
    newNode.next = DoublyLinkedListNode.next;
    newNode.prev = DoublyLinkedListNode;
    DoublyLinkedListNode.next = newNode;
    this.increaseLength();
    return true;
  }

  public remove(index): boolean {
    if (index < 0 || index >= this.length) { return false; }
    if (index === 0) { return !!this.shift(); }
    if (index === this.length - 1) { return !!this.pop(); }
    const nodeToRemove = this.get(index);
    nodeToRemove.prev.next = nodeToRemove.next;
    nodeToRemove.next.prev = nodeToRemove.prev;
    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    this.decreaseLength();
    return true;
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