/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  if(a === 0 || b === 0){
    return 0;
  }

  if(a === 1 || b === 1){
    return 1;
  }

  if(a === b){
      return a;
  }

  if(a > b){
    return solution(a - b, b);
  } else {
    return solution(a, b - a);
  }

};

module.exports = {
  solution,
};
