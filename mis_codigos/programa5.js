let Persona = {
    nombre: "Ricardo",
    Masculino: true,
    Edad: 25,
    getInformacion: function() {
        return ` El nombre ${this.nombre}, La edad${this.Edad}, Es hombre${this.Masculino}`;
    }
};

let { nombre: yo, Masculino: o } = Persona;
console.log(Persona.getInformacion());
console.log(yo, o);
let saludar = () => "Hola Mundo";
console.log(saludar());