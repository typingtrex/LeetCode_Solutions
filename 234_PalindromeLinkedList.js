/*
------ Problem: ---------

Given the head of a singly linked list, return true if it is a
palindrome
 or false otherwise.
*/
// ------- using reverse -------------
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

// ------- using 2 pointer ------------------
/*
var isPalindrome = function(head) {
  let values = [];
  let currNode = head;

  while (currNode) {
      values.push(currNode.val);
      currNode = currNode.next;
  }

  let l = 0;
  let r = values.length - 1;

  while (l < r) {
      if (values[l] !== values[r]) {
          return false;
      }
      l++;
      r--;
  }

  return true;
}
*/
