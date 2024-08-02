// p.174
const filter = (array, callback) => {
  let arr = [];
  for(let i=0; i<array.length; i++){
    if(callback(array[i], i))
      arr.push(array[i])
  }
  console.log(arr);
  return;
};
filter([1, 3, 5, 7], (v, i) => v > 1);