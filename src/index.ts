import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter'
import { LinkedList } from './LinkedList';

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

const numsCollection = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(collection)
// sorter.sort()
numsCollection.sort()
console.log(numsCollection.data)

const charsCollection = new CharactersCollection('zhADuG')
// const sorterTwo = new Sorter(charsCollection)
charsCollection.sort()
console.log(charsCollection.data)

const linkedList = new LinkedList()
const linkedListValues = [500, -10, -30, 4, 74, -48]
linkedListValues.forEach(value => {
  linkedList.add(value)
})
// linkedList.add(500)
// linkedList.add(-10)
// linkedList.add(-3)
// linkedList.add(24)

// const sorterThree = new Sorter(linkedList)
linkedList.sort()
linkedList.print()
