// npm install express
// npm install hpp

const express = require('express')
const app = express()
const port = 3000

const hpp = require('hpp');
app.use(hpp());



app.get(
    '/', 
    (req, res)=>{
        console.log(req.query);
        // consulta usuario BDD
        const usuario = {
            nombre: 'Adrian',
            apellido: 'Eguez',
            username: 'adrianeguez',
            passwordEncriptada: '123123',
            cuentasBancarias: [ 
                { 
                    codigoCajeroEncriptado: 'ABCD',
                    numeroCuenta: '1010101010'
                } 
            ]
        };
        const respuestaJson = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            cuentas: usuario.cuentasBancarias.map((d)=> d.numeroCuenta),
        }
        
        res.send(JSON.stringify(respuestaJson))
    }
)
app.listen(port, ()=>{0
    console.log('App levantada en el puerto ', port)
})
