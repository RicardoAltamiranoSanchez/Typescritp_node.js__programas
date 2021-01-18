let Empleados = [{
    nombre: "Ricardo",
    edad: 25,
    codigo: 1,

}, {
    nombre: "Rodrigo",
    edad: 19,
    codigo: 2,
}, {
    nombre: "Fernando",
    edad: 25,
    codigo: 3
}];
let Salarios = [{
    sueldo: 30000,
    codigo: 1,
}, {
    sueldo: 2000,
    codigo: 2
}];
getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleado2 = Empleados.find(empleado => empleado.codigo === id);
        if (!empleado2) {
            reject(`No existe este id ${id}`);
        } else {
            resolve(empleado2);
        }
    })
}
getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salariod = Salarios.find(salarios => Salarios.codigo === Empleados.codigo);
        if (!salariod) {
            reject(`No existe Salario para este usuario ${empleado.codigo}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                edad: empleado.edad,
                sueldo: salariod.sueldo,
            });
        }

    })


}
getEmpleado(2).then(empleado => {

    return getSalario(empleado);

}).then(res => {
    console.log(`Nombre ${res.nombre}\n Edad ${res.edad}\n Salario ${res.sueldo}`);
}).catch(err => {
    console.log(err);
});