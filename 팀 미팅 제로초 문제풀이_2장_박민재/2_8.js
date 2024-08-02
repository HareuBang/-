// p.117
for(let i=2; i<=9; i++){
  for(let j=1; j<=9; j++){
    let mul = i * j;
    if(mul % 2 !== 1)
      continue;

    console.log(`${i} X ${j} = ${mul}`);
  }
}