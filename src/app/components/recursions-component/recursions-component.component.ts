import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursions-component',
  templateUrl: './recursions-component.component.html',
  styleUrls: ['./recursions-component.component.scss']
})
export class RecursionsComponentComponent implements OnInit {
  ngOnInit() {
    const res = this.capitalizeFirst(['car', 'taco', 'banana']);
    console.log(res);
  }

  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  public capitalizeFirst(arr: string[]) {
    const result = [];
    if (!arr.length) { return result; }
    const str = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    result.push(str);
    arr.shift();
    return result.concat(this.capitalizeFirst(arr));
  }

  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
  public flatten(arr: any[]) {
    const result = [];
    if (!arr.length) { return result; }
    (function helper(array: any[]) {
      if (!array.length) { return; }

      if (!Array.isArray(array[0])) {
        result.push(array[0]);
      } else {
        helper(array[0]);
      }
      array.shift();
      helper(array);
    })(arr);

    return result;
  }

  // isPalindrome('awesome') // false
  // isPalindrome('foobar') // false
  // isPalindrome('tacocat') // true
  // isPalindrome('amanaplanacanalpanama') // true
  // isPalindrome('amanaplanacanalpandemonium') // false
  public isPalindrome(str) {
    const startingString = str;
    const reversedString = this.reverse(str);
    return startingString === reversedString;
  }

  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'
  public reverse(str) {
    let result = '';

    (function helper(inputStr) {
      if (!inputStr.length) { return ''; }
      result += inputStr[inputStr.length - 1];
      helper(inputStr.substring(0, inputStr.length - 1));
    })(str);

    return result;
  }

  // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
  // fib(4) // 3
  // fib(10) // 55
  // fib(28) // 317811
  // fib(35) // 9227465
  public fib(index) {
    let currentNumber = 1;
    let previousNumber = 0;

    (function helper(inputIndex) {
      if (inputIndex - 2 === 0) { return; }
      currentNumber += previousNumber;
      previousNumber = currentNumber - previousNumber;
      helper(inputIndex - 1);
    })(index);

    return previousNumber + currentNumber;
  }

  // SAMPLE INPUT/OUTPUT
  // recursiveRange(6) // 21
  // recursiveRange(10) // 55
  public recursiveRange(num) {
    if (num === 0) { return 0; }
    return num + this.recursiveRange(num - 1);
  }

  // productOfArray([1,2,3]) // 6
  public productOfArray(arr) {
    let sum = 0;
    (function helper(inputArr) {
      if (arr.length === 0) { return sum; }
      sum += inputArr[inputArr.length - 1];
      inputArr.pop();
      helper(inputArr);
    })(arr);

    return sum;
  }

  // factorial(1) // 1
  // factorial(2) // 2
  // factorial(4) // 24
  // factorial(7) // 5040
  public factorial(num) {
    if (num === 0 || num === 1) { return 1; }
    return num * this.factorial(num - 1);
  }

  // power(2,0) // 1
  // power(2,2) // 4
  // power(2,4) // 16
  public power(base, exponent) {
    if (exponent === 0) { return 1; }
    return base * this.power(base, exponent - 1);
  }
}
