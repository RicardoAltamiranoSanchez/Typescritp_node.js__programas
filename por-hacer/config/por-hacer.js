const fs = require('fs');
let lista_por_hacer = [];
const baseBD = () => {
    let data = JSON.stringify(lista_por_hacer);
    fs.writeFile(`data/data.json`, data, (err) => {
        if (err) { throw new Error("No se pudo guardar", err); }


    });
}
const crear = (descripcion) => {

    let porhacer = {
        descripcion,
        completado: false,


    };

    lista_por_hacer.push(porhacer);
    baseBD();
    return porhacer;

}
module.exports = {
    crear
}