// export class Sorter {
//   // collection: number[];
//   // constructor (collection: number[]) {
//   //   this.collection = collection
//   // }
//   //REFACTOR
//   constructor (public collection: number[] | string) {}

//   sort(): void {
//     const {length} = this.collection
//     // FOR NUMBERS
//     // if (typeof this.collection !== 'string') {
//       //REFACTOR
//     if (this.collection instanceof Array) {
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection[j] > this.collection[j + 1]) {
//           const temp = this.collection[j]
//           this.collection[j] = this.collection[j + 1]
//           this.collection[j + 1] = temp
//         }
//       }
//     }
//   }
//     // FOR STRINGS (MY CODE) - IF STRING, SPLIT STRING INTO ARRAY,
//     //SORT BY CHARCODE, REJOIN AND ASSIGN TO this.collection
//     if (typeof this.collection === 'string') {
//       const result = this.collection.split("")
//       for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i - 1; j++) {
//           if (result[j].charCodeAt(0) > result[j+1].charCodeAt(0)) {
//             const temp = result[j]
//             result[j] = result[j + 1]
//             result[j + 1] = temp
//           }
//         }
//       }
//       this.collection = result.join("")
//     }
//   }
// }

// SECOND REFACTOR
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void
}

//ADD 'ABSTRACT' KEYWORD
export abstract class Sorter {
  // DEFINE ABSTRACT TYPE ANNOTATIONS
  abstract length: number
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void

  // REMOVE TO EACH COLLECTION CLASS 
  // (MAKE Sorter PARENT ONLY - NO CONSTRUCTOR FOR INTERNAL DATA STRUCTURE)
  // constructor(public collection: Sortable) { }

  sort(): void {
    const { length } = this

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}