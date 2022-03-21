//Desafío Cotiza con Blue Money - Hans Contreras

//5. Ejecutar la aplicación desde un archivo externo con el módulo child_process
//enviando los argumentos correspondientes y devolviendo por consola el contenido
//del archivo luego de que haya sido creado.

// Importando el Módulo child_process
// El módulo child_process nos permite ejecutar procesos como si se tratara de una terminal
// o una consola de un sistema operativo

// El método .exec ejecuta una linea de comando
var ejecutarProceso = require('child_process').exec
ejecutarProceso('node index.js cotizacion txt dolar 250000', function (err, stdout, stderr) {
  console.log(stdout)
});
