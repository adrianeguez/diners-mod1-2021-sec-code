const express = require('express')
const app = express()
const port = 3000
const getRawBody = require('raw-body')
const contentType = require('content-type')
const Joi = require('joi');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post(
    '/', 
    (req, res)=>{
        req.params // parametros ruta Ej: '/usuario/:idUsuario/cuenta-bancaria/:idCuenta'
        req.body // { "nombre":"Adrian", "apellido":"Eguez"  } JSON TEXTO PLANO .........
        req.query // POST http://localhost:3000/?edad=32&correo=a@a.com
        const schemaValidacion = Joi.object({
            nombre: Joi
                        .string()
                        .alphanum()
                        .min(3)
                        .max(10),
            apellido: Joi
                        .string()
                        .alphanum()
                        .min(3)
                        .max(10)
                        .required(),
        })
        const valores = {
            nombre: req.headers.nombre,
            apellido: req.headers.apellido,
        };
        schemaValidacion
        .validateAsync(valores)
        .then(
            ()=>{
                res.send('Datos validos');
            }
        )
        .catch(
            (error)=>{
                console.error(error);
                res.status(400).send('Error validando datos');
            }
        )
    }
)
app.get(
    '/', 
    (req, res)=>{
        res.send('Hola mundo GET')
    }
)
app.listen(port, ()=>{0
    console.log('App levantada en el puerto ', port)
})


/*
app.use( // middleware 
    (req, res, next)=>{
        if(!['POST', 'PUT', 'DELETE'].includes(req.method)){
            next()
            return
        }
        console.log()
        getRawBody(
            req, // peticion request
            { // configuracion
            length: req.headers['content-length'],
            limit: '10Mb',
            encoding: contentType.parse(req).parameters.charset
            },
            (err, string)=>{ // callback
                if(err) return next(err)
                req.text = string
                next()
            }
        )
    }
)
*/
// 04-nestjs/ 

// $ nest new diners
// $ cd diners
// $ npm run start

// PUERTO http://localhost:3000/









