// p.174
const find = (array, callback) => {
  for(let i=0; i<array.length; i++){
    if(callback(array[i], i)){
      console.log(array[i]);
      return;
    }
  }
};
find([1, 3, 5, 7], (v, i) => v > 1 );

// find([1, 3, 5, 7], (v, i) => { v > 1 });
/* 
중괄호 사용 시 반환 값 명시 필요: 중괄호 {}를 사용하면 함수 본문을 여러 줄로 작성할 수 있습니다. 이 경우 return 문을 사용하여 값을 반환해야 합니다. 그렇지 않으면 함수는 기본적으로 undefined를 반환하게 됩니다.

중괄호와 return의 차이:
단일 표현식 (괄호 없이): callback(array[i], i) => v > 1은 단일 표현식으로 간주되며, 그 표현식의 결과가 자동으로 반환됩니다.
중괄호 사용: callback(array[i], i) => { return v > 1; }처럼 중괄호를 사용하면 return 문을 명시적으로 추가해야 합니다.
*/
