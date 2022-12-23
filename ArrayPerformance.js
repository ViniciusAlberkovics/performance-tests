// https://stackoverflow.com/questions/48865710/spread-operator-vs-array-concat
let big = (new Array(1e5)).fill(99);
let i, x;

console.time('concat-big');
for(i = 0; i < 1e2; i++) x = [].concat(big)
console.timeEnd('concat-big');

console.time('spread-big');
for(i = 0; i < 1e2; i++) x = [...big]
console.timeEnd('spread-big');


let a = (new Array(1e3)).fill(99);
let b = (new Array(1e3)).fill(99);
let c = (new Array(1e3)).fill(99);
let d = (new Array(1e3)).fill(99);

console.time('concat-many');
for(i = 0; i < 1e2; i++) x = [1,2,3].concat(a, b, c, d)
console.timeEnd('concat-many');

console.time('multi-concat');
for(i = 0; i < 1e2; i++) x = [1,2,3].concat(a).concat(b).concat(c).concat(d)
console.timeEnd('multi-concat');

console.time('spread-many');
for(i = 0; i < 1e2; i++) x = [1,2,3, ...a, ...b, ...c, ...d]
console.timeEnd('spread-many');