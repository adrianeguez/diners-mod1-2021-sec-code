// 05-promesas.js 
const fs = require('fs');

let contenidoCompleto = '';


// PROMESAS ASYNC AWAIT

// ASYNC AWAIT SOLAMENTE EN FUNCIONES! o METODOS de clases!

// 1) "async" antes de la declaracion de la funcion
// 2) usamos el "await" dentro de esta funcion, ANTES de la PROMESA

const ejecutarPromesaAsyncAwait = async () => {
    try {
        console.log('Primero');
        const respuestaPrimerArchivoLeido = await leerArchivo('./01-variables.js');
        const respuestaSegundoArchivoLeido = await leerArchivo('./01-variables-typescript.ts');
        await escribirArchivo(
            './04-ejercicio-async-await.txt', 
            respuestaPrimerArchivoLeido + respuestaSegundoArchivoLeido
            );
        // ./01-variables-typescript.ts
        // ./04-ejercicio-async-await.txt
        console.log('Tercero');
    } catch (error){
        console.log('Error: ', error);
    }
}

// SOLO PARA QUE FUNCIONE EL EJEMPLO ASYNC AWAIT
ejecutarPromesaAsyncAwait().then().catch();




/*
leerArchivo('./01-variables.js')
    .then( // try de promera leerArchivo('./01-variables.js')
        (datos)=>{
            console.log('Datos 1er archivo: ', datos);
            console.log('Termino 1er promesa');
            contenidoCompleto = contenidoCompleto + datos;
            return leerArchivo('./01-variables-typescript.ts'); // hace corra la 2da promesa
        }
    )
    .then( // try de promera leerArchivo('./01-variables-typescript.ts')
        (datos)=>{
            console.log('Datos 2do archivo: ', datos);
            console.log('Termino 2da promesa');
            contenidoCompleto = contenidoCompleto + datos;
            return escribirArchivo('./04-ejercicio-promesas.txt', contenidoCompleto)
        }
    ) // 04-ejercicio-promesas.txt
    .then(
        (datos)=>{
            console.log('Escribio el: ', datos);
        }
    )
    .catch( // catch
        (error)=>{
            console.log('Error: ', error);
        }
    );
*/





function promesaSaludo(mensaje){
    return new Promise(
        (resolve, reject) => {
            console.log(mensaje);
            resolve(); // return
            // reject(); // throw
        }
    );
}

/*
promesaSaludo('Adrian')
    .then( // try
        (datos)=>{
            console.log('Datos: ', datos);
            console.log('Termino promesa');
        }
    )
    .catch( // catch
        (error)=>{
            console.log('Error: ', error);
        }
    );
*/

function esPositivo(numero){
    return new Promise(
        (resolve, reject) => {
            if(numero > 0){
                resolve(true); // return
            }else{
                reject({ // throw
                    mensaje:'No es positivo',
                })
            }
        }
    );
}
/*
esPositivo(0)
    .then( // try
        (datos)=>{
            console.log('Datos: ', datos);
            console.log('Termino promesa');
        }
    )
    .catch( // catch
        (error)=>{
            console.log('Error: ', error);
        }
    );
*/


function leerArchivo(path){
    return new Promise(

        (resolve, reject) => {

            fs.readFile( // Asincrona
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        reject({ // throw
                            mensaje: 'Error leyendo archivo',
                            error: error
                        })
                    }else{ 
                        resolve(contenido); // return
                    }
                }
            );

        }

    );
}


function escribirArchivo(path, contenido){
    return new Promise(
        (resolve, reject) => {
            fs.writeFile( // Asincrona
                path,
                contenido,
                'utf-8',
                (error) => {
                    if(error){
                        reject({ // throw
                            mensaje: 'Error escribiendo archivo',
                            error: error
                        })
                    }else{ 
                        resolve({mensaje: 'Archivo escrito correctamente'}); // return
                    }
                }
            );
        }
    );
}



































