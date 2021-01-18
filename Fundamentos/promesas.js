let empleados = [{
    id: 1,
    nombre: "Ricardo"

}, {
    id: 2,
    nombre: "Juan"
}, {
    id: 3,
    nombre: "javier"

}];
let salario = [{
    id: 1,
    sueldo: "10000"
}, {
    id: 2,
    sueldo: "20000"
}];
let getEmpleados = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoBD = empleados.find(empleado => empleado.id === id)
        console.log(empleadoBD);
        if (!empleadoBD) {
            reject(`No existe el id ${id} de este empleado`);

        } else {
            resolve(empleadoBD);
        }

    });
}
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
            let salarioBD = salario.find(salarios => salario.id === empleados.id)
            if (!salarioBD) {
                reject(`no existe el salario de este empleado`);
            } else {
                resolve({
                    salar: salarioBD.sueldo,
                    nombre: empleados.nombre,
                    id: empleados.id
                });
            }
        }

    );
}
getEmpleados(3).then(empleado => {
    console.log(err);

    getSalario(empleado).then(trabajador => {
        console.log(`El nombre de ${trabajador.nombre} su salario es ${trabajador.salar}`);

    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});