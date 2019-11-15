import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

class Node {
  public value: any;
  public next: Node = null;
  public prev: Node = null;
  constructor(value) {
    this.value = value;
  }
}
class DoublyLinkedList {
  public length = 0;
  public length$: BehaviorSubject<number> = new BehaviorSubject(this.length);
  public head: Node = null;
  public tail: Node = null;

  constructor() {
    this.length$.subscribe(() => console.log(this));
  }

  public push(value: any): void {
    const newNode = new Node(value);
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

  public pop(): Node {
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

  public shift(): Node {
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

@Component({
  selector: 'app-doubly-linked-list',
  templateUrl: './doubly-linked-list.component.html',
  styleUrls: ['./doubly-linked-list.component.scss']
})
export class DoublyLinkedListComponent implements OnInit {
  @ViewChild('indexInput', null) nameInput: ElementRef;
  @ViewChild('valueInput', null) valueInput: ElementRef;
  public doublyLinkedList: DoublyLinkedList;
  public itemsLength$: Observable<number>;
  public itemsArr: Node[] = [];

  constructor() { }

  ngOnInit() {
    this.doublyLinkedList = new DoublyLinkedList();
    this.doublyLinkedList.length$.subscribe(() => this.render());
  }

  public shift() {
    this.doublyLinkedList.shift();
  }

  public pop(): void {
    this.doublyLinkedList.pop();
  }

  public push(): void {
    this.doublyLinkedList.push(this.getValue())
  }

  private render(): void {
    this.itemsArr = [];
    if (this.doublyLinkedList.length < 1) { return; }
    let node = this.doublyLinkedList.head;
    this.itemsArr.push(node);
    while (node.next) {
      node = node.next;
      this.itemsArr.push(node);
    }
    console.log(this.itemsArr);
  }
  
  private getValue(): number {
    return Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
  }
}
