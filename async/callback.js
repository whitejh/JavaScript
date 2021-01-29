// 11강. 비동기 처리의 시작 콜백 이해하기, 콜백 지옥체험
'use strict';
// 1. 동기와 비동기 / 콜백함수
// JavaScript is synchronous (동기적인)
// Execute the code block in order after hoisting
// hoisting: var, function declaration(함수의 선언) 자동적으로 제일 위로 올라가는것
// 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); //비동기
console.log('3'); // 동기

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello')); //동기

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); //비동기

/*================================================================================ */
//2. Callback Hell example (콜백 지옥 체험)
class UserStorage {
  //loginUser 함수
  //아이디, 패스워드 받아와서 로그인 정상적으로 이루어졌다면 onSuccess라는 콜백함수를 사용자의 데이터와 함께 호출
  //로그인 실패 or 네트워크 문제있는 에러 발생하면 onError라는 콜백함수 호출

  loginUser(id, password, onSuccess, onError) {     
    setTimeout(() => { 
      if (
        (id === 'junhyun' && password === 'dream') || 
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id)
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  
  //getRoles 함수
  //사용자의 데이터를 받아서 사용자마다 가지고 있는 역할들을 
  //서버에 다시 요청해서 정보를 받아오는 api가 있다고 생각 

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'junhyun') {
        onSuccess({ name: 'junhyun', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage(); //userStorage 클래스 생성
const id = prompt('enter your id'); // 브라우저 api인 prompt
const password = prompt('enter your password');

userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  }, 
  error => {console.log(error)}
);
// 콜백 체인의 문제점