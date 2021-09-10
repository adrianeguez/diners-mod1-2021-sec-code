// 05-promesas.js 
const fs = require('fs');

let contenidoCompleto = '';
leerArchivo('./01-variables.js')
    .then( // try de promera leerArchivo('./01-variables.js')
        (datos)=>{
            console.log('Datos 1er archivo: ', datos);
            console.log('Termino 1er promesa');
            contenidoCompleto = contenidoCompleto + datos;
            return leerArchivo('./01-variables-typescript.ts');
        }
    )
    .then( // try de promera leerArchivo('./01-variables-typescript.ts')
        (datos)=>{
            console.log('Datos 2do archivo: ', datos);
            console.log('Termino 2da promesa');
            contenidoCompleto = contenidoCompleto + datos;
            console.log(contenidoCompleto);
        }
    ) // 04-ejercicio-promesas.txt
    .catch( // catch
        (error)=>{
            console.log('Error: ', error);
        }
    );

























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


































