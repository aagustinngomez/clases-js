//objetos literales

const miReloj = {
    marca:"Casio",
    modelo:890,
    color:"rojo",
    malla:"cuero" 
}

console.log(miReloj);
console.log("El color de mi reloj es: " + miReloj.color);
console.log("El modelo de mi reloj es: " + miReloj["modelo"]);

miReloj.malla = "plastica";
console.log(miReloj);

//funcion constructora
function Cuaderno(tapa,hojas,tamanio){
    this.tapa = tapa;
    this.hojas = hojas;
    this.tamanio = tamanio;
}

const cuaderno1 = new Cuaderno("blanda","rayadas","A4");
const cuaderno2 = new Cuaderno("dura","cuadriculadas","carta");

console.log(cuaderno1);

const cuaderno3 = new Cuaderno(prompt("Ingresa tapa"),prompt("Ingresa hojas"),prompt("Ingresa tamaño"));
console.log(cuaderno3);

//funcion constructora que recibe como parametro un objeto literal

function Reloj(objetoLiteral){
    this.marca = objetoLiteral.marca;
    this.modelo = objetoLiteral.modelo;
    this.color = objetoLiteral.color;
    this.malla = objetoLiteral.malla;
}

// const miReloj = {
//     marca:"Casio",
//     modelo:890,
//     color:"rojo",
//     malla:"cuero" 
// }

const miReloj2 = {
    marca:"FGH",
    modelo:111
}

const reloj1 = new Reloj(miReloj);
const reloj2 = new Reloj(miReloj2);

console.log(reloj1);
console.log(reloj2);


//Metodos de String
let frase = "Soy un tenista del TOP TEN, gané 2 Grand Slams";
//Propiedad length - cantidad de caracteres 
console.log("Longitud de la frase: " + frase.length);
//Metodo toLowerCase() - pasa todo a minusculas
console.log(frase.toLowerCase());
//Metodo toUpperCase() - pasa todo a mayusculas
console.log(frase.toUpperCase());


//funcion constructora con método personalizado
function Mascota(raza, nombre, edad, color){
    this.raza=raza;
    this.nombre=nombre;
    this.edad=edad;
    this.color=color;
    //metodo para Mascota
    this.mostrarMascota=function(){
        console.log("Soy "+this.nombre+" mi raza es "+this.raza+", tengo "+this.edad+" años y mi color es "+this.color);
    }
}

const mascota1=new Mascota("Golden","Theo",7,"dorado");
const mascota2=new Mascota("Caniche","Firulais",2,"negro");

mascota1.mostrarMascota();
mascota2.mostrarMascota();


//DIAPO 25
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
//propiedad es un nombre inventado por nosotros
for (const propiedad in persona1) {
    console.log(propiedad);
    console.log(persona1[propiedad]);
}


class Computadora{
    constructor(tipo,sistema){
        this.tipo=tipo;
        this.sistema=sistema;
    }
    //metodos
    mostrarCompu(){
        return "Tipo: "+this.tipo+"\nSistema: "+this.sistema;
    }
    actualizarSistema(nuevoSistema){
        this.sistema=nuevoSistema;
        console.log("Sistema actualizado!");
    }
}

const compu1=new Computadora("notebook","macOs");
const compu2=new Computadora("escritorio","linux");

console.log(compu1);
console.log(compu2.mostrarCompu());
console.log(compu1.mostrarCompu());

compu2.actualizarSistema(prompt("Ingresa nuevo sistema para compu2"));
console.log(compu2.mostrarCompu());