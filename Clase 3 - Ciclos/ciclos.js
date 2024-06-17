//Ciclos por conteo - FOR

for (let i=1; i<=5; i++){
    //porcion de codigo que se va a repetir
    console.log("Vuelta nro "+i);
}

//Diapo 13
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}

//Diapo 14
for (let i = 1; i <= 4; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}


//usuario y contraseña con ciclo FOR
let usuario;
let contrasenia;
for (let i=1;i<=3;i++){
    usuario=prompt("Ingresa usuario");
    contrasenia=prompt("Ingresa contraseña para "+usuario);
    
    if((usuario=="DarthVader")&&(contrasenia=="Code_66")){
        console.log("Bienvenido al Sistema Anakin!!!");
        break;
    }else{
        console.log("Usuario y/o contraseña erroneos! Restan "+(3-i)+" intentos");
    }
}


//quiero imprimir los numeros impares del 1 al 10
for(let i=1; i<=10; i++){
    //saltea todos los numeros pares
    if(i%2==0){
        continue;
    }
    console.log(i);
}


//ejercicio: calcular el promedio de 3 notas de un alumno

let nota;
let acumulador = 0;
for(let i=1;i<=3;i++){
    nota=parseInt(prompt("Ingresa la nota nro "+i));
    console.log("La nota ingresada: "+nota);
    acumulador = acumulador + nota;
    console.log("Acumulador actualizado: "+acumulador);
}
let promedio=acumulador/3;
console.log("El promedio del alumno es "+promedio);



//Ciclos por condicion - WHILE
console.log("Lista de compras")
let alimento = prompt("Ingrese el alimento que va a comprar (s para salir)");

while (alimento != "s"){
    console.log(alimento);
    alimento=prompt("Ingrese el alimento que va a comprar (s para salir)");
}


//Ciclos por condicion - do...while
console.log("Mis bandas favoritas");
let banda;
do{
    //porcion de codigo que se repite
    banda=prompt("Ingresa una de tus bandas favoritas (fin para salir)");
    if(banda!="fin"){
        console.log(banda);
    }
}while(banda!="fin")



//diapo 23
let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));


// Switch es un condicional con el if
let fruta=prompt("Ingresa la fruta y te dire el precio por kg (salir para finalizar)");
while(fruta != "salir"){
    switch(fruta){
        case "manzana":
            console.log("Precio por kg de manzana $399");
            break;
        case "mandarina":
            console.log("Precio por kg de mandarina $289.99");
            break;
        case "banana":
            console.log("Precio por kg de banana $300");
            break;
        case "durazno":
        case "frutilla":
            console.log("Precio por kg de durazno o frutilla $ 499");
            break;
        default:
            console.log("Fruta sin stock");
            break;
    }
    fruta=prompt("Ingresa la fruta y te dire el precio por kg (salir para finalizar)");
}

//solicitar el peso de las 4 personas que ingresan a un ascensor
//si el total del peso supera los 390 kg, dar aviso ya que excede la capacidad 
//sino imprimir mensaje "Pueden subir"
