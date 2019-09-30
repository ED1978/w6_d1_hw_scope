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
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// ```
// Output 1 will be "The suspects are Miss Scarlet, Professor Plum Colonel Mustard."  This is because declareAllSuspects accesses thr locally defined suspectThree and the globally defined supects One and Two.

// The second output will be "Suspect three is Mrs Peacock" because the console.log is acessing the globally defined variable suspectThree.


// #### Episode 5
//
// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// ```
// The output will be "The weapon is the Revolver" because although the object scenario is delcared as a constant, it's attribute remain muttable.  Therefore chngeWeapon is able to update the value of scenario.weapon


// #### Episode 6
//
// ```js
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ```
// The output will be "The Murderer is Mrs White" because the variable murderer declared within the changeMurderer function isn't preceeded with the let keyword making it accessable to declareMurderer.


// #### Episode 7
//
// ```js
// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
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
//  REVISIT!!!!!!


// #### Episode 8
//
// ```js
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// ```
// When changeScenario is called, it keeps the value of murderer set to Mrs Peacock and redefines the value of room to dining room. It then calls plotTwist passing in dining room as it's argument and confirms that it is equal to the value of scenario.room then redifines the value of murderer to colonel Mustard.  It then calls unexpectedOutcome passing in Colonel Mustard as its argument which redifines the value of weapon to Candle stick.
// The output is therefore The weapon is Candle Stick
