// npm install express
// npm install csurf

const express = require('express')
const app = express()
const port = 3000

const csrf = require('csurf');
csrfProtection = csrf({ cookie: true });

app.get(
    '/', 
    csrfProtection, // middlaware de esta ruta
    (req, res)=>{
        res.send('Hola mundo GET', { csrfToken: req.csrfToken() })
    }
)

// app.post('/algo', 'formulario', csrfProtection, ()=> .... )


app.listen(port, ()=>{
    console.log('App levantada en el puerto ', port)
})