//Listas

const listaCompras = ["Leche","Agua","Harina","Pan","Lechuga","Tomate"];
console.log(listaCompras);

console.log(listaCompras[2]);
console.log(listaCompras[0]+" y "+listaCompras[2]);

//recorrer la lista 
console.log("******* Recorrido de la lista *******")
for(let i=0; i<listaCompras.length; i++){
    console.log(listaCompras[i]);
}

//propiedad length - longitud del array
console.log(listaCompras.length);

//metodo push - agrega un nuevo elemento al final de la lista
listaCompras.push("Sal");
console.log(listaCompras);

//metodo unshift - agrega un nuevo elemento al comienzo de la lista
listaCompras.unshift("Hamburguesas");
console.log(listaCompras);

//metodo pop - elimina el ultimo elemento
listaCompras.pop();
console.log(listaCompras);

//metodo shift - elimina el primer elemento
listaCompras.shift();
console.log(listaCompras);

//metodo splice - elimina elementos de cualquier parte del array
listaCompras.splice(3,2);//3 es la posicion y 2 es la cantidad a eliminar
console.log(listaCompras);

//metodo join - pasa a un string todos los elementos del array con separador
let todosLosElementos = listaCompras.join(" ** ");
console.log(todosLosElementos);

//metodo concat - une dos arrays en uno nuevo
const postres = ["helado","flan","tiramisu"];
const listaCompleta = listaCompras.concat(postres);
console.log(listaCompleta);

//metodo slice - copia una parte del array
const subConjunto=listaCompleta.slice(3,6);
console.log(subConjunto);

//metodo indexOf - da la posicion de un elemento en el array
const listaAlumnos = ["Perez","Centeno","Lopez","Rodriguez","Burocco"];
let posicion = listaAlumnos.indexOf("Lopez");
console.log(posicion);

posicion = listaAlumnos.indexOf("Herrera");
console.log(posicion);

let apellido = prompt("Ingresa el apellido buscado");
posicion = listaAlumnos.indexOf(apellido);
if(posicion!=-1){
    alert("El alumno "+listaAlumnos[posicion]+" se encuentra en el curso");
}else{
    alert("El alumno no se encuentra en el curso");
}

//metodo includes - si un elemento esta o no en un array
let encontrado = listaAlumnos.includes("Perez");
console.log(encontrado);//true

//metodo reverse - invierte el orden de los elementos del array
listaAlumnos.reverse();
console.log(listaAlumnos);

const cosmeticos = [
    {
        id:67,
        nombre:"mascara de pestañas",
        marca:"Maybelline",
        precio:2000
    },
    {
        id:11,
        nombre:"Labial",
        marca:"Revlon",
        precio:1500
    },
    {
        id:89,
        nombre:"corrector de ojeras",
        marca:"Mac",
        precio:3000
    }
];

console.log(cosmeticos);
//console.log(cosmeticos[1]);

//FOR...of recorre array de objetos
for(const cosmetico of cosmeticos){
    //console.log(cosmetico);
    console.log(cosmetico.nombre+" - Precio $ "+cosmetico.precio);
}

//DIAPO 38
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){
    producto.sumaIva();
}

console.log(productos);

