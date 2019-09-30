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
