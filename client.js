console.log('Immutability');

const numberList = [2, 5, 3];
// add 7 to the list
const newNumber = 7;

// numberList.push(newNumber);
// console.log(numberList);

// const newNumberList = [numberList[0], numberList[1], numberList[2], newNumber];
const newNumberList = [newNumber, ...numberList];
console.log('numberList:', numberList);
console.log('newNumberList:', newNumberList);
console.log('spread:', ...numberList);

// OBJECTS

const bowler = {
  name: 'Scott',
  lastBowlingScore: 97,
};

// update value for score
// bowler.lastBowlingScore = 100;
// bowler.isRightHanded = false;
// console.log('bowler:', bowler);

// USE SPREAD on the Object
// const updatedBowler = {
//   name: bowler.name,
//   lastBowlingScore: bowler.lastBowlingScore,
// };

// all contents dropped in
// const updatedBowler = {
//   ...bowler,
// };

// adding new properties
// const updatedBowler = {
//   ...bowler,
//   lastBowlingScore: 100,
//   isRightHanded: false,
// };

const newProperties = {
  lastBowlingScore: 100,
  isRightHanded: false,
};
const updatedBowler = {
  ...bowler,
  ...newProperties,
};
console.log('bowler:', bowler);
console.log('updatedBowler:', updatedBowler);
