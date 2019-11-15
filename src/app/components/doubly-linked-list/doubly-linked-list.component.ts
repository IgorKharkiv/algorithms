import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DoublyLinkedList, DoublyLinkedListNode } from '../../classes/index';

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
  public itemsArr: DoublyLinkedListNode[] = [];

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

  public get(): DoublyLinkedListNode {
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
