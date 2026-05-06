//Ejemplos y conceptos

const name = "Ana";
// name = "Luis" => da error 

// const protege la referencia de la variable, no el contenido
//interno  del objeto.

const user = {name:"ana"};
user.name = "luis";

const numeros = [1, 2, 3];
numeros.push(4); // OK
numeros = [1, 2, 3, 4]; // Error

let age = 26;
age = 27; // ok

//Funciones y arrow functions
function sumar(a, b) {
    return a + b;
}

const sumar = (a, b) => {
    return a + b;
};

const sumar = (a, b) => a + b;

