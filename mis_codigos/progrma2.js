let division = (n1, n2) => {


    try {

        if (n2 === 0) {
            throw new Error("No se puede dividir entre cero");
        } else {
            let n3 = n1 / n2;
            return n3;
        }




    } catch (e) {

        console.log("name" + e);

    };


}
let numero1 = 10;
let numero2 = 10;
let re = division(numero1, numero2);
console.log(re);