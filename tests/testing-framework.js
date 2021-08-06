// Try to simulate simplest jest framework functionality

// Just varialbes containing ✓ and ✕ characters
const ok = String.fromCodePoint(10003);
const fail = String.fromCodePoint(10005);

// Create a special error class for
// all matchers' errors
class ExpectationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ExpectationError';
  }
}

// Simulate jest test behavior
const test = function(description, cb) {
  try {
    cb();
    console.log(`${ok} ${description}`);
  } catch(e) {
    console.log(`${fail} ${description}\n`);
    console.log(`   ${e.name}:\n ${e.message}`);
  }
};


// Simulate jest expect behavior
// Here will all of the matchers be
const expect = function(received) {
  return {
    toBe(expected) {
      const error = new ExpectationError(`
    !received is not equal to expected
      Expected: ${expected}
      Received: ${received}
      `);
      if (!Object.is(received, expected)) throw error;
      return true;
    }
  }
};

module.exports = {test, expect};