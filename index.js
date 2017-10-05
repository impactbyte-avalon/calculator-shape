function kotak(a,b){
    return a*b
}
console.log("luas kotak: "+kotak(3,3))

function perimeterkotak(a,b){
    return "keliling kotak: "+(a+b)*2
}
console.log(perimeterkotak(3,3))

function cubearea(a,b){
    return a*a*a
}
console.log("volume kubus: "+cubearea(3,3))

function tubearea(a,b){
    return "luas tabung: "+2*3.14*a*b
}
console.log(tubearea(2,3))

function tubevolume(a,b){
    return 3.14*((a/2)^2)*b
}
console.log("volume tabung: "+tubevolume(2,5))

function add (a,b){
    return a+b
}

console.log("volume tabung + kubus: " + add(cubearea(3,3),tubevolume(2,5)))