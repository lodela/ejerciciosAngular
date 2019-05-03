function suma(a, b) {
  return a + b;
};
function resta(a, b) {
  return a - b;
};
function multi(a, b) {
  return a * b;
};
function divide(a, b) {
  if (b === 0) {
    console.log('no se puede dividir por cero');
    return;
  } else {
    return a / b;
  }
};

exports.suma   = suma;
exports.resta  = resta;
exports.multi  = multi;
exports.divide = divide;
