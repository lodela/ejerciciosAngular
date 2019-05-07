const Math = new Object;

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

Math.suma       = suma;
Math.resta      = resta;
Math.multiplica = multi;
Math.divide     = divide;

module.exports = Math;
