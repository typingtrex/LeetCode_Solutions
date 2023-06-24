// Problem:
/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  let magazineLetters = {};

  for (let i = 0; i < magazine.length; i++) {
    let currChar = magazine[i];
    console.log('character: ', currChar);
    if (magazineLetters[currChar]) {
      magazineLetters[currChar] = magazineLetters[currChar] + 1;
    } else {
      magazineLetters[currChar] = 1;
    }

    // console.log(magazineLetters)
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let currChar = ransomNote[i];

    if (magazineLetters[currChar]) {
      magazineLetters[currChar] = magazineLetters[currChar] - 1;
    } else {
      return false;
    }
  }

  return true;
};
