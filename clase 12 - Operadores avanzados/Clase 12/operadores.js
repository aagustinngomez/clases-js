//Operadores avanzados
//DOM
const boton = document.getElementById("botonDados");
const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");
const resultado = document.getElementById("resultado");
let contenedor=document.getElementById("dados");

//funcion flecha
const arrojarDados = () => {
    let d1=Math.round(Math.random() * 5 + 1);
    let d2=Math.round(Math.random() * 5 + 1);
    return [d1,d2];
}

//Eventos
boton.onclick = () => {
    let miSuerte=arrojarDados();//recibe un array con d1 y d2
    console.log(miSuerte);
    dado1.value=miSuerte[0];
    dado2.value=miSuerte[1];
    //let total = miSuerte[0] + miSuerte[1];
    let total = miSuerte.reduce((acumulador,dado)=>acumulador + dado,0);
    //ternario
    ((total==7)||(total==11)) ? resultado.innerText="GANASTE 100 DOLARES!!!":resultado.innerText="PERDISTE 20 DOLARES!!!";
}

// Operador && condicional
console.log("\n *** Operador && condicional");
let num = 15;
let resul = (num>8) && "El numero es mayor a 8";
console.log(resul);

//Operador de asignacion condicional ||
console.log("\n *** Operador de asignacion condicional ||");
let envio = localStorage.getItem("envio") || "retira en persona";
console.log(envio);

const carro = JSON.parse(localStorage.getItem("listaProductos")) || [];
console.log(carro);

//Operador de union nula ??
const carro2 = JSON.parse(localStorage.getItem("listaProductos")) ?? [];
console.log(carro2);

//Diapo 30
console.log("\n *** Acceso condicional a un objeto");
const usuario = null

//console.log( usuario.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"
console.log( usuario?.nombre || "El usuario no existe")
// "El usuario no existe"

//Desestructuracion de objetos
console.log("\n *** Desestructuracion de objetos");
const socio={
    numero:7895,
    nombre:"Juan Marquez",
    edad:39,
    actividades:{
        actividad1:"Futbol",
        actividad2:"Natacion"
    }
}

const {numero, edad, actividades:{actividad1}}=socio;
console.log("El numero de socio es "+numero+" la edad es "+edad+"  Principal actividad: "+actividad1);

const {nombre:nom}=socio;
console.log(nom);

//en parametros
function mostrarSocio({numero,nombre}){
    console.log("Socio nro: "+numero+" Nombre: "+nombre);
}

mostrarSocio(socio);

// for(const socio of socios){
//     mostrarSocio(socio);
// }

//Diapo 49
// window.addEventListener('click', ( {x, y} ) => {
//     console.log(x, y)
// })

//Desestructuracion de arrays
console.log("\n *** Desestructuracion de arrays");

const bandas=["Queen","Bon Jovi","Aerosmith","Guns"];
const [,b1,,b2]=bandas;
console.log(b1,b2);

//Spread Operator ...
//de arrays
console.log(...bandas);
//Diapo 59
const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

console.log( Math.max(...numeros) ) // 92

const misBandas={
    ...bandas
}

console.log(misBandas);

//Spread de objetos
const producto={
    id:1,
    nombre:"soy un producto",
    precio:200
}

const prodACarrito={
    ...producto,
    cantidad:1
}

//Diapo 70 Rest Parameters
function sumar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log( sumar(4, 2) ) // 6
console.log( sumar(10, 15, 30, 5) ) // 60
console.log( sumar(100, 300, 50) ) // 450
console.log( sumar(393, 1000, 1,0,87,14,1) )