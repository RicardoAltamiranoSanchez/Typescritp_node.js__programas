let Empleados = (id, nombre, callback) => {
    let Usuario = {
        nombre: nombre,
        id: id,
        sueldo: 20000
    };
    if (id === 10) {
        callback("No esxiste este usuario ");
    } else {
        callback(null, Usuario);
    }
}
Empleados(2, "ricardo", (err, Usuario) => {
    if (err) {
        return console.log(err);
    } else {
        console.log(`El Nombre ${Usuario.nombre} su Sueldo  ${Usuario.sueldo}`);
    }


});