// p.132
const arr = ['가','라','다','라','마','라'];

let idx;
while((idx = arr.indexOf('라')) !== -1){
  arr.splice(idx, 1);
}
console.log(arr);