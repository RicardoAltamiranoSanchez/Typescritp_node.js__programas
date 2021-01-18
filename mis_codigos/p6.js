let Empleados = [{
    nombre: "Ricardo",
    codigo: 1,
}, {
    nombre: "Rodrigo",
    codigo: 2,
}, {
    nombre: "Fernado",
    codigo: 3,
}];
let Salario = [{
    codigo: 1,
    sueldo: 40000,
}, {
    codigo: 2,
    sueldo: 30000,
}];
getEmpleados = async(id) => {


    let empleadoDb = await Empleados.find(empleado => empleado.codigo === id);
    if (!empleadoDb) {
        throw new Error("No existe este id");
    } else {
        return empleadoDb;
    }
}
getSalario = async(empleado) => {

        let salarioBD = await Salario.find(salario => salario.codigo === empleado.codigo);
        if (!salarioBD) {
            throw new Error("No  hay salario para este usuario ");
        } else {
            return {
                nombre: empleado.nombre,
                salario: salarioBD.sueldo,
                id: empleado.codigo,
            };
        }

    }
    /*
    getEmpleados(4).then(empleado => {
        getSalario(empleado).then(res => {
            console.log(`Nombre ${res.nombre}\n Sueldo ${res.salario}`);
        }, (err) => {
            console.log(err);
        })

    }, (err) => {
        console.log(err);
    })*/
getInformacion = async(id) => {
    let empleado = await getEmpleados(id);
    let res = await getSalario(empleado);
    return `Nombre ${res.nombre} Sueldo ${res.salario}`;
}

getInformacion(2).then(mensaje => console.log(mensaje)).catch(err => console.log(err));