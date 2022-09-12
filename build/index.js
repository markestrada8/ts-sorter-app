"use strict";
//MY ATTEMPT (YAY)
// const nums = [10, 5, 18, -3]
// const bubbleSort = (arr: number[]) => {
//   let count = arr.length -1
//   for (let i = 0; i < arr.length; i++) {
//   for (let i = 0; i < count; i++) {
//     let x: number = 0
//     if (arr[i] > arr[i + 1]) {
//       x = arr[i]
//       arr[i] = arr[i + 1]
//       arr[i + 1] = x
//     }
//   }
//   count -= 1
// }
//   return arr
// }
// console.log(bubbleSort(nums))
// HIS CODE
class Sorter {
    // collection: number[];
    // constructor (collection: number[]) {
    //   this.collection = collection
    // }
    //REFACTOR
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
