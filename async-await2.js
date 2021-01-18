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
let getEmpleado = (id) => {

    let empleadoBD = empleados.find(empleado => empleado.id === id)
    if (!empleadoBD) {
        throw new Error(`No existe el id ${id} de este empleado`);

    } else {
        return empleadoBD;
    }


}
let getSalario = async(empleado) => {

    let salarioBD = salario.find(salario => salario.id === empleados.id)
    if (!salarioBD) {
        throw new Error(`no existe el salario de este empleado`);
    } else {

        return {
            salario = salarioBD.sueldo,
            nombre = empleado.nombre,
            id = empleado.id
        };
    }
}


let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let res = await getSalario(empleado);

    return `${res.nombre} Sueldo es ${res.salario}$`;
}
getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => consles.log(err));