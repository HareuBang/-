// p.164
const a = {
  name: '강아지',
};
const b = a;
const c = b;

a.name = "고양이";
console.log(`b.name ${b.name} c.name ${c.name}`);