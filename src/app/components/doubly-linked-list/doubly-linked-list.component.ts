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
    return nodeToRemove;
  }

  public unshift(value: any): void {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.increaseLength();
  }

  public get(index: number): Node {
    if (!this.length || index >= this.length || index < 0 ) { return null; }

    const reverse = index > this.length / 2;
    let node = this.head;
    let link = 'next';

    if (reverse) {
      link = 'prev';
      node = this.tail;
      index = this.length - index - 1;
    }

    while (index) {
      node = node[link];
      index--;
    }

    return node;
  }

  public set(index: number, value: any): boolean {
    const node = this.get(index);
    if (!node) { return false; }
    node.value = value;
    this.length$.next(this.length);
    return true;
  }

  public insert(index: number, value: any): boolean {
    const node = this.get(index);
    if (!node) { return false; }
    const newNode = new Node(value);
    newNode.next = node.next;
    newNode.prev = node;
    node.next = newNode;
    this.increaseLength();
    return true;
  }

  public remove(index): boolean {
    if (index === 0) { return !!this.shift(); }
    if (index === this.length - 1) { return !!this.pop(); }
    const nodeToRemove = this.get(index);
    nodeToRemove.prev.next = nodeToRemove.next;
    nodeToRemove.next.prev = nodeToRemove.prev;
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

  public unshift() {
    this.doublyLinkedList.unshift(this.getValue());
  }

  public shift() {
    this.doublyLinkedList.shift();
  }

  public pop(): void {
    this.doublyLinkedList.pop();
  }

  public push(): void {
    this.doublyLinkedList.push(this.getValue());
  }

  public get(): Node {
    const node = this.doublyLinkedList.get(this.getValueOfNumberInput());
    console.log('=== === ===', node);
    return node;
  }

  public set(): boolean {
    const index = this.getValueOfNumberInput();
    const value = this.getValueOfTextInput();
    return this.doublyLinkedList.set(index, value);
  }

  public insert(): boolean {
    const index = this.getValueOfNumberInput();
    const value = this.getValueOfTextInput();
    return this.doublyLinkedList.insert(index, value);
  }

  public remove(): boolean {
    const index = this.getValueOfNumberInput();
    return this.doublyLinkedList.remove(index);
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

  private getValueOfNumberInput(): number {
    return Number(this.nameInput.nativeElement.value);
  }
  private getValueOfTextInput(): number {
    return Number(this.valueInput.nativeElement.value);
  }
}
