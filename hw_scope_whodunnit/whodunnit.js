// #### Episode 1

// ```js
// // const scenario = {
// //   murderer: 'Miss Scarlet',
// //   room: 'Library',
// //   weapon: 'Rope'
// // };
// //
// // const declareMurderer = function() {
// //   return `The murderer is ${scenario.murderer}.`;
// // }
// //
// // const verdict = declareMurderer();
// // console.log(verdict);
// // "The murderer is Miss Scarlet" will b output as the object scenario is declared outside of any function and has global scope.
// ```

// #### Episode 2
//
// ```js
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ```

// This will trigger an assignment error when it tries to reassign the constant murderer within the changeMurderer function.


// #### Episode 3
//
// ```js
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// ```
// The first output will be "First Verdict: The murderer is Mrs. Peacock", as Mrs. Peacock is the value of let murderer declared locally within the declareMurderer function which is then called in the firstVerdict function.

// The second output will be "Second Verdict: The murderer is Proffessor Plum", as the secondVerdict function accesses the let murderer variable which is defined outside of any function thus giving it global scope.


// #### Episode 4
//
// ```js
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
// ```
// Output 1 will be "The suspects are Miss Scarlet, Professor Plum Colonel Mustard."  This is because declareAllSuspects accesses thr locally defined suspectThree and the globally defined supects One and Two.

// The second output will be "Suspect three is Mrs Peacock" because the console.log is acessing the globally defined variable suspectThree.
