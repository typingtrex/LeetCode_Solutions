/*
Problem:

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/
/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  // make all letters lower case
  let lowerCaseStr = s.toLowerCase();

  // solve in O(N) time complexity using 2 pointers
  let index1 = 0;
  let index2 = s.length - 1;

  // loop through lowerCaseStr and see if pointers are at Alphanumeric characters using regEx
  lowerCaseStr = lowerCaseStr.split('');
  lowerCaseStr.filter((e) => {
    return (e = e.match(/[a-z]/i));
  });
  while (index1 < index2) {
    let char1 = lowerCaseStr[index1];
    let char2 = lowerCaseStr[index2];

    // returns false..... below... why??
    // console.log(char1, /^([a-z0-9]{5,})$/.test(char1))

    // console.log(char1, char1.match(/[a-z]/i))
    // console.log(char2, char2.match(/[a-z]/i))

    // if(!char1.match(/[a-z]/i)) {
    //     pointer1 ++;
    //     break;
    // }
    // if(!char2.match(/[a-z]/i)) {
    //     pointer2 --;
    //     break;
    // }

    // if (char1.match(/[a-z]/i) && char2.match(/[a-z]/i)){
    //     if (char1 !== char2) {
    //         return false;
    //     } else {
    //         pointer1++;
    //         pointer2--;
    //     }
    // }

    if (char1 !== char2) {
      return false;
    }

    index1++;
    index2--;
  }

  return true;
};

console.log(isPalindrome('racecar'));
