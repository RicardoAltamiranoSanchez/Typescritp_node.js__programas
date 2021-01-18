let numero1 = 2;
let numero2 = 2;
let opcion = true;


let suma = (n1, n2) => {
    return numero1 + numero2;
}
let resta = (n1, n2) => {
    return numero1 - numero2;
}
let multi = (n1, n2) => numero1 * numero2;
let div = (n1, n2) => numero1 / numero2;
let resu = (opcion) => false;

let getCalcu = (n1, n2) => {
    if (resu()) {
        console.log("la variable es falsa");
    } else {
        console.log(`la suma es ${suma()} \nla resta es ${resta()}\nla multiplicacion ${multi()}\nla division es ${div()}\n`);
    }
}

getCalcu(numero1, numero2);
let arreglo = [];
let arreglo2 = [];
let arreglo3 = [];
let numero5 = 20;
let numero = 10;


getCalcu(numero1, numero2);
for (let i = 1; i <= 10; i++) {
    arreglo[i] = numero * i;
    arreglo2[i] = numero5 * i;
}
for (let n = 1; n <= 10; n++) {


    console.log(`${arreglo[n]}  ,  ${arreglo2[n]}\n`);
}

for (let m = 1; m <= 10; m++) {
    arreglo[m] = arreglo[m] + arreglo2[m];
    console.log(`${arreglo[m]}`);
}