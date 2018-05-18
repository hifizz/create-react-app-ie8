// symbol
const symbol_abc = Symbol('abc');
console.log("Symbol test is OK.", symbol_abc);

// Set
const Set_abc = new Set(['1','2','3']);
console.log("Set test is OK.", Set_abc);

// async/await

async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log("Await/async test is ok!", value);
}

asyncPrint('async print', 50);

// Decorators

function testable(target) {
  target.isTestable = true;
}

@testable
class MyTestableClass {
  // do stuff
}

console.log("decorators test is ok! This is cool!", MyTestableClass.isTestable);

// ES8 includes

let arr = ['react', 'angular', 'vue']

// Correct
if (arr.includes('react')) {
  console.log("ES8 API: array.includes test is ok!", 'Can use React')
}

//
let str = 'React Quickly'

// Correct
if (str.toLowerCase().includes('react')) {  // true
  console.log("ES8 API: string.includes test is ok!", 'Found "react"')
}


let a = 7
a **= 12
let b = 2
b **= 7
console.log(a === Math.pow(7,12)) // true
console.log(b === Math.pow(2,7)) // true

let obj = {a: 1, b: 2, c: 3}
Object.values(obj).forEach(value=>console.log(value)) // 1, 2, 3
console.log('ES8 API: Object.values test is OK!');

console.log('react'.padStart(10).length, "ES8 API: string.padStart test is ok!");

var f = function(a,
  b,
  c,
  d) { // NO COMMA!
  // ...
  console.log(d)
}
f(1,2,3,'this')

function ex() {
  console.log('I am the exporter');
}

export default ex;
