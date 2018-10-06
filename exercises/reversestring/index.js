// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//my solution
// function reverse(str) {
//   const splitString = str.split("");
//   const reverseArray = splitString.reverse();
//   const joinString = reverseArray.join("");
//   return joinString;
// }

//solution 1
// function reverse1(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

//solution 1.5
// function reverse1(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

//solution 2
//create an empty string called 'reversed'
//for each character in the provided string
//  Take the character and add it to the start of reversed
// Return the variable 'reversed'

function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
    debugger;
  }

  return reversed;
}

//solution 3
//uses array helper
//to wow interviewer
// function reverse(str) {
//   debugger;
//   return str
//     .split("")
//     .reduce((reversed, character) => character + reversed, "");
// }

// reverse("asdf");

module.exports = reverse;
