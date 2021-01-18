let Informacion = (codigo, callback) => {
    let Persona = {
        nombre: "Ricardo",
        sueldo: 20000,
        carreara: "Ingenieria",
        codigo

    };
    if (codigo === 3) {
        callback(`Este usuario no existen ${codigo}`)

    } else {
        callback(null, Persona);


    }

}
try {
    Informacion(3, (err, Persona) => {
        if (err) {
            return console.log(err);
        } else {
            console.log("El usuario es", Persona);
        }


    });
} catch (error) {
    console.log(error);

}