// 01-variables.js

// Declarar variables

// Mutables -> = -> reasignadas

var variableUno = 1;
let variableDos = 2;
variableUno = 3;
variableDos = 3;

// Inmutables -> no = -> no reasignadas

const noPuedoCambiar = 1;
// noPuedoCambiar = "212";

// Tipos de variables

const numero = 1; // number
const sueldo = 1.2; // number
const texto = "Adrian"; // string
const apellido = 'Eguez'; // string
const booleanooo = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd")); // number
console.log(Number("asd")); // NaN


// Truty Falsy

if(true == true){
    console.log("Es verdadero"); //!
}else{
    console.log("Es Falso");
}

if(""){
    console.log("Es verdadero");
}else{
    console.log("Es Falsy"); //!
}
if("Adrian"){
    console.log("Es truty"); //!
}else{
    console.log("Es Falso");
}
if(-1){
    console.log("Es truty"); // Truty
}else{
    console.log("Es Falso");
}
if(0){
    console.log("Es truty");
}else{
    console.log("Es Falso"); // Falsy
}
if(1){
    console.log("Es truty"); // Truty
}else{
    console.log("Es Falso");
}

// JSON

const adrian = {
    nombre: "Adrian", // llave: valor,
    apellido: 'Eguez',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['Cachetes', 'Pequitas', 'Panda'],
}; // object

adrian.nombre; // "Adrian"
adrian["nombre"]; // "Adrian"
adrian.nombre = "Vicente";
if(adrian){ // Codificacion Defensiva
    if(adrian.ropa){
        console.log(adrian.ropa.color);
        console.log(adrian["ropa"]["color"]);
    }
}
console.log(adrian);
console.log(Object.keys(adrian)); // llaves
console.log(Object.values(adrian)); // valores

// Arreglos

const arreglo = [6, 7, 8, 9, 10];
const arregloTodo = [
    true, 1, 1.2, "Adrian", undefined, null, {}, [1, 2, true, "A"]
];

// for of (valores) 

for (let numero of arreglo) { // VALORES
    console.log('numero', numero);
}

// for in (indices)
for (let indice in arreglo) { // INDICES
    arreglo[indice];
    console.log('indice', indice);
}

// const arreglo =  [6, 7, 8, 9, 10];
arreglo.push(11); // Anadir al final un elemento
// [6, 7, 8, 9, 10, 11];
arreglo.pop(); // Eliminar al final un elemento
// [6, 7, 8, 9, 10];
arreglo.unshift(5); //  Anadir al principio del arreglo
// [5, 6, 7, 8, 9, 10];
const indice = arreglo.indexOf(9); // VALOR -> POSICION (Indice) : -1

// CONST NO SE PUEDE RE ASIGNAR
arreglo[0] = 1
// arreglo = 12; // ERROR!!! 

// Funciones

function soloNumeros(a, b, c) {
    return a - b + c; // valor a devolver
}
function soloLetras(a, b, c) { // undefined
    console.log(a, b, c);
}

// soloNumeros('v', true, [1,2,3]);
// soloNumeros();
// soloNumeros(1,2,3,4,5,6,7,8,5,4,3,2,1,);
soloNumeros(1,2,3);
soloLetras('a','b','c');

// Funciones nombradas
function funcionNombrada() {
}

// funciones ANONIMAS

const funcionNombradaDos = function () {
}; 

// Scope
// var a; X
// let b;

// funciones fat arrow functions (flecha gorda)

const funcionNombradaTres = () => {
    // codigo
};

const funcionNombradaCuatro = (x) => {
    return x + 1;
};

const funcionNombradaCinco = (x, y) => {
    return x + y;
};

const funcionNombradaSeis = (x, y) => {
    return x + y;
};


const funcionNombradaSiete = (x, y) => x + y;


const funcionNombradaOcho = x => x * x;













