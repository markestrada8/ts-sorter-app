"use strict";
// export class Sorter {
//   // collection: number[];
//   // constructor (collection: number[]) {
//   //   this.collection = collection
//   // }
//   //REFACTOR
//   constructor (public collection: number[] | string) {}
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//ADD 'ABSTRACT' KEYWORD
class Sorter {
    // REMOVE TO EACH COLLECTION CLASS 
    // (MAKE Sorter PARENT ONLY - NO CONSTRUCTOR FOR INTERNAL DATA STRUCTURE)
    // constructor(public collection: Sortable) { }
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
