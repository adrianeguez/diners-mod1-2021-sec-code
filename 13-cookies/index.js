// npm install express
// npm install express-session

const express = require('express')
const app = express()
const port = 3000
const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
    key: 'cookieName',
    cookie: { 
        secure: false, // true no setea por seguridad
        httpOnly: false,  // true no setea por seguridad
        path: '/', 
        sameSite: false // true no setea por seguridad
    }
}));

app.get(
    '/', 
    (req, res)=>{
        res.send('Hola mundo GET')
    }
)
app.listen(port, ()=>{0
    console.log('App levantada en el puerto ', port)
})
