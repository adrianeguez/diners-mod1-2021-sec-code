// npm install express express-rate-limit

// npm i express
// npm i express-rate-limit

const express = require('express')
const rateLimit = require("express-rate-limit");
const app = express()
const port = 3000

const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 4
  });

app.use(apiLimiter);

app.get(
    '/', 
    (req, res)=>{
        res.send('Hola mundo GET')
    }
)   

app.listen(port, ()=>{
    console.log('App levantada en el puerto ', port)
})