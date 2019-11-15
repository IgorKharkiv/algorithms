import { SinglyLinkedListNode, SinglyLinkedList } from './singly-linked-list.class';
export class Stack {
  public stack: SinglyLinkedList = new SinglyLinkedList();
  public push(): number {
    const value = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
    return this.stack.push(value);
  }
  public pop(): SinglyLinkedListNode {
    return this.stack.pop();
  }
}
