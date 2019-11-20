import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HashTable } from '../../classes/index';

@Component({
  selector: 'app-hash-table',
  templateUrl: './hash-table.component.html',
  styleUrls: ['./hash-table.component.scss']
})
export class HashTableComponent implements OnInit {
  @ViewChild('valueInput', null) valueInput: ElementRef;
  @ViewChild('keyInput', null) keyInput: ElementRef;

  public hashTable: HashTable;

  ngOnInit() {
    this.hashTable = new HashTable(10);
    console.log(this.hashTable);
  }

  public get(): any {
    const key = this.keyInput.nativeElement.value;
    const result = this.hashTable.get(key);
    console.log(result);
    return result;
  }

  public set(): void {
    const key = this.keyInput.nativeElement.value;
    const value = this.valueInput.nativeElement.value;
    this.hashTable.set(key, value);
    console.log(this.hashTable);
  }


  public keys(): string[] {
    const result = this.hashTable.keys();
    console.log(result);
    return result;
  }

  public values(): any[] {
    const result = this.hashTable.values();
    console.log(result);
    return result;
  }
}
