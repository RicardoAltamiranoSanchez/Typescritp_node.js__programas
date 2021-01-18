let arreglo = [];
let algo = (...arreglo) => {
    return arreglo.reduce((prev, post) =>
        prev + post) / arreglo.length;

}

console.log(algo(...[3, 3, 3]));
//Otro programa
let usuario = {
    numero: 4,
    numero2: 4,


    setNumero: function(n1) {
        this.numero = n1;
    },
    operacion: function() {
        console.log(this.numero * this.numero2);
    },


};

usuario.operacion();
//otro programa


let usuario2 = {
    nombre: function() {
        console.log("nombre");
    },
    apellido: function() {
        console.log("apellido");
    }
};
let persona = (usuario2) = {
    edad: function() {
        console.log("edad");
    }

};

//persona.nombre();
//pe.apellido();
usuario2.nombre();