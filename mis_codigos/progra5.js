let arreglo = [];

let nombre = function([], nombre, edad) {
    arreglo[0] = nombre;
    arreglo[1] = edad;

    console.log(`nombre ${arreglo[0]} edad ${arreglo[1]}`);

}
nombre(arreglo, "Ricardo", 25).toUpperCase();

console.log(arreglo[0]);
console.log(arreglo[1]);