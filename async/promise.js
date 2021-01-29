// 12강. 프로미스 개념 및 활용
'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State(상태)
//: pending (뜻 : 보류 중)-> fulfilled(operation을 성공적으로 끝낸 상태) or rejected (file을 찾을 수 없거나 네트워크에 문제 생기는 경우)
// Producer(원하는 기능을 수행해서 해당 데이터를 만드는 사람) vs Consumer (원하는 데이터를 소비하는 사람)

// 1. Producer (Promise 만들기)
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network')); //Error 클래스는 js가 제공하는 object 중 하나
  }, 2000);
});

// 2. Consumers: then, catch, finally (Promise 사용하기)
promise //
  .then(value => { //then은 프로미스가 정상적으로 잘 수행되어서 마지막에 resolve라는 콜백함수를 통해서 전달한 값이 value의 파라미터로 전달되어져 들어온다
    console.log(value); // value는 promise가 잘 수행되어서 출력됨
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining (Promise 연결하기)
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // 
});

fetchNumber
  .then(num => num * 2) // 2
  .then(num => num * 3) // 6
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); //5
    });
  })
  .then(num => console.log(num)); // 5 출력

// 4. Error Handling (오류를 잘 처리하자!)
// 총 3가지의 promise를 리턴하는 함수들 getHen, getEgg, cook
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000); // 1초 있다가 닭 리턴
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000); //  치킨을 받아서 치킨으로부터 달걀 얻어옴
  });

// const getEgg = hen =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); 달걀을 받아오는 과정에서 실패하는 경우
//   });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000); // 달걀을 가지고 후라이 만듦
  });

getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal));

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log);
// 위 2개 getHen은 서로 같다

// getHen() //
//   .then(getEgg)
//   .catch(error => {
//    return '🍞'; //위의 then에서 발생한 문제를 catch로 문제해결
//     })
//   .then(cook)
//   .then(console.log)
//   .catch(console.log);