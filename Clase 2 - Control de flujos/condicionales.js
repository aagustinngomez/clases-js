//if
let edad = 18;

if (edad == 18){
    console.log("Ya eres mayor de edad!");
}

// == es comparacion
// = es asignacion


//if...else
let user = prompt("Ingrese usuario");

if (user == "Juanito1989"){
    console.log("Bienvenido Juan");
}else{
    console.log("Usuario no registrado");
}

//if...else if...else
let codProducto = prompt("Ingrese el codigo del producto y le diré su precio");

if(codProducto == "1212"){
    console.log("Mouse marca Genius - modelo DX100 - $ 999.99");
}else if(codProducto == "2222"){
    console.log("Teclado Logitech - modelo G600 - $ 7999.00");
}else if(codProducto == "1133"){
    console.log("Mouse pad gamer - $ 6000");
}else{
    console.log("Producto sin stock!");
}

//Ejercicio: Solicitar al usuario el año de vencimiento de su registro de conducir
//Si el mismo coincide con el año actual => Enviar un mensaje:"Su registro esta vencido o por vencer"
//Sino enviar un mensaje: "Aun está vigente" 

let anioVencimiento = parseInt(prompt("Ingrese el año de vencimiento de su registro"));
const ANIOACTUAL = 2022;

if(anioVencimiento == ANIOACTUAL){
    console.log("Su registro esta vencido o por vencer");
}else{
    console.log("Aun está vigente");
}


//variables boolean
let tieneAptoFisico = false;
if (tieneAptoFisico) {
    console.log("Puede realizar actividad física");
}else{
    console.log("Primero debe traer apto fisico");
}

let edadUsuario = 12;
let esMayorDeEdad = (edadUsuario > 17);//true

if(esMayorDeEdad){
    console.log("Puede ingresar al bar");
}else{
    console.log("Para ingresar debes ser mayor de edad");
}


// == vs ===

let num1 = 1;
let numUno = "1";
let sonIguales = (num1 == numUno);
console.log(sonIguales);
// == compara por valor 

let sonEstrictamenteIguales = (num1 === numUno);
console.log(sonEstrictamenteIguales);
// === compara por valor y por tipo


// operadores < <= > >=
let caloriasDiarias = parseInt(prompt("Ingresa las calorias ingeridas hoy"));

if (caloriasDiarias <= 1800){
    console.log("Deficit calórico");
}else if(caloriasDiarias < 2300){
    console.log("Excelente valor calorico");
}else{
    console.log("Exceso calorico!");
}


// Operador and &&
let usuario = prompt("Ingresa nombre de usuario");
let contrasenia = prompt("Ingresa la contraseña para el usuario "+usuario);

if((usuario == "Pepito_2022") && (contrasenia == "roble+1_J")){
    console.log("Bienvenido al sistema");
}else{
    console.log("Usuario y/o contraseña erroneos");
}


// Operador or ||
let bandaFavorita = prompt("Ingresa tu banda favorita");

if((bandaFavorita=="daft punk") || (bandaFavorita=="DAFT PUNK") || (bandaFavorita=="Daft Punk")){
    console.log("Tambien es mi banda favorita!");
}else{
    console.log(bandaFavorita + " es genial!");
}


let esArgentino = true;
console.log(!esArgentino);

let ingresoDato = prompt("Ingresa una palabra");

if(ingresoDato != ""){
    console.log("La palabra ingresada es "+ingresoDato);
}else{
    console.log("Debe ingresar una palabra");
}


//Diapo 28
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}
