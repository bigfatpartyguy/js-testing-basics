const Module = {
  sum(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  // Imitate async calls
  sumSync(...args) {
    return Promise.resolve(this.sum(...args));
  },
  subtractSync(...args) {
    return Promise.resolve(this.subtract(...args));
  }
};

module.exports = Module;