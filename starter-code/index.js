class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.length = this.items.length
      this.items.sort(function (a, b) {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    get(pos) {
      return this.items[pos]
    }

    max() {
      if (this.length === 0){
        throw new Error("EmptySortedList")
      }

      else {
        return this.items[this.length-1]
      }
    }
    min() {
      if (this.length === 0){
        throw new Error("EmptySortedList")
      }

      else {
        return this.items[0]
      }
    }
    sum() {
      if(this.length === 0){
        return 0
      }
      else {
        return this.items.reduce(function(a,b){
          return a + b
        }, 0);
      }
    }
    average() {
      if(this.length === 0){
        throw new Error("EmptySortedList")
      }
      else {
        return this.items.reduce((a,b) => a + b, 0) / this.length
      }
    }
  }
  
  module.exports = SortedList;