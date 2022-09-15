"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
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
const numsCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(collection)
// sorter.sort()
numsCollection.sort();
console.log(numsCollection.data);
const charsCollection = new CharactersCollection_1.CharactersCollection('zhADuG');
// const sorterTwo = new Sorter(charsCollection)
charsCollection.sort();
console.log(charsCollection.data);
const linkedList = new LinkedList_1.LinkedList();
const linkedListValues = [500, -10, -30, 4, 74, -48];
linkedListValues.forEach(value => {
    linkedList.add(value);
});
// linkedList.add(500)
// linkedList.add(-10)
// linkedList.add(-3)
// linkedList.add(24)
// const sorterThree = new Sorter(linkedList)
linkedList.sort();
linkedList.print();
