// #### Episode 1


const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// "The murderer is Miss Scarlet" will b output as the object scenario is declared outside of any function and has global scope.
