//funcion normal
/*function suma(a,b){
    return a+b;
}*/
//funcion de flecha
/*let sumar = (a, b) => {
    return a + b;
}*/
//let sumar=(a,b)=> a+b;
/*function saludar(){
    return "Hola mundo";
}*/
//let saludar = () => "Hola mundo";
//console.log(saludar());
let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return ` ${this.nombre}  ${this.apellido} - poder : ${this.poder}`
    }
};

//console.log(sumar(10, 20));