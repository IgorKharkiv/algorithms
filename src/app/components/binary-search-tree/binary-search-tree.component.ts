import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BinarySearchTree, BSTNode } from '../../classes/index';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.scss']
})
export class BinarySearchTreeComponent implements OnInit {
  @ViewChild('valueInput', null) valueInput: ElementRef;
  public bst: BinarySearchTree;


  ngOnInit() {
    this.bst = new BinarySearchTree();
  }

  public insert() {
    const value = this.getValue();
    this.bst.insert(value);
  }

  public find(): boolean {
    const value = Number(this.valueInput.nativeElement.value);
    const res = this.bst.find(value);
    console.log('== result ==', res);
    return res;
  }

  public breadthFirstSearch(): BSTNode[] {
    const res = this.bst.breadthFirstSearch();
    console.log('breadthFirstSearch', res);
    return res;
  }

  private getValue(): number {
    return Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
  }
}
