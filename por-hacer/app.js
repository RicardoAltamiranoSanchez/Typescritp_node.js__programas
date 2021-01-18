//const argv = require('yargs').argv;

const argv = require('./config/yargs.js').argv;
const hacer = require('./config/por-hacer.js');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let por_hacer = hacer.crear(argv.descripcion);
        console.log(por_hacer);
        break;
    case 'listar':
        console.log("Enlistando las tares por hacer");
        break;
    case 'actualizar':
        console.log("Actualizando las tareas por hacer");
        break;
    default:
        console.log("No existe este comando");
        break;
}