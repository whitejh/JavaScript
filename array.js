'use strict';

// Array🎉
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.lentgh);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// print all fruits
// a. for
console.clear();
for(let i = 0 ; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
})

fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach((fruit) => console.log(fruit));

//console.clear();
// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

///////////////////////////////////////////////////////
// unshift : add an item to the beginning
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// Note!! shift & unshift are slower than pop & push
// splice : remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);

//splice는 원하는 인덱스만 지정하고 몇개나 지울껀지 말 안하면 우리가 지정한 인덱스부터 모든 데이터를 지워버림
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);

// combine two arrays
const fruits2 =  ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); //기존에 있던 배열에  fruits2 배열을 합침
console.log(newFruits);

// 5. Searching
// indexOf : find the index
//console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
//console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));