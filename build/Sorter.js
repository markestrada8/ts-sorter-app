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
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
