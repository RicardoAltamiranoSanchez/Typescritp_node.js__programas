/*let getNombre = async() => {
    return 'Ricardo';
};*/
let getNombre = () => {
    return new Promise((resolver, reject) => {

        setTimeout(() => {
            resolver('Ricardo');
        }, 3000);
    });
}
let saludo = async() => {
    let nombre = await getNombre();
    return `hola ${nombre}`;
}
getNombre().then(nombre => {

    console.log(nombre);

}).
catch(err => {
    console.log("El error", err);

});