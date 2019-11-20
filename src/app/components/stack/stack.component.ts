import { Component, OnInit } from '@angular/core';
import { Stack } from '../../classes/index';
import { SinglyLinkedListNode } from '../../classes/singly-linked-list.class';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  public stack: Stack;
  public itemsArr: SinglyLinkedListNode[] = [];

  ngOnInit() {
    this.stack = new Stack();
    this.stack.stack.length$.subscribe(() => this.render());
  }

  private render(): void {
    this.itemsArr = [];
    if (this.stack.stack.length < 1) { return; }
    let node = this.stack.stack.head;
    this.itemsArr.push(node);
    while (node.next) {
      node = node.next;
      this.itemsArr.push(node);
    }
    console.log(this.itemsArr);
  }

  public push(): number {
    return this.stack.push();
  }

  public pop(): SinglyLinkedListNode {
    return this.stack.pop();
  }
}
