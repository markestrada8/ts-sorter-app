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
  constructor (public collection: number[] | string) {}
  
  sort(): void {
    const {length} = this.collection
    // FOR NUMBERS
    if (typeof this.collection !== 'string') {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const temp = this.collection[j]
          this.collection[j] = this.collection[j + 1]
          this.collection[j + 1] = temp
        }
      }
    }
  }
    // FOR STRINGS (MY CODE) - IF STRING, SPLIT STRING INTO ARRAY,
    //SORT BY CHARCODE, REJOIN AND ASSIGN TO this.collection
    if (typeof this.collection === 'string') {
      const result = this.collection.split("")
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (result[j].charCodeAt(0) > result[j+1].charCodeAt(0)) {
            const temp = result[j]
            result[j] = result[j + 1]
            result[j + 1] = temp
          }
        }
      }
      this.collection = result.join("")
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0])
sorter.sort();

const sorterTwo = new Sorter("baqhgES")
sorterTwo.sort()
console.log(sorter.collection)
console.log(sorterTwo.collection)