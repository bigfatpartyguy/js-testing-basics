const Module = require('../main.js');

// Try to simulate simplest test framework functionality
const ok = String.fromCodePoint(10003);
const fail = String.fromCodePoint(10005);

// First test case
function firstTest() {
  const expected = 10;
  const a = 7;
  const b = 3;

  const res = Module.sum(a, b);

  try {
    if (res === expected) {
      console.log(`   ${ok} ${a} + ${b} is ${res}`);
    } else {
      throw new Error(`   ${fail} expected ${expected}, instead got ${res}`);
    }
  } catch(e) {
    console.log(e.message);
  }
}
firstTest();

// Second test case
function secondTest() {
  const expected = 6;
  const a = 10;
  const b = 4;

  const res = Module.subtract(a, b);

  try {
    if (res === expected) {
      console.log(`   ${ok} ${a} - ${b} == ${res}`);
    } else {
      throw new Error(`   ${fail} expected ${expected}, instead got ${res}`);
    }
  } catch(e) {
    console.log(e.message);
  }
}
secondTest();