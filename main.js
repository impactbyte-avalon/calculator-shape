/************** LEVEL 0 & 1 ***************/
function luasPersegiPanjang(height, width) {
	return height * width;
}

console.log(luasPersegiPanjang(9, 6));

/******************************************************/
function luasLingkaran(jarijari) {
	return Math.PI * Math.pow(jarijari, 2);
}
console.log(luasLingkaran(8));

/******************************************************/
function volumeKubus(panjang, lebar, tinggi) {
	return panjang * lebar * tinggi;
}
console.log(volumeKubus(8, 6, 9));

/******************************************************/
function volumeTabung(jarijariTabung, tinggiTabung) {
	return Math.PI * Math.exp(jarijariTabung) * tinggiTabung;
}
console.log(volumeTabung(4, 9));



/************* LEVEL 2 ********************/
function multipleFunction (x, y) {
	var x = luasPersegiPanjang();
	var y = luasLingkaran();

	return x * y;
}
