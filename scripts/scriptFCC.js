
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

/* Operador de igualdad == . Al comparar dos valores el resultado será "true" ó "false",
  dependiendo si los valores son iguales o no.*/
console.log(9 == 9); //output --> true
console.log(9 == 8); //output --> false
console.log("Hi" == "hi"); //output --> false

// Operador de igualdad estricta === . 
console.log(9 == "9"); //output --> true 
console.log(9 === "9"); //output --> false

// Diferencia práctica entre el operador de igualdad y el operador de igualdad estricta. el operador de igualdad estricta no sólo compara el valor del dato, también el tipo de dato (string, number, bolean, etc...) y el operador de igualdad "convierte" los valores a un tipo de dato en común

var a;
var b;
a = 5;
b = 5;

console.log(a == b); //output --> true
console.log(a === b); //output --> true

b = 8;

console.log(a == b); //output --> false 
console.log(a === b); //output --> false

b = "5";

console.log(a == b); //output --> true
console.log(a === b); //output --> false

a = "JavaScript";
b = "JavaScript";

console.log(a == b);
console.log(a === b);

// Operador de desigualdad != .
console.log(9 != 6); //output --> true
console.log(9 != 9); //output --> false
console.log("JavaScript" != "JavaScript"); //output --> false

// Operador de desigualdad estricta !== .
console.log(1 != "1"); //output --> false 
console.log(1 !== "1"); //output --> true

// Operador mayor qué > .
console.log(3 > 1); //output --> true 
console.log(3 > 8); //output --> false 
console.log("Anayel" > "Anazel"); //output --> false 
// Al comparar strings se cuenta el orden alfabético de los caracteres
console.log("A" > "B"); //output --> false
console.log("B" > "A"); //output --> true

var a = 15;
var b = 7;

console.log(a > b); //output --> true
console.log(b > a); //output --> false

// Operador mayor o igual qué >= .
console.log(8 > 8); //output --> false
console.log(8 >= 8); //output --> true

// Operador menor que <
console.log(7 < 8); //output --> true
console.log(10 < 8); //output --> false

console.log("A" < "B"); //output --> true
console.log("B" < "A"); //output --> false
console.log("ABC" < "ACB"); //output --> true

var a = 9, b = 7;
console.log(a < b); //output --> false
console.log(b < a); //output --> true

// Operador menor o igual que <= .
console.log(5 < 5); //output --> false
console.log(5 <= 5); //output --> true

// OPERADORES LÓGICOS

// Operador and && . Todas las comparaciones deben ser verdaderas al usar && para que el resultado sea true, de lo contrario la salida será false
console.log(true && true); //output -->  true
console.log(true && false); //output --> false
console.log(false && true); //output --> false
console.log(false && false); //output --> false

var a = 5;
console.log((a > 4) && (a < 10)); //output --> true

var a = 3;
console.log((a > 4) && (a < 10)); //output --> false

var a = 15;
console.log((a > 4) && (a < 10)); //output --> false

var a = 15;
console.log((a == 4) && (a < 10)); //output --> false


// Operador or || . Con el operador "or" si cualquiera de los operandos son verdaderos el resultado será true, pero si todos los operandos son falsos el resultado será false.

console.log(true || true); //output -->  true
console.log(true || false); //output --> true
console.log(false || true); //output --> true
console.log(false || false); //output --> false

var a = 8;
console.log((a < 5) || (a > 15)); //output --> false
console.log((a > 5) || (a < 15)); //output --> true
console.log((a > 5) || (a > 15)); //output --> true
console.log((a < 5) || (a < 15)); //output --> true


// Operador not ! . Operador para negar una expresión
console.log(!true); //output --> false
console.log(!false); //output --> true

var a = 9;
console.log(!(a > 10)); //output --> true
console.log(!(a < 10)); //output --> true


// CONDICIONALES if .
if (true) {
    console.log("Hi"); //output --> Hi
}

var x = 9;
if (x > 5) {
    console.log("the condition is true"); //output --> the condition is true
}

if (x > 5 && x < 11) {
    console.log("the condition is true"); //output --> the condition is true
}

var season = "Winter";
if (season == "Winter") {
    console.log("i love winter"); //output --> i love winter
}
if (season == "Summer") {
    console.log("i love winter"); //output --> NA
}

// Claúsula else
x = 4;
if (x < 20) {
    console.log("it is true"); //output -->
} else {
    console.log("it is not true"); //output -->
}

season = "winter";

if (season == "summer") {
    console.log("let's go to the beach"); //output -->
} else {
    console.log("it is not summer yet"); //output -->
}


// Cláusula "else if"
function clasificarValor (value) {
    if (value % 2 == 0) {
        console.log("Divisible entre 2"); //output -->
    } else if (value % 3 == 0) {
        console.log("Divisible entre 3"); //output -->
    }
    else {
        console.log("Nop"); //output -->
    }
}
clasificarValor (9);

// Condicionales: Orden lógico

function val (value) {
    if (value < 5) {
        console.log("less than 5"); //output -->
    } else if (value < 10){
        console.log("less than 10"); //output -->
    } else {
        console.log("higher or equal to 10"); //output -->
    }
}
val(10);

// Encadenar sentencias "if...else"
function readIMC(IMC) {
    if (IMC < 18.5) {
        console.log("low weight"); //output -->
    } else if (IMC <= 24.9) {
        console.log("Normal"); //output -->
    } else if (IMC <= 29.9) {
        console.log("hight weight"); //output -->
    } else {
        console.log("Outch"); //output -->
    }
}
readIMC (20);

// Código de GOLF - Mini project
function golfScore (par, hits) {
    if (hits == 1) {
        return "Hole-in-ine!"; //output -->
    } else if (hits <= (par - 2) ) {
        return "Eagle"; //output -->
    } else if (hits == par - 1 ) {
        return "Birdie"; //output -->
    } else if (hits == par ) {
        return "Par"; //output -->
    } else if (hits == (par + 1) ) {
        return "Bogey"; //output -->
    } else if (hits == (par + 2) ) {
        return "Double Bogey"; //output -->
    } else if (hits >= (par + 3) ) {
        return "Go Home!"; //output -->
    } else {
        return "Not valid?"; //output -->
    }
}
var score = golfScore(4, 7);
console.log(score); //output -->

// Sentencias switch
function clasifyValue(value) {
    var answer;
    switch (value) { //Switch permite decidir a partir de un valor que va a pasar con éste mismo
        case 1: //Se definen casos específicos (con la palabra reservada "case") para la expresión asignada a switch, en éste caso la expresión es "value"
            answer = "alpha";
            break; //Es importante terminar cada caso ("case") con una sentencia "break".
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
var x = clasifyValue(4);
console.log(x); //output -->

//  Ej. 2

var product = "burguer";

switch (product) {
    case "pizza":
        console.log("$10USD"); //output -->
        break;
    case "burguer":
        console.log("$7USD"); //output -->
        break;
    case "icecream":
        console.log("$3USD"); //output -->
        break;
}

// Sentencias Switch: Opción predeterminada
//04.24.33