import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';

class Node {
  public value: any;
  public next: Node;
  constructor(value) {
    this.value = value;
  }
}

class SinglyLinkedList {
  public length = 0;
  public length$: BehaviorSubject<number> = new BehaviorSubject(this.length);
  public head: Node = null;
  public tail: Node = null;

  constructor() {
    this.length$.subscribe(() => console.log(this));
  }

  public push(value: any): void {
    const newNode = new Node(value);
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

  public pop(): Node {
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

  public shift(): Node {
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

  public unshift(value: any): Node {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.length) {
      this.tail = newNode;
    }
    this.increaseLength();
    return newNode;
  }

  public get(index): Node {
    if (index < 0 || index >= this.length) { return null; }
    if (index === 0) { return this.head; }
    let currentNode = this.head;
    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  public set(index: number, value: any): boolean {
    const node = this.get(index);
    if (!node) { return false; }
    node.value = value;
    this.length$.next(this.length);
    return true;
  }

  public insert(index: number, value: any): boolean {
    const currentNode = this.get(index);
    if (!currentNode) { return false; }
    const newNode = new Node(value);
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

  public traverse(): Node {
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

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.scss']
})
export class LinkedListComponent implements OnInit {
  @ViewChild('indexInput', null) nameInput: ElementRef;
  @ViewChild('valueInput', null) valueInput: ElementRef;
  public singlyLinkedList: SinglyLinkedList;
  public itemsLength$: Observable<number>;
  public itemsArr: Node[] = [];

  constructor() { }

  ngOnInit() {
    this.singlyLinkedList = new SinglyLinkedList();
    this.singlyLinkedList.length$.subscribe(() => this.render());
  }

  public push(): void {
    this.singlyLinkedList.push(this.getValue());
  }

  public pop(): void {
    this.singlyLinkedList.pop();
  }

  public shift(): void {
    this.singlyLinkedList.shift();
  }

  public unshift(): void {
    this.singlyLinkedList.unshift(this.getValue());
  }

  public get(): Node {
    const index = Number(this.nameInput.nativeElement.value);
    return this.singlyLinkedList.get(index);
  }

  public set(): boolean {
    const index = Number(this.nameInput.nativeElement.value);
    const value = this.valueInput.nativeElement.value;
    return this.singlyLinkedList.set(index, value);
  }

  public insert(): boolean {
    const index = Number(this.nameInput.nativeElement.value);
    const value = this.valueInput.nativeElement.value;
    return this.singlyLinkedList.insert(index, value);
  }

  public remove(): boolean {
    const index = Number(this.nameInput.nativeElement.value);
    return this.singlyLinkedList.remove(index);
  }

  public reverse() {
    this.singlyLinkedList.reverse();
  }

  private render(): void {
    this.itemsArr = [];
    if (this.singlyLinkedList.length < 1) { return; }
    let node = this.singlyLinkedList.head;
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
