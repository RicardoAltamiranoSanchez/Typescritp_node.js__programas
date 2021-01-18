let Empleados = [{

    nombre: "Ricardo",
    id: 1,
}, {
    nombre: "Rodrigo",
    id: 2,
}, {
    nombre: "fernando",
    id: 3,
}];
let Salarios = [{
    sueldo: 30000,
    id: 1,
}, {
    sueldo: 20000,
    id: 2,
}];
let getEmpleados = (id) => {
    return new Promise((resolve, reject) => {
        let empleado = Empleados.find(empleado => empleado.id === id);
        if (!empleado) {
            reject("Este id no existe ");
        } else {

            resolve(empleado);
        }
    })


}
let getSalarios = (empleado) => {
    return new Promise((resolve, reject) => {
        let S = Salarios.find(salarios => salario.id === Empleados.id);
        if (!S) {
            reject("No existe salario para este id");

        } else {
            resolve({
                nombre: empleado.nombre,
                salario: S.sueldo,
                id: S.id,

            });
        }
    })

}
getEmpleados(2).then(empleado => {

    getSalarios(empleado).then(res => {
        console.log(`El nombre ${res.nombre}\n Salario ${res.salario}`);
    }, (err) => console.log(err))

}, (err) => console.log(err))