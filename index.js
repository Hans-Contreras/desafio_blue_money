//Desafío Cotiza con Blue Money - Hans Contreras

//Importando modulos
const https = require("https");
const fs = require('fs');
//Mediante el método permite eliminar los dos primeros objetos de nuestro array argumentos
const argumentos = process.argv.slice(2);

//1. Recibir por la línea de comando los siguientes argumentos:
//a. Nombre del archivo que se creará.
//b. Extensión del archivo.
//c. Indicador económico que se desea convertir.
//d. Cantidad de pesos que se quiere cambiar.

let nombre = String(argumentos[0]);
let extension = String(argumentos[1]);
let indicador = String(argumentos[2]);
let cantidad = Number(argumentos[3]);

//Mediante consola se verifican los argumentos

console.log(nombre);
console.log(extension);
console.log(indicador);
console.log(cantidad);

// 2. Consultar la API con el módulo https y almacenar la respuesta en una variable.
https
    .get("https://mindicador.cl/api", (resp) => {
        //usar el metodo on dek parametro recibido en el callaback
        let data = "";
        resp.on("data", (chunk) => {
            //console.log(chunk)
            data += chunk;
        });
        resp.on("end", () => {
            //console.log("Body:", JSON.parse(data));
            let indicadores = JSON.parse(data);
            //console.log(indicadores)
            Object.entries(indicadores.dolar).forEach(([key, value]) => {
            //console.log(value);
            });

            let valorDolar = indicadores.dolar.valor;
            console.log(valorDolar);

            let convertidor = cantidad / valorDolar;
            console.log(convertidor);

            let fecha = new Date();
            console.log(fecha);

            let contenido = `
            A la fecha: ${fecha}
            Fue realizada cotización con los siguientes datos:
            Cantidad de pesos a convertir: ${cantidad} pesos
            Convertido a "${indicador}" da un total de: ${convertidor}
            `;

//3. Crear un archivo con el módulo fs cuyos datos están formados por los argumentos recibidos 
//por línea de comando y su contenido basado en el template de la descripción.

//4. Enviar por consola el contenido del archivo luego de que haya sido creado.

            // fs.writeFile(file, data[, options], callback)
            fs.writeFile(`${nombre}.${extension}`, `${contenido}`, "utf8", () => {
                console.log(`Cotización: \n${contenido} `)
                console.log("Archivo creado con exito");
            });
        });
    })
    .on("error", (err) => {
        console.log("Error: " + err.message);
    });
