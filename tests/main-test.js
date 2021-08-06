// Import test methods from testing framework
const {test, expect} = require('./testing-framework.js');
// Import module to test
const Module = require('../main.js');


test('adds 1 + 2 to equal 3', () => {
  const a = 1;
  const b = 2;
  const expected = 3;

  const res = Module.sum(a, b);

  expect(res).toBe(expected);
});

test('subtract 6 from 10 to equal 4', () => {
  const a = 10;
  const b = 6;
  const expected = 4;

  const res = Module.subtract(a, b);

  expect(res).toBe(expected);
});

