"use strict";
// TypeScript is required
const testArr = [1, 4, 7, 19, 35, 21, 69, 34, 5, 15];
/* SortArray class should receive input of type array of number
   getMaxIndex(),  getMinIndex(), getMedianIndex() are private methods */
class SortArray {
    constructor(input) {
        this.input = input;
    }
    /* this returns the index of biggest item in the array */
    getMaxIndex() {
        return this.input.indexOf(Math.max(...this.input));
    }
    /* this return the biggest item in the array. Reuse getMaxIndex */
    getMaxElement() {
        return this.input[this.getMaxIndex()];
    }
    /* this return the index of smallest item in the array */
    getMinIndex() {
        return this.input.indexOf(Math.min(...this.input));
    }
    /* this return the smallest item in the array. Reuse the getMinIndex */
    getMinElement() {
        return this.input[this.getMinIndex()];
    }
    /* this return the index of median item in the array
     * to find the median item, you need to sort the array, then use the algorithm: data[Math.floor(data.length / 2)] */
    getMedianIndex() {
        this.input.sort(function (a, b) { return a - b; });
        return Math.floor(this.input.length / 2);
    }
    /* this return the median item in the array. Reuse getMedianIndex */
    getMedianElement() {
        return this.input[this.getMedianIndex()];
    }
    /* this return the average value of the array */
    getAverageValue() {
        return this.input.reduce((a, b) => a + b) / this.input.length;
    }
}
/* run the methods to get the min, max, median, average values with the testArr. */
const calculationResult = new SortArray(testArr);
console.log("Max index: " + calculationResult.getMaxIndex());
console.log("Max element: " + calculationResult.getMaxElement());
console.log("Min index: " + calculationResult.getMinIndex());
console.log("Min element: " + calculationResult.getMinElement());
console.log("Median index: " + calculationResult.getMedianIndex());
console.log("Median element: " + calculationResult.getMedianElement());
console.log("Average value: " + calculationResult.getAverageValue());
