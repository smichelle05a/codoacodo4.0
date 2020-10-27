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

console.log("var miNombre cambió a: " + miNombre)

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

console.log(str)
console.log(str2)
console.log(str3)
console.log(`${str} y ${str2}`) //concantenar variables y string
// es lo mismo que console.log(str + " y " + str2)

// number
let numInt = 123;
let numFloat = 10.20;
let numNegative = -80
//console.log("No es un número"*2) NaN -> Not a Number

let multiplicacion = numInt * numFloat
let division = numNegative / multiplicacion
let suma = numInt + numFloat
let resta = numNegative - multiplicacion

console.log("Número entero: " + numInt)
console.log("Número con coma flotante: " + numFloat)
console.log("Número negativo: " + numNegative)
console.log(`Suma de ${numInt} y ${numFloat} = ${suma}`)
console.log(`Resta de ${numNegative} y ${multiplicacion} = ${resta}`)
console.log(`Multiplicación de ${numInt} y ${numFloat} = ${multiplicacion}`)
console.log(`División de ${numNegative} y ${multiplicacion} = ${division}`)

// boolean

let soyVerdadero = true;
let soyFalso = false;
let soyMayor = 4>1;
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
console.log(reemplazar.replace("hola","chau"));

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
n+=5 // n = 2 + 5

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

if (5>4) {
    console.log("5 es mayor")
}

// if - else
if ( "a" === "a") {
    console.log("pasó la condición")
} else {
    console.log("no pasó la condición")
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
  console.log("Pepe es mayor")
} else if (pepeEdad == juanEdad) {
  console.log("Tienen la misma edad")
} else {
  console.log("Juan es mayor");
}

pepeEdad = 11;
juanEdad = 11;
if (pepeEdad > juanEdad) {
  console.log("Pepe es mayor")
} else if (pepeEdad == juanEdad) {
  console.log("Tienen la misma edad")
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
    console.log(i)
    i++;
}

/*
let color = "";
while (color != "rosa") {
    color = prompt("Escribí un color (rosa para salir)")
}*/

console.log("----------------- For ------------");
for (let indice = 1; indice <= 10; indice++) {
    console.log(indice)
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

