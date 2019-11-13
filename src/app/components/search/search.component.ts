import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public run(): void {
    const res = this.mergeSort([1, 6, 9, 2, 7, 10, 11, 4, 5, 6, 67, 7, 8, 8, 9, 9, 0, 0, 0, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 25, 2]);
    console.log(res);
  }

  // [1, 6, 9] [2, 7, 10, 11]
  public merge(arr1: number[], arr2: number[]) {
    const res = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < arr1.length || rightIndex < arr2.length) {
      let elementToPush = null;
      if (rightIndex >= arr2.length || arr1[leftIndex] <= arr2[rightIndex] && leftIndex < arr1.length) {
        elementToPush = arr1[leftIndex];
        leftIndex++;
      } else {
        elementToPush = arr2[rightIndex];
        rightIndex++;
      }
      res.push(elementToPush);
    }

    return res;
  }

  public mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) { return arr; }
    const middle = Math.ceil(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, middle));
    const right = this.mergeSort(arr.slice(middle));
    return this.merge(left, right);
  }

  public selectionSort(arr: number[]): number[] {
    let noSwap = false;
    let startIndex = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {

      for (let j = startIndex; j < arr.length - 1; j++) {
        let minValueIndex = startIndex;
        if (arr[minValueIndex] < arr[j + 1]) {
          minValueIndex = j + 1;
        }
        if (minValueIndex !== startIndex) {
          [arr[minValueIndex], arr[j + 1]] = [arr[j + 1], arr[minValueIndex]];
          noSwap = false;
        }
      }

      if (noSwap) { break; }

      startIndex += 1;
      noSwap = true;
      console.log('!!!!!');
    }
    return arr;
  }

  public bubbleSort(arr: number[]): number[] {
    let iterations = 0;
    let proceed = true;
    let i = 0;
    let swapped = false;
    let finalIndex = arr.length - 1;
    while (proceed) {
      const isLastComparison = i === finalIndex - 1;

      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }

      if (isLastComparison) {
        proceed = swapped;
        swapped = false;
        finalIndex -= 1;
      }

      isLastComparison ?  i = 0 : i++;
      iterations++;
    }

    console.log(iterations);
    return arr;
  }

  public naiveStringSearch(str: string, desiredStr: string) {
    let matchResultCounter = 0;
    let matchCounter = 0;
    if (!str.length) { return -1; }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < str.length; i++) {
      if (str[i] === desiredStr[matchCounter]) {
        if (matchCounter === desiredStr.length - 1) {
          matchCounter = 0;
          matchResultCounter += 1;
        }
        matchCounter += 1;
      } else {
        matchCounter = 0;
        if (str[i] === desiredStr[0]) {
          matchCounter += 1;
        }
      }
    }

    return matchResultCounter;
  }

  public binarySearch(arr: any[], value: any) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    if (!arr.length) { return -1; }

    while (startIndex <= endIndex) {
      const middleIndex = Math.ceil((endIndex + startIndex) / 2) ;

      if (arr[middleIndex] === value) {
        return middleIndex;
      }

      if (value > arr[middleIndex]) {
        startIndex = middleIndex - 1;
      } else {
        endIndex = middleIndex + 1;
      }
    }

    return -1;
  }

  public linearSearch(arr: any[], value: any) {
    let res = -1;
    if (!arr.length) { return res; }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        res = i;
        break;
      }
    }
    return res;
  }
}
