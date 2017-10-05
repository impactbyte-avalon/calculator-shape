//Level0
//Prepare all basic shape calculation you already learnt


//Level 1


//calculateSquareArea
function luasPersegi(tinggi, lebar) {
  return tinggi * lebar;
}
console.log(luasPersegi(10, 10));

//calculateSquarePerimeter
function kelilingPersegi(tinggi, lebar) {
  return 2 * (tinggi + lebar);
}
console.log(kelilingPersegi(10, 10));

//calculateCircleArea
function luasLingkaran(jarijari) {
  return Math.PI * Math.pow(jarijari,2);
}
console.log(luasLingkaran(7));

//calculateCircleCircumference
function kelilingLingkaran(diameter) {
  return Math.PI * diameter;
}
console.log(kelilingLingkaran(14));

//calculateCubeArea
function luasKubus(tinggi, lebar) {
  return 6 *(tinggi, lebar);
}
console.log(luasKubus(10,10));

//calculateCubeVolume
function volumeKubus(panjang) {
  return Math.pow(panjang, 3);
}
console.log(volumeKubus(10));


//calculateTubeArea
function luasTabung(jarijari, tinggi) {
  return (2 * Math.PI * jarijari * tinggi) + (2 * Math.PI * Math.pow(jarijari,2));
}
console.log(luasTabung(7,10));

//calculateTubeVolume
function volumeTabung(jarijari, tinggi) {
  return Math.PI * Math.pow(jarijari,2) * tinggi;
}
console.log(volumeTabung(7,10));

//Level 2
//calculateSquareArea()
function calculateSquareArea(add(...)) {

}
console.log();

//calculateTubeVolumeWithCircle(calculateCircleArea())
function calculateTubeVolumeWithCircle(calculateCircleArea()) {

}
console.log();
