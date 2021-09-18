// 1) Errores comunes
// 2) Errores Asyncronos (promesas, callbacks) OK
// 3) Errores eventos OK

process.on("uncaughtException", (err) => {
    console.error({
        error: err,
        mensaje: 'Error intencional'
    })
    console.log('Logear datos necesarios...');
    console.log('limpiar recursos...');
    console.log('Terminar');
    process.exit();
});

throw new Error('ERROR 500');
