const fs = require('fs');
console.log('Primero');
// leer archivo variables CONTENIDO_UNO
// leer archivo variables typescript (cualquir otro archivo) CONTENIDO_DOS
// escribir nuevo archivo 04-ejercicio.txt CONTENIDO_UNO + CONTENIDO_DOS
/* 
fs.readFile( // Asincrona
    './01-variables.js',
    'utf-8',
    (error, contenido) => {
        console.log('Error: ', error);
        console.log('Contenido: ', contenido);
        console.log('Segundo');
    }
);


fs.writeFile(
    './03-ejemplo.txt', // nombre archivo
    'HOLA MUNDO', // contenido archivo 
    'utf-8', // codificacion
    (error)=>{
        console.log('Erro: ', error);
    }
);
*/



fs.readFile( // Asincrona
    './01-variables.js',
    'utf-8',
    (error, contenidoUno) => { // funcion -> callback
        // seguros que leimos el primer archivo
        if(!error){
            fs.readFile( // Asincrona
                './01-variables-typescript.ts',
                'utf-8',
                (error, contenidoDos) => { // funcion -> callback
                    // seguros que leimos el sedundo archivo
                    if(!error){
                        fs.writeFile(
                            './04-ejercicio.txt', // nombre archivo
                            contenidoUno + contenidoDos, // contenido archivo 
                            'utf-8', // codificacion
                            (error)=>{
                                console.log('Erro: ', error);
                                console.log('YA SE CREO EL ARCHIVO CONCATENADO');
                            }
                        );
                    }
                }
            );
        }
    }
);











console.log('Tercero');