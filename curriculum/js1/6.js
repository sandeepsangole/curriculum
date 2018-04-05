/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  let res = 0;
  
  for(let i = 2;i<= a / 2;i++){
    if(a % i === 0)
    res+=i;
  }

  return res;
};

module.exports = {
  solution,
};
