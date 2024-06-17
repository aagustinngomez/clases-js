//FUNCIONES DE ORDEN SUPERIOR
//Metodos de busqueda y transformacion
const libros=[
    {
        isbn:"2345123",
        titulo:"Harry Potter",
        genero:"Aventuras",
        precio:230.90
    },
    {
        isbn:"9099777",
        titulo:"Elige tu propia aventura",
        genero:"Aventuras",
        precio:199.00
    },
    {
        isbn:"12121212",
        titulo:"JS para principiantes",
        genero:"Educacion",
        precio:290.00
    },
    {
        isbn:"3333333",
        titulo:"Diccionario de Frances-Español",
        genero:"Diccionario",
        precio:99.90
    },
];

//forEach
libros.forEach((libro) => console.log(libro.titulo));

//find
//busca el primer elemento que cumpla con la condicion solicitada
const encontrado = libros.find((libro) => libro.titulo == "JS para principiantes");
console.log(encontrado);

let libroBuscado = prompt("Ingresa el libro a buscar");
const encontrado2 = libros.find((libro) => libro.titulo == libroBuscado);
if (encontrado2 != undefined){
    console.log(encontrado2);
}else{
    console.log("El libro no se encuentra en stock");
}

//filter
//filtra un conjunto de elementos que cumpla con la condicion
const librosEconomicos = libros.filter((libro) => libro.precio < 200);
console.log(librosEconomicos);

//some 
//informa por verdadero o falso si un elemento se encuentra o no en el array
const existe = libros.some((libro) => libro.genero == "Novela");
console.log("Existe novela? "+existe);

//map
//crea un nuevo array con los elementos del original transformados de alguna manera
const titulos = libros.map((libro) => libro.titulo.toUpperCase());
console.log(titulos);

const nuevaListaLibros = libros.map((libro) => {
    return {
        isbn: libro.isbn,
        titulo: libro.titulo.toUpperCase(),
        genero: libro.genero,
        precio: libro.precio * 1.21,
        vendido: false
    }
});

console.log(nuevaListaLibros);

//reduce
//acumula valores de alguna propiedad especifica como precio
const totalPrecios = libros.reduce((sumador,libro) => sumador + libro.precio,0);
console.log("Total a abonar $"+totalPrecios);

//sort
//ordena de forma ascendente o descendente
libros.sort((a,b) => a.precio - b.precio);//ascendente
console.log(libros);

libros.sort((a,b) => b.precio - a.precio);//descendente
console.log(libros);

libros.sort((a,b) => a.titulo.localeCompare(b.titulo));//alfabeticamente ascendente
console.log(libros);

//Math
//Tirar un dado 
let dado = Math.round(Math.random() * 5 + 1);
console.log("Resultado tirada del dado: "+dado);

//Date
let ahora = new Date();
console.log(ahora);
console.log(ahora.toLocaleString());


