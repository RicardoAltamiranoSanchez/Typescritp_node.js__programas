const argv = require('yargs').command('crear', 'Crea un elemneto por hacer', {
    descripcion: {
        demand: true,
        alias: 'd',
        descr: 'Se crear una nueva tarea por hacer',
    }

}).
command('actualizar', "Actuliaza las nuevas tareas", {

    completado: {
        default: true,
        alias: 'c',
        descr: "Actualiza las tarea terminadas o pendientes",
    }
}).help().argv;
module.exports = {
    argv
}