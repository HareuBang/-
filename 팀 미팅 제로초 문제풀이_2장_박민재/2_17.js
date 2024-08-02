// p.165
const a = 'b';
const c = ['d', true, 1];
const e = {g: 'h'};
const i = [{j: 'k'}, {l: 'm'}];
const n = {o: {p: 'q'}};

const b = a;

const d = [...c];
c[1] = false;
console.log(d);

const g = {...e};
e.g = 'false';
console.log(g);

const j = JSON.parse(JSON.stringify(i));
i[0].j = 'false';
console.log(j);

const o = JSON.parse(JSON.stringify(n));
n.o.p = 'false';
console.log(o);