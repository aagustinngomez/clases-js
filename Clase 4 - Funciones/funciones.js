//funcion sin parametros
function saludar(){
    console.log("Buenas noches programadores!");
}

saludar();

for(let i=1;i<=3;i++){
    saludar();
}

function sumar(){
    let num1=parseInt(prompt("Ingresa el primer numero"));
    let num2=parseInt(prompt("Ingresa el segundo numero"));
    let resultado=num1+num2;
    console.log("El resultado de la suma es: "+resultado);
}

sumar();


//funcion con parametros

function armarFrase(palabra1,palabra2){
    console.log("La frase es: "+palabra1+" "+palabra2+".");
}

armarFrase("Tengo","hambre");
armarFrase("Que","frio");

let p1=prompt("Ingresa la primera palabra");
let p2=prompt("Ingresa la segunda palabra");

armarFrase(p1,p2);



//funcion con parametros y return
let precioProd=parseFloat(prompt("Ingresa el precio del producto"));

function calcularIva(precio){
    return precio * 0.21;
}

//precio=100 -> iva=21

let iva = calcularIva(precioProd);
console.log("EL valor del IVA es $"+iva);

function mostrarPrecioFinal(precioIngresado,ivaCalculado){
    console.log("El precio con iva incluido es $"+ (precioIngresado+ivaCalculado));
}

mostrarPrecioFinal(precioProd,iva);




//Ambito de una variable (local o global)

let soyGlobal="Pepe";

function probarScope(){
    console.log(soyGlobal);
    let soyLocal="Lautaro";
    console.log(soyLocal);
    return soyLocal;
}

let loQueRetorna=probarScope();

console.log(soyGlobal);
//console.log(soyLocal);



function sumar(num1, num2) {
    let resultado = num1 + num2
    return resultado
}

function restar(num1, num2) {
    let resultado = num1 - num2
    return resultado
}

let resulSuma = sumar(4,3);
console.log(resulSuma);
let resulResta = restar(4,3);

let resulSuma2 = sumar(10,9);
console.log(resulSuma2);


//funcion anonima
const descuento = function (precio) { return precio * 0.10 };

console.log("El descuento es $"+descuento(700));

//funcion flecha

const mostrarNombre = (nombre) => "Mi nombre es "+nombre;
console.log(mostrarNombre("Pepe"));

//pidiendo el nombre al usuario
console.log(mostrarNombre(prompt("Ingresa tu nombre")));

const areaTriangulo = (base,altura) => (base*altura)/2;
console.log("EL area del triangulo es: "+areaTriangulo(4,6));


const ejemplo = (parametro1, parametro2) => {
    //aqui el bloque de codigo
    return parametro1 + parametro2;
}

