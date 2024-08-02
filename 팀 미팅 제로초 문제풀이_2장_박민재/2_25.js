// p.178
const array = [null, 'hello', null, undefined, false];
let bol = false;
for(let i=0; i<array.length; i++){
  if(array[i] === null){
    bol =true;
    break;
  }
}
console.log(bol);