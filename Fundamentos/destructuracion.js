let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return ` ${this.nombre}  ${this.apellido} - poder : ${this.poder}`
    }
};
console.log(deadpool.getNombre());
let { nombre: nuevonombre, apellido, poder } = deadpool;
console.log(nuevonombre, apellido, poder);