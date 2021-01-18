let Persona = {
    nombre: "Ricardo",
    apellido: "Altamirano",
    //edad: 25,
    //Hombre: true,
    getInformacion() {
        return `nombre ${ nombre }, apellido ${apellido }, edad ${edad }, Hombre ${Hombre }`
    },
};






console.log(Persona.getInformacion());