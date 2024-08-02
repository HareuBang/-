// p.149
// 답: 23
const hof = (a) => (b) => (c) => {
  return a + (b * c);
}
const first = hof(3);
const second = first(4);
const third = second(5);
console.log(third);