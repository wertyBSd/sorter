class Sorter {
  constructor() {
    this.arr = [];
    this.castom = false;
    Sorter.prototype.sortCompare = function(left, right) {
      return 0;
    };
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    if (this.castom) {
      indices = indices.sort();
      const left = indices[0];
      const right = indices[1];
      if (this.sortCompare(this.arr[left], this.arr[right]) > 0) {
        const tmp = this.arr[left];
        this.arr[left] = this.arr[right];
        this.arr[right] = tmp;
      }
    } else {
      if (Array.isArray(indices)) {
        indices = indices.sort();
        for (let i = 0, endI = indices.length - 1; i < endI; i++) {
          for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (this.arr[indices[j]] > this.arr[indices[j + 1]]) {
              var swap = this.arr[indices[j]];
              this.arr[indices[j]] = this.arr[indices[j + 1]];
              this.arr[indices[j + 1]] = swap;
            }
          }
        }
      }
    }
  }

  setComparator(func, thisArg) {
    Sorter.prototype.sortCompare = func;
    this.castom = true;
    //console.log(sortCompare);
  }
}

module.exports = Sorter;
