// 5. callback example을 promise로 이쁘게 바꿔줌

//Callback Hell example (콜백 지옥 체험)
class UserStorage {
  //loginUser 함수
  //아이디, 패스워드 받아와서 로그인 정상적으로 이루어졌다면 onSuccess라는 콜백함수를 사용자의 데이터와 함께 호출
  //로그인 실패 or 네트워크 문제있는 에러 발생하면 onError라는 콜백함수 호출

  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'junhyun' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id)
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  //getRoles 함수
  //사용자의 데이터를 받아서 사용자마다 가지고 있는 역할들을 
  //서버에 다시 요청해서 정보를 받아오는 api가 있다고 생각 

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'junhyun') {
          resolve({
            name: 'junhyun',
            role: 'admin'
          });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage(); //userStorage 클래스 생성
const id = prompt('enter your id'); // 브라우저 api인 prompt
const password = prompt('enter your password');
userStorage.loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);