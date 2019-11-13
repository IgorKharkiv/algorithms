import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

class Node {
  public value: any;
  public next: Node;
  constructor(value) {
    this.value = value;
  }
}

class SinglyLinkedList {
  public length = 0;
  public head: Node = null;
  public tail: Node = null;

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
    this.length++;

    console.log(this);
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

    this.length--;
    console.log(this);
    return currentTail;
  }

  public shift(): Node {
    if (!this.head) { return null; }
    const currentHead = this.head;
    if (this.length > 1) {
      this.head = currentHead.next;
    } else {
      this.head = null;
    }
    this.length--;
    console.log(this);
    return currentHead;
  }

  public unshift(value: any): Node {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.length) {
      this.tail = newNode;
    }
    this.length++;
    console.log(this);
    return newNode;
  }

  public get(index): Node {
    if (index < 0 || index >= this.length) { return null; }
    if (index === 0) { return this.head; }
    let node = null;
    for (let i = 1; i <= index; i++) {
      node = this.head.next;
    }

    console.log(node);
    return node;
  }

  public set(index: number, value: any): Node {
    const node = this.get(index);
    if (!node) { return null; }
    node.value = value;
    console.log(this, node);
    return node;
  }

  public traverse(): Node {
    let current = this.head;
    while (current && current.next && current.next.next) {
      current = current.next;
    }
    console.log(current);
    return current;
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
  constructor() { }

  ngOnInit() {
    this.singlyLinkedList = new SinglyLinkedList();
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

  public set(): Node {
    const index = Number(this.nameInput.nativeElement.value);
    const value = this.valueInput.nativeElement.value;
    return this.singlyLinkedList.set(index, value);
  }

  private getValue(): number {
    return Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
  }

}
