class Solution {
  isHappy(n) {
    let nString = n.toString();
    return this.validate(nString, new Set());
  }

  validate(nString, prevNums) {
    if (nString === '1') return true;

    if (prevNums.has(nString)) return false;

    prevNums.add(nString);

    let newN = 0;

    for (let num of nString.split('')) {
      newN += num ** 2;
    }

    return this.validate(newN.toString(), prevNums);
  }
}

const solution = new Solution();
console.log(solution.isHappy(19));
