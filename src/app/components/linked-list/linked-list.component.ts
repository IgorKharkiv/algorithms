import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { SinglyLinkedList, SinglyLinkedListNode } from '../../classes/index';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.scss']
})
export class LinkedListComponent implements OnInit {
  @ViewChild('indexInput', null) nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('valueInput', null) valueInput: ElementRef<HTMLInputElement>;
  public singlyLinkedList: SinglyLinkedList;
  public itemsLength$: Observable<number>;
  public itemsArr: SinglyLinkedListNode[] = [];

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

  public get(): SinglyLinkedListNode {
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
