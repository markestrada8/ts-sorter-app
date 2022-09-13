import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter'

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

const collection = new NumbersCollection([10, 3, -5, 0])
const sorter = new Sorter(collection)
sorter.sort()
console.log(collection.data)
// const sorterTwo = new Sorter("baqhgES")
// sorterTwo.sort()
// console.log(sorterTwo.collection)