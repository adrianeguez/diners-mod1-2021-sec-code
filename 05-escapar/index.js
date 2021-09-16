var escapeHtml = require('escape-html')

const datosUsuarioBDD = "Adrian Eguez<script>alert('Hola')</script>";

console.log('<p>' + datosUsuarioBDD + '</p>');

// HTML
// !style !script
// " ' & < >

console.log('<p>' + escapeHtml(datosUsuarioBDD) + '</p>')