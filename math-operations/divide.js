module.exports = (a, b) => {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  };