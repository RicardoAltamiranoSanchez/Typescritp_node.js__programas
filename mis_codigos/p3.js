let Empleados = [{

    nombre: "Ricardo",
    puesto: "Ingeniero",
    id: 1,

}, {
    nombre: "Rodrigo",
    puesto: "Supervisor",
    id: 2,

}, {
    nombre: "Fernando",
    puesto: "Encargado",
    id: 3
}];
let Salarios = [{
    sueldo: 30000,
    id: 1
}, {
    sueldo: 20000,
    id: 2,
}, {

    id: 3

}];
getEmpleado = (id, callback) => {
    let empleado = Empleados.find(empleado => empleado.id === id);
    if (!empleado) {
        callback("Error NO existe ese id de usuario");
    } else {
        callback(null, empleado)
    }
}
getSalario = (empleado, callback) => {
    let salario = Salarios.find(salario => salario.id === empleado.id);
    if (!salario.sueldo) {
        callback(`Error no existe salario para este id${salario.id}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            sueldo: salario.sueldo,
            id: salario.id,
            puesto: empleado.puesto,

        });
    }

}



getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        getSalario(empleado, (err, r) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Nombre ${r.nombre}\nPuesto ${r.puesto}\nSueldo ${r.sueldo} `);
            }
        });
    }

})