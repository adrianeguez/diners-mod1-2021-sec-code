const express = require('express')
const app = express()
const port = 3000
const getRawBody = require('raw-body')
const contentType = require('content-type')

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
            limit: '1b',
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













app.get(
    '/', 
    (req, res)=>{
        res.send('Hola mundo GET')
    }
)
app.post(
    '/', 
    (req, res)=>{
        res.send('Hola mundo POST')
    }
)
app.listen(port, ()=>{
    console.log('App levantada en el puerto ', port)
})


