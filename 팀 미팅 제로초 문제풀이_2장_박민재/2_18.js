// p.166
const obj = {
  a: 'hello',
  b: {
    c: 'hi',
    d: {e: 'wow'},
  },
};

const {a, b} = obj;
console.log(a, b);
/*
  객체 그대로를 출력.(객체의 구조와 프로퍼티)
*/

// console.log("a: " +a + " b: " +b);
// console.log(`a: ${a} b: ${b}`);
/* 
 JS는 객체를 문자열로 반환하려고 할 때 기본적으로 `[object Object]`라는 문자열로 변환. 이는 객체가 toString() 메서드를 가지고 있으면 `[object Object]`를 반환하기 때문에.
 ${} 템플릿 리터럴은 객체를 문자열로 변환하려고 시도.
*/

console.log(`a: ${JSON.stringify(a)} b: ${JSON.stringify(b)}`);

const {c, d} = b;
const {e} = d;
console.log(`c: ${JSON.stringify(c)} d: ${JSON.stringify(d)} e: ${JSON.stringify(e)}`);