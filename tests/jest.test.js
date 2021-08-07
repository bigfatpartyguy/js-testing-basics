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

// Test async functionality

test('adds 4 + 7 to equal 11', async () => {
  const a = 4;
  const b = 7;
  const expected = 11;

  const res = await Module.sumSync(a, b);

  expect(res).toBe(expected);
});

test('subtract 12 from 37 to equal 25', async () => {
  const a = 12;
  const b = 37;
  const expected = 25;

  const res = await Module.subtractSync(a, b);

  expect(res).toBe(expected);
})