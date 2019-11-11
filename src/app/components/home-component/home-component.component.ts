import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.validAnagram(121335, 132136);
    // this.countUniqValues([1, 2, 3, 3, 4, 4, 5]);
    // this.areThereDuplicates(1, 2, 3, 4, 5);
    // this.averagePair([1, 2, 3, 4, 5, 6, 7, 8], 10);
    // this.isSubsequence('hello', 'hkse lsdlxco');
    // this.maxSubarraySum([-10], 2);
  }

  // [1, 2, 4, 5, 6 ,7], 4
  public maxSubarraySum(arr, windowSize) {
    if (arr.length < windowSize) {
      console.log('The array length is less then the widow size');
      return null;
    }

    let j = 0;
    let sum = 0;
    let result = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (i >= windowSize) {
        sum -= arr[j];
        j++;
      }

      result = sum > result ? sum : result;
    }

    console.log('Result is ', result);
  }

  // ['hello', 'hkse lsdlxco']
  public isSubsequence(strA, strB) {
    if (strA.length > strB.length) {
      console.log('Target string is greater');
      return false;
    }
    let j = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < strB.length; i++) {
      if (strB[i] === strA[j]) {
        j++;
        if (j === strA.length) {
          console.log('Result is TRUE');
          return true;
        }
      }
    }

    console.log('Result is FALSE');
    return false;
  }

  // [1,2,3,4,5,6,7,8] 4.5
  public averagePair(arr, targetAverage) {
    if (arr.length < 2) {
      console.log('Less then two items in an array');
      return false;
    }

    let j = 1;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length - 1; i++) {
      const curAverage = (arr[i] + arr[j]) / 2;
      if (curAverage === targetAverage) {
        console.log('The result is TRUE');
        return true;
      }
      j++;
    }
    console.log('The result is FALSE');
    return false;
  }

  public areThereDuplicates(...args: any[]) {
    if (args.length < 2) {
      console.log('Less then two items in an array');
      return false;
    }
    let j = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 1; i < args.length; i++) {
      if (args[j] === args[i]) {
        console.log('Result is TRUE');
        return true;
      }
      j++;
    }

    console.log('Result is FALSE');
    return j > 0;
  }

  public countUniqValues(arr) {
    let i = 0;
    let j = 1;
    while (j < arr.length) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
      j++;
    }
    console.log(`Result = ${i + 1}`);
    return i + 1;
  }

  public validAnagram(stringA, stringB) {
    const strA = stringA.toString();
    const strB = stringB.toString();

    if (strA.length !== strB.length) {
      console.log('Not a same length!');
      return false;
    }
    const frequencyObjA = this.getFrequencyObj(strA);
    const frequencyObjB = this.getFrequencyObj(strB);

    for (const char in frequencyObjA) {
      if (frequencyObjA[char] === frequencyObjB[char]) {
        delete frequencyObjB[char];
      } else {
        console.log('Result: FALSE');
        return false;
      }
    }

    console.log('Result: TRUE');
    return true;
  }

  public getFrequencyObj(str): object {
    const frequencyObj = {};
    str.split('').forEach(char => {
      frequencyObj[char] = ++frequencyObj[char] || 1;
    });
    return frequencyObj;
  }

}
