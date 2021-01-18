let persona = {
    nombre: "Ricardo",
    Edad: 24,
    getInformacion: function() {
        console.log(
            `nombre ${this.nombre}, Edad ${this.Edad}`);
        return this;
    },
    getSaludar: function() {
        console.log("hola");
        return this;
    }
};
persona.getInformacion().getSaludar();