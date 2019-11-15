import { Component, OnInit } from '@angular/core';
import { BinarySearchTree } from '../../classes/index';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.scss']
})
export class BinarySearchTreeComponent implements OnInit {
  public bst: BinarySearchTree;

  ngOnInit() {
    this.bst = new BinarySearchTree();
  }

  public insert() {
    const value = this.getValue();
    this.bst.insert(value);
  }

  private getValue(): number {
    return Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
  }
}
