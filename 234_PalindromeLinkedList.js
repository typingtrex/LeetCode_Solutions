/*
------ Problem: ---------

Given the head of a singly linked list, return true if it is a
palindrome
 or false otherwise.
*/

var isPalindrome = function (head) {
  // store values in an array while traversing linked list
  // reverse the values and join
  // check if the values are the same

  let values = [];
  let currNode = head;
  while (currNode) {
    values.push(currNode.val);
    console.log(typeof currNode.val);
    currNode = currNode.next;
  }
  const valStr = values.join('');
  const reversedStr = values.reverse().join('');

  console.log('how is the str', valStr, reversedStr);
  if (valStr === reversedStr) {
    return true;
  }

  return false;
};
