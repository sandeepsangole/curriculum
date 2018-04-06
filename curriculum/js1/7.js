/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a) => {
  if(a === 1) return false;

  if(a === 2) return true;

  if(isPrime(a , parseInt(a/2))){
      return true;
  }

  return false;  
};

const isPrime = (no,div) => {
  
  if(div === 0 || no === 1){
    return true;
  }

  if(no%div === 0 && div !== 1){
      return false;
  }
    
  return isPrime(no , div - 1);

}

module.exports = {
  solution,
};
