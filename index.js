//level1

function cubeArea(x) { //luas kubus
  return x * x * 6;
}

console.log(cubeArea(3));

function cubeVolume(x) { // volume kubus
  return x * x * x;
}

console.log(cubeVolume(3));

function squareArea(x) { // luas persegi
  return x * x;
}

console.log(squareArea(5));

function squareParameter(x) { // keliling persegi
  return x * 4;
}

console.log(squareParameter(55));



function circleArea(x) { // luas lingkaran
  return 3.14 * (x ** 2);
}

console.log(circleArea(50));

function circleCircumference(x) { // keliling lingkaran
  return 2 * 3.14 * x;
}

console.log(circleCircumference(6));

function tubeArea(x, y) { // luas tabung
  return (2 * 3.14 * x) * y;
}

console.log(tubeArea(5, 4));

function tubeVolume(x, y) { //volume tabung

  return 3.14 * x ** 2 * y;
}
console.log(tubeVolume(10, 20));

//level2
var result = squareArea(8)


console.log(result + tubeArea(5, 4));

var result2 = circleArea(10)

console.log( result2);
