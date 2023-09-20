
//console.log();

// .push() --> Agrega un elemento al final del arreglo
var puntoPush = ["push1", "push2", "push3"];
puntoPush.push = "push4";
console.log(puntoPush); //output--> ["push1", "push2", "push3", "push4"]

//------------------------------------------------------

//.pop() --> Quita el último elemento del arreglo
var puntoPop = ["pop1", "pop2", "pop3"];
puntoPop.pop();
console.log(puntoPop); //output --> ["pop1", "pop2"]

//Se puede asignar el último elemento de un arreglo a otra variable usando .pop()
var popDos = ["popA", "popB", "popC"];
var popTres = popDos.pop();
console.log(popDos); //output --> ["popA", "popB"]
console.log(popTres); // output --> popC

//------------------------------------------------------

// .shift() --> Quita un elemento al inicio del arreglo
var puntoShift = ["shift1", "shift2", "shift3"];
puntoShift.shift();
console.log(puntoShift); //output --> [ 'shift2', 'shift3' ]

//Se puede asignar el primer elemento de un arreglo a otra variable usando .shift()
var shiftDos = ['shiftA','shiftB','shiftC'];
var shiftTres = shiftDos.shift();
console.log(shiftDos); //output --> [ 'shiftB', 'shiftC' ]
console.log(shiftTres); //output --> shiftA

//------------------------------------------------------

// .unshift() --> Agrega un elemento al inicio de un arreglo
var puntoUns = ['uns1', 'uns2'];
puntoUns.unshift('uns0');
console.log(puntoUns); //output --> [ 'uns0', 'uns1', 'uns2' ]

//------------------------------------------------------
//Práctica
var listaDeCompras = [['huevo', 4], ['pan',6], ['galletas', 8], ['café', 2]];
console.log("Compraré " + listaDeCompras[2][1] + 
" unidades de " + listaDeCompras[3][0]); //output --> Compraré 8 unidades de café

//------------------------------------------------------

/*FUNCIONES(function) --> Con las funciones podemos escribir código que podemos reutilizar en el programa
syntax --> palabra reservada "function", nombre se la función seguido de paréntesis,  "X()",
se abren llaves "{}" y dentro de éstas se escribe la acción. Abajo un ejemplo.*/

function showMessage() {
    console.log("Hello");
}
showMessage(); //output --> Hello

/*Dentro de los paréntesis de la función se asignan parámetros que van a ser valores
variables (ó no) cuando llamemos a la función, también se le conoce cómo "lista de parámetros" 
a los valores dentro de los paréntesis.*/

//Dentro de las llaves se asigna las instrucciones o "el cuerpo" de la función.
function plus(a, b) {
    var suma = a + b;
    console.log("The result of " + a + " + " + b + " is: " + suma);
}
plus(20, 43); //output --> The result of 20 + 43 is: 63
//Los "argumentos" son los valores que asignamos a los parámetros -> plus(a, b) <-> plus(20, 43)

//En los argumentos asignados a los valores también podemos usar valores tipo string. Ej.:
function showChains(chain1, chain2, chain3) {
    console.log(chain1 + " " + chain2 + " " + chain3);
}
showChains("I am", "learning", "to code");

/*Tipos de variables --> no todas las variables pueden usarse en todas las partes del programa.
Existen dos tipos principales de variables:Globales y locales. */
//Una variable con ámbito global se puede usar en cualquier parte del programa, fuera y dentro de una función.
var globalVariable = 10;

function myFunction() {
    console.log(globalVariable);
}
console.log(globalVariable);//output --> 10 (fuera de la función)

myFunction(); //output --> 10 (dentro de la función)


// Una variable local se define y sólo se usa dentro de una función.
function myFunctionB() {
    var localVariable = 11;
    console.log(localVariable);
}
myFunctionB(); //output --> 11 (Dentro de la función)
//console.log(localVariable); Output --> ReferenceError: localVariable is not defined (Fuera de la función)

/*Cuando se asigna una variable local y una global con el mismo nombre la local sólo se vera cuando llamemos
a la función dónde se asigno y la global se vera en todo el programa excepto en la función de la local.*/
// Ej.:
var miNombre = "Nora";
function showName() {
    var miNombre = "Gina";
    console.log(miNombre);
}
console.log(miNombre); //output --> Nora (Variable global fuera de la función "showName")
showName(); //output --> Gina (Variable local dentro de la función "showName")

//RETORNAR VALOR (return)-> Las funciones pueden tomar y retornar valores.
function sumar(a, b) {
    return a + b;
}
sumar(7, 8); //Cuando se retorna un valor éste no se muestra en la consola hasta usarlo con console.log()
console.log(sumar(7, 8)); //output --> 15

//También se puede asignar el valor retornado a una variable. Ej.:
var resultB = sumar(7, 8); //Podríamos también pensar ésta línea cómo: var resultB = 15;
console.log(resultB); //output --> 15

function text1(completeText) {
    return "I want to learn" + completeText;
}
var fullText = text1(" code");
console.log(fullText); //output --> I want to learn code

//------------------------------------------------------
// Por defecto las funciones retornan el valor "undefined" cuando no son definidas.
function sumarB(q, w) {
    console.log(q + w);
}
console.log(sumarB(5, 3)); //output --> undefined

//Práctica
function nextInLine(arr, elem) {
    arr.push(elem); //Al arreglo (arr - theArray) le agregaremos el segundo parámetro (elem - 9) con .push
    return arr.shift();//Al arreglo (arr - theArray) le quitaremos el primer número (1) con .shift
}
var theArray = [1, 2, 3, 4];
console.log("Before = " + theArray);//output --> Before = 1,2,3,4
console.log(nextInLine(theArray, 9));//output --> 1
console.log("After = " + theArray); //output --> After = 2,3,4,9

/* Operador de igualdad ==. Al comparar dos valores el resultado será "true" ó "false",
  dependiendo si los valores son iguales o no.*/
console.log(9 == 9); //output --> true
console.log(9 == 8); //output --> false
console.log("Hi" == "hi"); //output --> false

function nextInLineB (arrB, numBk) {
    arrB.push(numBk);
    return arrB.shift();
}

var arrayN = [3, 5, 9, 30], numX = 8;
console.log(nextInLine(arrayN,numX));
console.log(arrayN);

function proximoEnLaFila (arr, elem) {
    arr.push(elemento);
    return arr.shift();
}
// 02.55.40






// 02.48.05




