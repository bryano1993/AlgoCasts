// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reverseString = str
    .split("")
    .reverse()
    .join("");

  if (str === reverseString) {
    return true;
  } else return false;

  //or
  //return str === reversreString;
}

//alternate solution
//not an idea solution for this problem
//however good to show interviewer multiple solutions to a problem
//take string turn it into an array

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
