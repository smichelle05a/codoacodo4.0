// Generalmente el archivo se llama main.js o script.js

// Esto es un comentario de una línea

/* Esto es
    un comentario
        de varias líneas*/

//alert('Hola, Mundo!') // pasamos un contenido y muestra un mensaje

// Ejemplos de nombres de variables válidos

// No es necesario darles un valor a las variables al declararlas en js, es una de sus características, se les puede dar el valor más adelante

let usuario;
let Prueba; // no lo recomiendo
let _apellido;
let $edad;
let camelCase; // comienza con minúscula y cada nueva palabra comienza con mayúscula
let snake_case; // guión bajo entre cada palabra
let PascalCase; // cada palabra comienza en mayúscula

// Estas 3 son variables diferentes
let nombreApellido;
let nombre_apellido
let NombreApellido;

/*
Ejemplos de nombres de variables incorrectos

no se puede iniciar con números
let 123nombre;

no se puede usar guión medio
let nombre-apellido;

no se pueden usar palabras reservadas
let break;
let class;
let super;
let this;
let new;

*/

console.log("----------------- var, let y const -----------------");

// var
var miNombre;
miNombre = "Scarlet";

console.log("var miNombre: " + miNombre);

var miNombre = "Rosa"; //es válido

console.log("var miNombre cambió a: " + miNombre);

// console.log("variable sin definir: blabla" + blabla)

// let
let miEdad = 29;

console.log("Tengo " + miEdad + " años");

miEdad = 50;

console.log("let miEdad cambió a: " + miEdad);

// let miEdad = 60; error, no se puede declarar de nuevo: Uncaught SyntaxError: Identifier 'miEdad' has already been declared

// const

const userName = "Pepe";

console.log("Mi constante userName es: " + userName);

// userName = "Juan"; error, las constantes no se pueden reasignar: Uncaught TypeError: Assignment to constant variable.

/* las constantes SIEMPRE se deben inicializar, de lo contrario aparece el siguiente error:

Uncaught SyntaxError: Missing initializer in const declaration*/

// Ámbito de las variables

let variableGlobal; // variable global

function Ejemplo() {
  let variableLocal;

  // lo que está entre llaves es el ámbito de la variable local, si la llamo desde fuera de la función, no va a existir, sólo existe dentro de la función
}

// si creo una variable con el mismo nombre, fuera de la función, van a ser 2 variables distintas y dentro de la función va a tener el valor de la variable declarada en dicho ámbito

console.log("----------------- Tipos de datos -----------------");

// String
let str = "String con comillas dobles";
let str2 = 'String con comillas simples';
let str3 = `String con acento agudo`;

console.log(str);
console.log(str2);
console.log(str3);
console.log(`${str} y ${str2}`); //concantenar variables y string
// es lo mismo que console.log(str + " y " + str2)

// number
let numInt = 123;
let numFloat = 10.20;
let numNegative = -80;
//console.log("No es un número"*2) NaN -> Not a Number

let multiplicacion = numInt * numFloat;
let division = numNegative / multiplicacion;
let suma = numInt + numFloat;
let resta = numNegative - multiplicacion;

console.log("Número entero: " + numInt);
console.log("Número con coma flotante: " + numFloat);
console.log("Número negativo: " + numNegative);
console.log(`Suma de ${numInt} y ${numFloat} = ${suma}`);
console.log(`Resta de ${numNegative} y ${multiplicacion} = ${resta}`);
console.log(`Multiplicación de ${numInt} y ${numFloat} = ${multiplicacion}`);
console.log(`División de ${numNegative} y ${multiplicacion} = ${division}`);

// boolean

let soyVerdadero = true;
let soyFalso = false;
let soyMayor = 4 > 1;
console.log(soyMayor);

// null es un valor que no existe o nulo

let valorAdefinir = null;
console.log(valorAdefinir);
valorAdefinir = 90; //se le puede asignar el valor en cualquier parte del documento

// undefined es cuando declaramos una variable sin asignarle valor

let sinDefinir;

//prompt("¿Cómo te llamas?"); pide datos al usuario
//alert("Hola " + prompt("¿Cómo te llamas?")); no se está guardando en ningún lugar

//usuario = prompt("¿Cómo te llamas?")

//alert("Hola " + usuario);

// mensajes de consola

console.log("Esto muestra un mensaje en la consola");
console.warn("Esto es un mensaje de advertencia");
console.error("Esto es un mensaje de error");
console.info("Esto es un mensaje de información"); //no se suele utilizar mucho porque es prácticamente igual que log

//console.clear(); limpia la consola, puede hacerse también con CTRL+L

document.write('<h1 class="text-center"> Introducción a JavaScript </h1>'); //Escribe cosas en nuestro documento

//objeto.funcion();

console.log("----------------- Funciones String -----------------");

/*
string.toUpperCase();
string.toLowerCase();
string.length(); letras que tiene nuestro string
string.repeat(n);
string.replace(str1,str2);
*/

// length
let cantidad = "asdfg";
console.log(cantidad.length);

// repeat
let repetir = "bla ";
let repetir7 = repetir.repeat(7);
console.log(repetir7);

// replace
let reemplazar = "hola";
console.log(reemplazar);
console.log(reemplazar.replace("hola", "chau"));

console.log("----------------- parseInt y parseFloat -----------------");
console.log(parseInt("13"));
console.log(parseInt("22.555")); //sólo devuelve 22 porque es para números enteros
console.log(parseInt("        50        "));
console.log(parseInt("50 días")); //ignora el texto
console.log(parseInt("hace 55652 dias")); //NaN, comienza con texto
console.log(parseInt("16fsdñflaksfda265")); //sólo devuelve 16 que es el primer número que encuentra
console.log(parseFloat("22.55555"));
console.log(parseFloat("sdfaaoijf 563")); //NaN

console.log("----------------- Operadores -----------------");

console.log("----------------- Operadores Aritméticos------------");

const num1 = 10;
const num2 = 20;

// Suma
console.log(num1 + num2);
// Resta
console.log(num2 - num1);
// Multiplicación
console.log(num1 * num2);
// División
console.log(num2 / num1);
// Modulo
console.log(num2 % num1);

// Incremento y Decremento
let x = 5;
let y = 2;
console.log("El valor inicial de x es: " + x); // 5
console.log("El valor de ++x es: " + ++x); // 6
console.log("El valor inicial de y es: " + y); // 2
console.log("El valor de --y es: " + --y); // 1
console.log("El valor inicial de x es: " + x); // 5
console.log("El valor de x++ es: " + x++); // 5
console.log("Recién acá se implementa el incremento: " + x);
console.log("El valor inicial de y es: " + y); // 2
console.log("El valor de y-- es: " + y--); // 2
console.log("Recién acá se implementa el decremento: " + y);


console.log("----------------- Operadores Relacionales ------------");
// >, <, <=, >=, !=, ==
console.log("20 > 10 = ");
console.log(num2 > num1); // 20 > 10 -> true
console.log("20 < 10 = ");
console.log(num2 < num1); // 20 < 10 -> false
console.log("20 >= 10 = ");
console.log(num2 >= num1); // 20 >= 10 -> true
console.log("20 <= 10 = ");
console.log(num2 <= num1); // 20 <= 10 -> false
console.log("20 != 10 = ");
console.log(num2 != num1); // 20 != 10 -> true
console.log("20 == 10 = ");
console.log(num2 == num1); // 20 == 10 -> false 


console.log("----------------- Operadores Lógicos ------------");
// Operador "AND", Operador "OR", Operador "NOT"
console.log(`${num2} != ${num1} && ${num1} < ${num2} =`);
console.log(num2 != num1 && num1 < num2); // true
console.log(`${num2} == ${num1} || ${num2} < ${num1} =`);
console.log(num2 == num1 || num2 < num1); // false
console.log(`!(${num1} == 20) =`);
console.log(!(num1 == 20)); // true


console.log("----------------- Operadores de Asignación ------------");
// = | += | -= | *= | /= | %= 
let n = 2
n += 5 // n = 2 + 5

let a = 10;
console.log("El valor inicial de a es: " + a);
a += 3; // a = a + 3
console.log("El nuevo valor de a es: " + a); // 13
a -= 3; // a = a - 3 (ahora a vale 13)
console.log("El nuevo valor de a es: " + a); // 10 
a *= 3; // a = a * 3 (ahora a vale 10)
console.log("Ahora el valor de a es: " + a); // 30
a /= 3; // a = a / 3 (ahora a vale 30)
console.log("Y ahora vale: " + a); // 10
a %= 3; // a = a % 3 (ahora a vale 10)
console.log("Por último, a vale: " + a); // 1  


console.log("----------------- Operador typeof ------------");
let tipoNumerico = 10; // number
let tipoBooleano = false; // boolean
let tipoString = "Ejemplo de una cadena"; // string
let tipoUndefined; // undefined

console.log(`typeof ${tipoNumerico} =`);
console.log(typeof tipoNumerico);
console.log(`typeof ${tipoBooleano} =`);
console.log(typeof tipoBooleano);
console.log(`typeof ${tipoString} =`);
console.log(typeof tipoString);
console.log(`typeof ${tipoUndefined} =`);
console.log(typeof tipoUndefined);

console.log("----------------- Condicionales ------------");
console.log("----------------- IF ------------");

if (5 > 4) {
  console.log("5 es mayor");
}

// if - else
if ("a" === "a") {
  console.log("pasó la condición");
} else {
  console.log("no pasó la condición");
}

// if anidados
let pepeEdad = 31;
let juanEdad = 15;
if (pepeEdad > juanEdad) {
  console.log("Pepe es mayor");
} else if (pepeEdad == juanEdad) {
  console.log("Tienen la misma edad");
} else {
  // la condición no se cumplió
  console.log("Juan es mayor");
}

pepeEdad = 11;
juanEdad = 15;
if (pepeEdad > juanEdad) {
  console.log("Pepe es mayor");
} else if (pepeEdad == juanEdad) {
  console.log("Tienen la misma edad");
} else {
  console.log("Juan es mayor");
}

pepeEdad = 11;
juanEdad = 11;
if (pepeEdad > juanEdad) {
  console.log("Pepe es mayor");
} else if (pepeEdad == juanEdad) {
  console.log("Tienen la misma edad");
} else {
  console.log("Juan es mayor");
}

console.log("----------------- Switch ------------");
let numero = 5;
switch (numero) {
  case 1:
    console.log("El número es 1");
    break;
  case 2:
    console.log("El número es 2");
    break;
  case 3:
    console.log("El número es 3");
    break;
  case 4:
    console.log("El número es 4");
    break;
  case 5:
    console.log("El número es 5");
    break;
  default:
    console.log("No hay coincidencias");
}

// es lo mismo que...
if (numero == 1) {
  console.log("El número es 1");
} else if (numero == 2) {
  console.log("El número es 2");
} else if (numero == 3) {
  console.log("El número es 3");
} else if (numero == 4) {
  console.log("El número es 4");
} else if (numero == 5) {
  console.log("El número es 5");
} else {
  console.log("No hay coincidencias");
}

console.log("----------------- Bucles ------------");
console.log("----------------- While ------------");

let i = 5;
while (i <= 10) {
  console.log(i);
  i++;
}

/*
let color = "";
while (color != "rosa") {
    color = prompt("Escribí un color (rosa para salir)")
}*/

console.log("----------------- For ------------");
for (let indice = 1; indice <= 10; indice++) {
  console.log(indice);
}

/* se pueden omitir partes del for
let indice = 1;
for (; indice <= 10; indice++) { //si se declara fuera la variable, no olvidar poner el ; sino se hace un loop infinito
    console.log(indice)
}

//otra forma de hacer el mismo for
let indice = 1;
for (; indice <= 10;) {
    console.log(indice++)
}  */

/*
console.log("----------------- Ejemplo ------------");
let number = parseInt(prompt("Ingrese un número entero"));
for (let n = 1; n<=10; n++) {
    if (n == 1) {
        document.write(`<h2>Tabla del ${number} </h2>`);
    }
    document.write(`<p> ${number} x ${n} = ${number * n} </p>`);
}*/

console.log("--------- Funciones --------");

function funcionSinParametros() { // función anónima
  return 5 * 8;
}
function miPrimeraFuncion(num1, num2) { // función declarativa
  return num1 * num2;
}
miPrimeraFuncion(5, 2); // llamamos a una función con parametros

let multiplica = miPrimeraFuncion(2, 2); // guardar la función en una variable

let funcionExpresiva = function () { // función expresiva
  let a = "Podemos definir variables dentro de las funciones";
  console.log(a);
}
funcionExpresiva(); // llamamos a una función sin parametros

function misDatos(nombre, apellido, edad) {
  return 'Me llamo ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años';
}
console.log(misDatos('Scarlet', 'Albornoz', 29));

let valor = 150;
let dolarAPesos = function (dolar) {
  return dolar * valor;
};
console.log(dolarAPesos(1));


console.log("--------- Scope --------");

let otraFuncion = function () {
  let x = "Hola";
  var y = 1;

  if (true) {
    let x = "Chau";
    var y = 5454545;
    console.log(`let x vale ${x}`);
    console.log(`var y vale ${y}`);
  }

  console.log(`let x vale ${x}`);
  console.log(`var y vale ${y}`);
}

otraFuncion();

function Multiplicar(num1, num2) {
  return num1 * num2;
}

function MostrarValoresMultiplicados() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let resultado = Multiplicar(num1, num2);
  alert("La multiplicación da como resultado: " + resultado);
}

console.log("--------- Callback --------")
/* una callback es una función que recibe como parámetro a otra función para que cuando se termine de ejecutar
llame a su callback */

/*function saludar(callback) {
  callback()// ejectamos la función pero NO la creamos, solo estamos llamando a algo que todavía no existe como si existiera
}

saludar(function() {// acá va a existir la función callback
  console.log("hola!");
}); //estamos definiendo la función NO la estamos ejecutando*/

// vamos a agregar un parámetro más
function saludar(name, callback) {
  callback(name); // en la callback pasamos como argumento también name
}
saludar("Pepito", function (name) { // en la invocación de la función llamadora tenemos un parámetro y como callback una función que es un definición recibe un parámetro
  console.log("Hola", name);
})

function saludar(name, callback) {
  callback(name); // lo mismo q antes
}

function saludo(name) {
  console.log("Hola", name);
}

saludar("Pepito2", saludo);

console.log("------------- Ejemplo de callback -----------");
/* Sumar 2 números,
   Al resultado de la suma lo queremos multiplicar
   Al resultado de esa multiplicación lo queres dividir
   Al resultado de esa división le queremos restar número
   Indicar si el resultado es mayor a 10 */

/*function sumar(num1, num2, callback) {
  callback(num1+num2); // necesitamos el resultado de ese proceso por eso la callback
}
function multiplicar(num, callback) {
  callback(num*num);
}
function dividir(num, callback) {
  callback(num/2);
}
function restar(num, callback) {
  callback(num-10);
}
function esMayor(num, callback) {
  if (num > 10) {
    callback("es mayor a 10");
  } else {
    callback("es menor a 10");
  }
}
// Callback hell 

sumar(5, 2, function(resultadoSumar) {
  console.log("La suma de 2 números es: ", resultadoSumar);
  multiplicar(resultadoSumar, function(resultadoMultiplicar) {
    console.log("La multiplicación de la suma es: ", resultadoMultiplicar);
    dividir(resultadoMultiplicar, function(resultadoDividir){
      console.log("La división es: ", resultadoDividir);
      restar(resultadoDividir, function(resultadoRestar){
        console.log("La resta da: ", resultadoRestar);
        esMayor(resultadoRestar, function(resultadoFinal){
          console.log("El resultado final", resultadoFinal)
        })
      })
    })
  })
})*/

function sumar(num1, num2, callback) {
  let resultado = num1 + num2;
  callback(resultado, multiplicar);
}

function imprimirSuma(resultadoSuma, callback) {
  console.log("El resultado de la suma es : " + resultadoSuma);
  callback(resultadoSuma, imprimirMultiplicacion);
}

function multiplicar(resultadoSuma, callback) {
  let resultado = resultadoSuma * resultadoSuma;
  callback(resultado, dividir);
}

function imprimirMultiplicacion(resultadoMultiplicacion, callback) {
  console.log("El resultado de la multiplicación es : " + resultadoMultiplicacion);
  callback(resultadoMultiplicacion, imprimirDivision);
}

function dividir(resultadoMultiplicacion, callback) {
  let resultado = resultadoMultiplicacion / 2;
  callback(resultado, restar);
}

function imprimirDivision(resultadoDivision, callback) {
  console.log("El resultado de la división es : " + resultadoDivision);
  callback(resultadoDivision, imprimirResta);
}

function restar(resultadoDivision, callback) {
  let resultado = resultadoDivision - 10;
  callback(resultado, comparar);
}

function imprimirResta(resultadoResta, callback) {
  console.log("El resultado de la resta es : " + resultadoResta);
  callback(resultadoResta, imprimirComparacion);
}

function comparar(resultadoResta, callback) {
  if (resultadoResta > 10) {
    callback("es mayor a 10");
  } else {
    callback("es menor a 10");
  }
}

function imprimirComparacion(Comparacion) {
  console.log("El resultado final " + Comparacion);
}

sumar(5, 2, imprimirSuma);

function saludar(name, callback) {
  callback(name); // lo mismo q antes
}

function saludo(name) {
  console.log("Hola", name);
}
saludar("Pepito2", saludo);


console.log("--------- Funciones flecha --------");
// función declarativa
function sumar1(a, b) {
  return a + b;
}
// función expresiva
const sumar3 = function (a, b) {
  return a + b;
}
// función flecha
const sumar2 = (a, b) => {
  return a + b;
}

console.log("--------- Array --------")

// hay dos formas de crear un arreglo
let asi = ["Hola", "Chau", 1, 2, 3, true, false]; // recomendado
let oAsi = new Array('uno', 'dos', 3);

//  miArray = [0,  1,  2,  3,  4,  5,  6,  7, ...]
let miArray = [7, 13, 26, 14, 17, 32, 29, 10, 4, 2];
console.log(miArray);
miArray.sort(function (a, b) { return a - b }); // ordenado de menor a mayor, si ordenamos por "sort", se ordenan los que tienen 1 al principio, después los que tienen 2 y así...
console.log(miArray);

console.log(miArray.length); // la longitud del array

let listaNombres = ["Evangelina", "Natalia", "Debora", "Yamila", "Lucia"];
console.log(listaNombres.sort()); // orderar alfabeticamente
console.log("El último nombre es: " + listaNombres[listaNombres.length - 1]); // último
listaNombres.push("Rocio"); // push nos añade un valor al final
console.log(listaNombres);
listaNombres.unshift("Pepe"); // unshift nos añade un valor al inicio
console.log(listaNombres);
console.log("Los nombres de algunas personas del curso son: " + listaNombres.join(", ")); // imprime los elementos del array en string
listaNombres.shift(); // borra un elemento del inicio del array
console.log(listaNombres);
listaNombres.splice(1, 2); // el primer valor es para la posición y el segundo para la cantidad a borrar
console.log(listaNombres);
listaNombres.splice(1, 0, "Nombre", "Nombre2"); // 1 es la posición, 0 es porque no queremos borrar nada, sino agregar, los siguientes parámetros son lo que queremos agregar
console.log(listaNombres);

console.log("--------- Métodos de Strings --------");

console.log("--------- Método includes --------");
let email = "smichelle05a@gmail.com"
if (email.includes("@")) {
  console.log("Correo electrónico válido");
} else {
  console.log("Ingrese un correo electrónico válido");
}

console.log("--------- Método trim | trimEnd | trimStart --------");
let username = "     usuario123   "
console.log(username);
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

console.log("--------- Método substring ---------");
let cortarTexto = "Vamos a cortar este string";
console.log(cortarTexto);
console.log(cortarTexto.substring(0, 5)); // (inicio,fin)

console.log("--------- split ---------");
let txt = "Lorem ipsum dolor sit amet";
console.log(txt.split(" ")); // cada vez que encuentre un espacio va a crear un nuevo elemento
console.log(txt.split(" ", 3));

console.log("--------- charAt  ----------");
console.log(txt.charAt(0)); // muestra el caracter que se encuentra en la posición indicada

console.log("--------- Funciones de orden superior ---------");

console.log("--------- explicación de forEach ---------");
let otroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
otroArray.forEach(function (elemento, index, arreglo) { // recibe 3 argumentos
  console.log(elemento); // obligatorio
  console.log(index); // opcional
  console.log(arreglo); // opcional
})
console.log("------------------ array con forEach ----------------");
otroArray.forEach(function (elemento) {
  console.log(elemento);
})
console.log("------------------ forEach con función flecha ----------------");
otroArray.forEach(elemento => {
  console.log(elemento);
})
console.log("------------------ lo mismo que forEach pero con for ----------------");
for (otroArray = 1; otroArray <= 10; otroArray++) {
  console.log(otroArray);
}

console.log("--------- every ----------");
// pregunta si todos los elementos cumplen la condición, devuelve un valor booleano
const numeros = [8, 13, 56, 2, 77, 17, 64];
function menorA100(numeros) {
  return numeros < 100; // true
}
console.log(numeros.every(menorA100));
console.log(numeros.every(n => numeros < 50)); // lo mismo con función flecha


console.log("--------- some ----------"); /* pregunta si algún elemento cumple la condición */
let num = [20, 1, 3, 58, 66, 135, 324, 756, 0];
console.log(num.some(numero => numero > 10)); // true: pregunto si algún elemento es mayor a 10
console.log(num.some(numero => numero > 100000000)); // false

console.log(num.some(function (elemento) {
  return elemento == 66; // pregunto si algún elemento es igual a 66
}))


console.log("--------- map ----------");
// crea un nuevo array ejecutando una función en cada uno de los elementos del array. No ejecuta la función en elementos sin valor y no cambia el array original
const pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const impares = pares.map((numero) => numero + 1);
console.log("array con map de números impares");
console.log(impares);
console.log("array original de números pares");
console.log(pares);

console.log("----------------------------------");
const numbers = [2, 3, 4, 8];
const potencia = numbers.map((numero) => Math.pow(numero, 2)); // devuelve la base elevada al exponente ej: Math.pow(7,2) -> 49
console.log("array original de números");
console.log(numbers);
console.log("array con map mostrando las potencias de cada número del array");
console.log(potencia);

console.log("array con lista de navegación que se imprime en la pantalla con map");
let lista = ["home", "about", "projects", "contact"];
let nav = lista.map((item) => `<li> ${item}</li>`);
document.write(nav.join(' '));

console.log("--------- find ----------");
// devuelve el valor del primer elemento del arreglo que cumple con los parámetros definidos, al ser true, devuelve el valor de ese elemento
const buscar = [30, 34, 50, 100];
const z = buscar.find(elemento => elemento > 20);
console.log(z);
console.log("----------------------------------");
let peliculas = ["Shrek", "Harry Potter", "Star Trek"];
let hp = peliculas.find(pelicula => {
  return pelicula.includes("potter");
})
console.log(hp);
// Es case sensitive, si no consigue el valor, muestra undefined

console.log("--------- filter ----------");
// crea un nuevo array con todos los elementos que cumplan con los parámetros de la función
let personas = [19, 22, 28, 35, 44, 10, 12, 33, 15, 40, 13, 17, 18];
let mayores = personas.filter((persona) => persona >= 18);
console.log("Arreglo de personas:")
console.log(personas);
console.log("Arreglo con el filtro de personas mayores:");
console.log(mayores);

console.log("--------- reduce ----------");
// se ejecuta por cada elemento del array y devuelve un único valor conocido como acumulador
const suma2 = [10, 20, 20, 30].reduce((acumulador, elemento) => acumulador + elemento); // (acumulador, elemento) 
console.log(suma2); // 80
const loMismo = [10, 20, 20, 50].reduce(function (a, b) {
  return a + b;
});
console.log(loMismo); // 100

console.log("---------------- promedio de notas ----------------")
const alumnos = [[9, 8, 7], [1, 5, 1], [8, 8, 7]];
const promedios = alumnos.map((alumnos) => {
  let suma2 = alumnos.reduce((acumulador, elemento) => acumulador + elemento)
  return suma2 / alumnos.length;
});
console.log(promedios)

console.log("---------------- reduce con strings ---------------")
const nombres = ["pepe", "pepe2", "pepe", "pepe2", "pepito", "pepito", "pepe"];
const cantidadDeNombres = nombres.reduce((acumulador, nombres) => {
  acumulador[nombres] = (acumulador[nombres] || 0) + 1;
  return acumulador;
}, {});
console.log(cantidadDeNombres);

console.log("------ getElementBy ------");
// por ID
let elementoID = document.getElementById("id");
console.log(elementoID);
// los siguientes getElementBy están en desuso
// por Clase
let elementoClase = document.getElementsByClassName("clase");
console.log(elementoClase);
// por etiqueta
let elementoEtiqueta = document.getElementsByTagName("p");
console.log(elementoEtiqueta);
// por el atributo Name
let elementoName = document.getElementsByName("name");
console.log(elementoName);

console.log("------ querySelector ------");
// es la mas recomendada, devuelve el primer elemento que cumpla con la condición. Se pueden usar pseudoclases
let elemento1 = document.querySelector("#selectorID");
console.log(elemento1);
let elemento2 = document.querySelector(".selectorClase");
console.log(elemento2);
let elemento3 = document.querySelector("h1"); //selector de tag
console.log(elemento3);
let elemento4 = document.querySelector("div > p"); // 1er párrafo del div (hijos)
console.log(elemento4);
// querySelectorAll nos devuelve todos los elementos que coincidan con el selector como un objeto NodeList
let elementos = document.querySelectorAll("p");
console.log(elementos);
let array_elementos = Array.from(document.querySelectorAll("p")); // convertir el NodeList es un Array
console.log(array_elementos);

console.log("------ Modificar elementos ------")
// innerText acceder al texto  que tiene un elemento
console.log(document.querySelector("h2").innerText);
let modificarElemento = document.querySelector("h2");
modificarElemento.innerText = "JavaScript"; // reemplazo 
modificarElemento.innerText += ": DOM"; // si solo usamos = estamos reemplazando y si usamos += agregamos
// innerHTML agregar un elemento
let agregarAlMain = document.querySelector("main")
agregarAlMain.innerHTML += "<p> Clase 18 </p>";


console.log("------ Modificar CSS ------")
// una vez q accedemos a un elemento podemos acceder a sus propiedades CSS con la propiedad .style
let modificarCSS = document.querySelector("p");
modificarCSS.style.display = "flex"; // .style.propiedad = valor css
modificarCSS.style.margin = "1rem";
modificarCSS.style.backgroundColor = "black"; // camelCase (el guión medio es resta en js)
modificarCSS.style.width = "100%";
modificarCSS.style.padding = "2rem";
modificarCSS.style.color = "white";


console.log("------ classList ------")
// add - remove - replace - toggle - contains 

// add
let unElemento = document.querySelector("h2");
unElemento.classList.add("bg-danger", "pl-3");
// remove
unElemento.classList.remove("pl-3");
// replace 
unElemento.classList.replace("bg-danger", "bg-warning");
// toggle 
unElemento.classList.toggle("agregoClase"); // la crea si no existe
unElemento.classList.toggle("agregoClase"); // la borra si ya existe
unElemento.classList.toggle("agregoClase", false) // con true agrega y con false saca
// contains
console.log(unElemento.classList.contains("bg-warning")); // true

let intervalo;
function cambiarColor() {
  intervalo = setInterval(colores, 400); // setInterval(función, milisegundos) -> es un método q ejecuta una función de forma repetitiva
}
function colores() {
  let holaMundo = document.getElementById("txt");
  if (holaMundo.style.color == "black") {
    holaMundo.style.color = "white";
  } else {
    holaMundo.style.color = "black";
  }
}
function pausar () {
  let elemento = document.querySelector("#pausarReanudar");
  if(elemento.classList.contains("fa-hand-paper")) {
    clearInterval(intervalo);
    elemento.classList.replace("fa-hand-paper", "fa-play-circle");
  } else {
    cambiarColor();
    elemento.classList.replace("fa-play-circle", "fa-hand-paper");
  }
}

console.log("------ Eventos ------");

//Event
const foo = event => {
  //evento, evt or e
  console.log(event);
}

const btn = document.querySelector("#alert");
btn.addEventListener("click", foo);

let header = document.querySelector("#seccionEventos");
header.addEventListener("click", funcionEvento);

function funcionEvento(evento) {
  console.log(evento.target);
}


// On Events: nos permiten asignar funciones a los eventos
function miFuncion() {
  console.log("Ejecutamos un on event en una propiedad html");
}

let elementoOn = document.querySelector("#miFuncion");
elementoOn.onclick = function () {
  console.log("ejecutamos un on event sin necesidad de llamar a la función en html");
}

// eventos del mouse
const mouseEventos = evento => {
  const { type } = evento;
  const mouseEvent = document.querySelector("#mouseEvent");
  console.log(`evento`,evento);
  console.log(`type`,type);
  mouseEvent.innerText = `Qué evento se está ejecutando? ${ evento.type }`;
}

const gridItem = document.querySelector("#grid-item");
gridItem.addEventListener("click", mouseEventos);
gridItem.addEventListener("dblclick", mouseEventos);
gridItem.addEventListener("mouseenter", mouseEventos);
gridItem.addEventListener("mouseleave", mouseEventos);
gridItem.addEventListener("mousemove", mouseEventos);
gridItem.addEventListener("mousedown", mouseEventos);
gridItem.addEventListener("mouseup", mouseEventos);

// eventos del teclado 

const tecladoEventos = evento => {
  const { type } = evento;
  console.log(`Se ejecutó: ${type}`)
};
window.addEventListener("keydown", tecladoEventos);
window.addEventListener("keyup", tecladoEventos);
window.addEventListener("keypress", tecladoEventos);

let keyActions = evento => {
  let {type, keyCode, key, code} = evento;
  let tecla = document.querySelector("#teclado");
  tecla.innerHTML = `<ul> 
              <li>keyCode: ${keyCode}</li>
              <li>key: ${key}</li>
              <li>code: ${code}</li>
            </ul>`
}
window.addEventListener("keypress", keyActions);

// event.preventDefault: elimina la función por defecto de un elemento
let cargarEnlace = evento => {
  console.log("No podes");
  evento.preventDefault(); // eliminamos la función x defecto de prevent
}
let link = document.querySelector("#prevent");
link.addEventListener("click", cargarEnlace);

// remove event: para eliminar un evento de un elemento
let eliminar = document.querySelector("#prevent");
eliminar.removeEventListener("click", cargarEnlace); 

// eventos para formularios: focus, blur, change
const txt2 = document.querySelector("#ejemploInput");
txt2.addEventListener("focus", (evento) => {
  evento.target.style.background = "tomato";
});

txt2.addEventListener("blur", (evento) => {
  evento.target.style.background = "blue";
})

const selectElement = document.querySelector(".select");
selectElement.addEventListener("change", (evento) => {
  console.log(evento);
  const result = document.querySelector(".result");
    result.textContent = `Seleccionaste ${evento.target.value}`;
})

// operador ternario: condicional() ? true : false
let condicion = true;
condicion ? console.log("paso la condición") : console.log("no paso la condición")

if (condicion) { // lo mismo
  console.log("paso la condición")
} else {
  console.log("no paso la condición")
}

let otroEjemplo = Math.PI > 4 ? "Si" : "No";


// Objetos
// su característica principal es que son mutables
const persona = {
  nombre: "pepito",
  edad: 35,
  direccion: "calle 123",
} 
// 2 formas de acceder a los objetos: [] o .
console.log(persona.nombre, persona.edad) // pepito
console.log(persona["edad"]);

let string3 = "inmutable";
console.log(string3[0]) // i
string3[0] = "ñ";
console.log(string3[0]) // i

let arr = ["uno", "dos", "tres", "cuatro"]
console.log(arr); // "uno", "dos", "tres", "cuatro"
arr[0] = "mutable";
console.log(arr); // "mutable", "dos", "tres", "cuatro"

// for .. of | for(variable of iterable) // {sentencia}
//No se puede usar en objetos, sólo se puede usar con variables iterables
const miArray3 = ["A", "B", "C", "D", "E", "F", "G"]
for(let elementos of miArray3) {
	console.log(elementos)
}
// for .. in | for(variable in objeto) { // sentencia }
let colores2 = {
  a: "rojo",
  b: "azul",
  c: "verde",
}
for(const prop in colores2) {
  console.log(`El color ${prop} es ${colores2[prop]}`);
}

