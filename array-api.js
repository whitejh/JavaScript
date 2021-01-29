// 9. 유용한 10가지 배열 함수들. Array APIs 총정리
'use strict';

// Q1. make a string out of an array (배열을 문자열로 변환)
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(','); //괄호 안은 구분자
  console.log(result); // apple,banana,orange 출력
}
// join : 배열 원소 전부를 하나의 문자열로 합친다


// Q2. make an array out of a string (문자열을 배열로 변환)
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); // , 단위로 문자열을 나눔
  console.log(result);
}
// split : 문자열을 구분자로 잘라서 배열로 변환
// string.split(separator, limit)

// Q3. make this array look like this: [5, 4, 3, 2, 1] (주어진 배열을 거꾸로 순서로 만듦)
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); //5, 4, 3, 2, 1
  console.log(array);  //5, 4, 3, 2, 1 (reverse는 배열 자체를 바꾸고 리턴함)
}
// reverse : 배열의 원소 순서를 거꾸로 바꾼다

// Q4. make new array without the first two elements (배열의 첫,두번째 요소 제외한 새로운 배열 만들기)
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // 시작인덱스부터 (끝인덱스 - 1)까지 잘라서 사용
  console.log(result); // 3, 4, 5 출력 ([2]~[4])
  console.log(array);  // 1, 2, 3, 4, 5 출력
}
// slice : 배열에서 원하는 부분만 리턴해서 받아오고 싶을 때 사용
// cf) splice : 배열 자체를 수정하는 것

///////////////////////////////////////////////////////////
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// {
//   const result = students.find(function (student, index) {
//     return student.score === 90;
//   });
// }

{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}
// find : 

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
// filter : 

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}
// map : 새로운 배열 return 

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result); //some : 하나라도 조건만족하면 true

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);// every : 모든 조건 만족하면 true
}
console.clear();
// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
} // 어렵다....

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order (오름차순)
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // 오른차순 정렬 <-> .sort((a, b) => b - a) 내림차순 정렬
    .join();
  console.log(result);
}