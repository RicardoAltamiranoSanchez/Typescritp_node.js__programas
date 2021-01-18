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

let getEmpleados = (id, callback) => {
    let empleadoBD = empleados.find(empleado => empleado.id === id)
    console.log(empleadoBD);
    if (!empleadoBD) {
        console.log(`No existe el id ${id} de este empleado`);

    } else {
        callback(null, empleadoBD);
    }

}
let getSalarios = (empleado, callback) => {
    let salarioBD = salario.find(sal => salario.id === empleado.id);
    if (!salarioBD) {
        callback(null, `No se encontro salario para este usuario$ ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleados.nombre,
            salario: salarioBD.sueldo,
            id: empleados.id
        });
    }
}
getEmpleados(1, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalarios(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        };

        console.log(`El salario de la persona  ${resp.salario},el nombre  ${resp.nombre},el id  ${resp.id}`);


    });
});
/*nombre: melisa
salario: 3000:
    no se encontro un salario para este usuario */