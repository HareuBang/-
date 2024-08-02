// p.178
const array = [null, 'hello', null, undefined, false];
let answer = array.some(val => val === null);
console.log(answer);